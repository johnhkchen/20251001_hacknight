import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { serve } from '@hono/node-server'
import OpenAI from 'openai'
import { trackOpenAI } from 'opik-openai'
import { randomUUID } from 'crypto'

const app = new Hono()

// Initialize OpenAI
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

// Wrap OpenAI client with Opik tracking
const trackedOpenAI = trackOpenAI(openai, {
  projectName: 'recipe-rosetta'
})

// In-memory storage for traces (in production, use a database)
const traces = new Map<string, any>()

app.use('/*', cors())

app.get('/api', (c) => {
  return c.json({ message: 'Hello from Hono backend!' })
})

// POST /api/run - Extract recipe from cookbook image
app.post('/api/run', async (c) => {
  try {
    const formData = await c.req.formData()
    const imageFile = formData.get('image') as File

    console.log('[API] Received image upload:', imageFile?.name, imageFile?.size, 'bytes')

    if (!imageFile) {
      return c.json({ error: 'Image file is required' }, 400)
    }

    const runId = randomUUID()
    console.log('[API] Generated runId:', runId)

    // Convert image to base64
    const arrayBuffer = await imageFile.arrayBuffer()
    const buffer = Buffer.from(arrayBuffer)
    const base64Image = buffer.toString('base64')
    const mimeType = imageFile.type || 'image/jpeg'

    // Stage 1: OCR/Transcription - Extract raw text in original language
    console.log('[Stage 1] OCR/Transcription - Extracting raw text from image')
    const stage1 = await trackedOpenAI.chat.completions.create({
      model: 'gpt-5-mini-2025-08-07',
      messages: [
        {
          role: 'system',
          content: 'You are an OCR specialist. Your ONLY job is to accurately transcribe ALL text from the image in its original language. Do not translate. Do not interpret. Do not skip any text. Just transcribe exactly what you see, preserving line breaks and structure.'
        },
        {
          role: 'user',
          content: [
            {
              type: 'text',
              text: 'Transcribe ALL text from this cookbook page image in its original language. Include everything: title, ingredients, instructions, notes - everything visible. Preserve the structure with line breaks.'
            },
            {
              type: 'image_url',
              image_url: {
                url: `data:${mimeType};base64,${base64Image}`
              }
            }
          ]
        }
      ],
      max_completion_tokens: 2000
    })

    const rawText = stage1.choices[0]?.message?.content || ''
    console.log('[Stage 1] Raw transcription length:', rawText.length, 'characters')

    // Stage 2: Translation - Convert to English while preserving structure
    console.log('[Stage 2] Translation - Converting to English')
    const stage2 = await trackedOpenAI.chat.completions.create({
      model: 'gpt-5-mini-2025-08-07',
      messages: [
        {
          role: 'system',
          content: 'You are a recipe translator. Translate the recipe text to English while preserving all structure, sections, and details. Identify and label sections (title, ingredients, instructions, etc.).'
        },
        {
          role: 'user',
          content: `Translate this recipe to English, preserving all details and structure:\n\n${rawText}`
        }
      ],
      max_completion_tokens: 2000
    })

    const translatedText = stage2.choices[0]?.message?.content || ''
    console.log('[Stage 2] Translation complete, length:', translatedText.length, 'characters')

    // Stage 3: Format as Astro markdown
    console.log('[Stage 3] Formatting - Converting to Astro markdown')
    const stage3 = await trackedOpenAI.chat.completions.create({
      model: 'gpt-5-mini-2025-08-07',
      messages: [
        {
          role: 'system',
          content: 'You are a markdown formatter. Convert recipe text into Astro-compatible markdown with YAML frontmatter.'
        },
        {
          role: 'user',
          content: `Format this recipe as Astro-compatible markdown with YAML frontmatter:\n\n${translatedText}\n\nInclude:\n1. YAML frontmatter with: title, description, prepTime, cookTime, servings, tags\n2. ## Ingredients section with bulleted list\n3. ## Instructions section with numbered steps`
        }
      ],
      max_completion_tokens: 2000
    })

    const markdown = stage3.choices[0]?.message?.content || ''
    console.log('[Stage 3] Markdown formatting complete')

    console.log('[Pipeline] All stages complete:', {
      stage1_tokens: stage1.usage,
      stage2_tokens: stage2.usage,
      stage3_tokens: stage3.usage
    })

    // Generate filename from title or use runId
    const titleMatch = markdown.match(/title:\s*["']?([^"'\n]+)["']?/i)
    const title = titleMatch ? titleMatch[1].trim() : 'recipe'
    const filename = `${title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}.md`

    // Flush traces to ensure they're sent to Opik
    console.log('[Opik] Flushing traces...')
    await trackedOpenAI.flush()
    console.log('[Opik] Traces flushed successfully')

    // Store trace for retrieval
    traces.set(runId, {
      runId,
      input: { imageFile: imageFile.name, size: imageFile.size },
      stages: {
        stage1_transcription: { text: rawText, tokens: stage1.usage },
        stage2_translation: { text: translatedText, tokens: stage2.usage },
        stage3_formatting: { text: markdown, tokens: stage3.usage }
      },
      output: { markdown, filename },
      metadata: {
        model: stage1.model,
        totalTokens: {
          prompt: (stage1.usage?.prompt_tokens || 0) + (stage2.usage?.prompt_tokens || 0) + (stage3.usage?.prompt_tokens || 0),
          completion: (stage1.usage?.completion_tokens || 0) + (stage2.usage?.completion_tokens || 0) + (stage3.usage?.completion_tokens || 0),
          total: (stage1.usage?.total_tokens || 0) + (stage2.usage?.total_tokens || 0) + (stage3.usage?.total_tokens || 0)
        }
      },
      timestamp: new Date().toISOString(),
    })

    console.log('[API] Returning response for runId:', runId)
    return c.json({ runId, markdown, filename })
  } catch (error: any) {
    console.error('[ERROR] Error in /api/run:', error)
    return c.json({ error: error.message || 'Internal server error' }, 500)
  }
})

// GET /api/trace/:runId - Get trace for a run
app.get('/api/trace/:runId', (c) => {
  const runId = c.req.param('runId')
  const trace = traces.get(runId)

  if (!trace) {
    return c.json({ error: 'Trace not found' }, 404)
  }

  return c.json(trace)
})

const port = 3002

serve({
  fetch: app.fetch,
  port
})

console.log(`Backend running on http://localhost:${port}`)
console.log('[Opik] Configuration:')
console.log('  - API Key:', process.env.OPIK_API_KEY ? '***' + process.env.OPIK_API_KEY.slice(-4) : 'NOT SET')
console.log('  - URL Override:', process.env.OPIK_URL_OVERRIDE || 'default')
console.log('  - Workspace:', process.env.OPIK_WORKSPACE || 'default')
console.log('[OpenAI] API Key:', process.env.OPENAI_API_KEY ? '***' + process.env.OPENAI_API_KEY.slice(-4) : 'NOT SET')
