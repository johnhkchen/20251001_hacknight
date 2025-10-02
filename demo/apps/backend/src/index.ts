import { Hono } from 'hono'
import { cors } from 'hono/cors'

const app = new Hono()

app.use('/*', cors())

app.get('/api', (c) => {
  return c.json({ message: 'Hello from Hono backend!' })
})

const port = 3001
console.log(`Backend running on http://localhost:${port}`)

export default {
  port,
  fetch: app.fetch,
}
