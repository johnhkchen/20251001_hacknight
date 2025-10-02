import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChefHat, Clock, Users, ArrowLeft, Printer } from "lucide-react"

export default function RecipePage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <ChefHat className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold tracking-tight text-foreground">The Cookbook</span>
            </Link>
            <nav className="hidden md:flex items-center gap-8">
              <Link href="/" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                Recipes
              </Link>
              <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                Cuisines
              </Link>
              <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                About
              </Link>
              <Button size="sm" className="bg-primary hover:bg-primary/90">
                Get Started
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Recipe Content */}
      <div className="container mx-auto px-4 py-8 md:py-12">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Recipes
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Recipe Image */}
          <div>
            <div className="aspect-[4/3] rounded-lg overflow-hidden mb-6">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_3761-7StZ4LzJUB9N7t27thDrXvZvkUHv8T.jpeg"
                alt="Middle Eastern Grilled Meat Sandwich"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="aspect-square rounded-lg overflow-hidden">
                <img src="/flatbread-dough-preparation.jpg" alt="Step 1" className="w-full h-full object-cover" />
              </div>
              <div className="aspect-square rounded-lg overflow-hidden">
                <img src="/grilling-meat-on-skewers.jpg" alt="Step 2" className="w-full h-full object-cover" />
              </div>
              <div className="aspect-square rounded-lg overflow-hidden">
                <img src="/assembled-sandwich-with-vegetables.jpg" alt="Step 3" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          {/* Recipe Info */}
          <div>
            <div className="mb-4">
              <Badge className="bg-accent/10 text-accent hover:bg-accent/20">Turkish Cuisine</Badge>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
              Middle Eastern Grilled Meat Sandwich
            </h1>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              A delicious Turkish-style sandwich featuring tender grilled meat, fresh vegetables, and aromatic spices
              wrapped in homemade flatbread. Perfect for a hearty lunch or dinner.
            </p>

            <div className="flex flex-wrap gap-6 mb-8">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                <div>
                  <div className="text-sm text-muted-foreground">Prep Time</div>
                  <div className="font-semibold text-foreground">45 min</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                <div>
                  <div className="text-sm text-muted-foreground">Servings</div>
                  <div className="font-semibold text-foreground">2 people</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <ChefHat className="h-5 w-5 text-primary" />
                <div>
                  <div className="text-sm text-muted-foreground">Difficulty</div>
                  <div className="font-semibold text-foreground">Intermediate</div>
                </div>
              </div>
            </div>

            <Button className="bg-primary hover:bg-primary/90 w-full sm:w-auto">
              <Printer className="mr-2 h-4 w-4" />
              Print Recipe
            </Button>
          </div>
        </div>

        {/* Ingredients and Instructions */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Ingredients */}
          <div className="lg:col-span-1">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-foreground mb-6">Ingredients</h2>

                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-foreground mb-3">For the Meat</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>500g lamb or beef, thinly sliced</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>2 cloves garlic, minced</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>2 tbsp olive oil</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>1 tsp cumin</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>1 tsp paprika</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Salt and pepper to taste</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-3">For the Flatbread</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>2 pieces flatbread or pita</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>160g all-purpose flour</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>1 tsp yeast</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Warm water as needed</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-3">Toppings</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Fresh lettuce</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Sliced tomatoes</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Sliced onions</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Fresh herbs (cilantro, parsley)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Yogurt sauce or tahini</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Instructions */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-foreground mb-6">Instructions</h2>

            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                        1
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Prepare the Marinade</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        In a large bowl, combine the sliced meat with minced garlic, olive oil, cumin, paprika, salt,
                        and pepper. Mix well to ensure all meat is coated. Cover and marinate for at least 15 minutes,
                        or up to 2 hours in the refrigerator for best results.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                        2
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Make the Flatbread</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Mix flour, yeast, and warm water to form a soft dough. Knead for 5-7 minutes until smooth and
                        elastic. Let rest for 30 minutes covered with a damp cloth. Divide into portions and roll out
                        into thin circles. Cook on a hot griddle or pan for 2-3 minutes per side until puffed and
                        lightly charred.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                        3
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Grill the Meat</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Heat a grill or large skillet over high heat. Add the marinated meat in a single layer and cook
                        for 3-4 minutes per side until nicely charred and cooked through. Remove from heat and let rest
                        for a few minutes before assembling.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                        4
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Assemble the Sandwich</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Warm the flatbread slightly if needed. Layer with fresh lettuce, sliced tomatoes, onions, and
                        the grilled meat. Top with fresh herbs and drizzle with yogurt sauce or tahini. Fold or wrap the
                        flatbread around the fillings. Serve immediately while warm.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Tips Section */}
            <Card className="mt-8 bg-secondary/30">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-3">Chef's Tips</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>For extra flavor, add a pinch of sumac or za'atar to the meat marinade</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>You can substitute store-bought pita bread to save time</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Leftover meat can be stored in the refrigerator for up to 3 days</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-border bg-card py-12 mt-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <ChefHat className="h-6 w-6 text-primary" />
                <span className="text-lg font-bold text-foreground">The Cookbook</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Your guide to authentic international cuisine and cooking techniques.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-4">Recipes</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="#" className="hover:text-primary transition-colors">
                    By Cuisine
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary transition-colors">
                    By Difficulty
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary transition-colors">
                    Quick Meals
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-4">Learn</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="#" className="hover:text-primary transition-colors">
                    Cooking Tips
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary transition-colors">
                    Techniques
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary transition-colors">
                    Ingredients
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-4">About</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="#" className="hover:text-primary transition-colors">
                    Our Story
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary transition-colors">
                    Newsletter
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>© 2025 The Cookbook. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
