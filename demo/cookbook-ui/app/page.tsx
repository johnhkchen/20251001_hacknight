import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChefHat, BookOpen, Clock, Users } from "lucide-react"

const featuredRecipes = [
  {
    id: 1,
    title: "Middle Eastern Grilled Meat Sandwich",
    cuisine: "Turkish",
    time: "45 min",
    servings: "2",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_3761-7StZ4LzJUB9N7t27thDrXvZvkUHv8T.jpeg",
    difficulty: "Intermediate",
  },
  {
    id: 2,
    title: "Mediterranean Flatbread",
    cuisine: "Mediterranean",
    time: "30 min",
    servings: "4",
    image: "/mediterranean-flatbread-with-herbs.jpg",
    difficulty: "Easy",
  },
  {
    id: 3,
    title: "Spiced Lamb Kebabs",
    cuisine: "Middle Eastern",
    time: "60 min",
    servings: "4",
    image: "/grilled-lamb-kebabs-with-vegetables.jpg",
    difficulty: "Intermediate",
  },
  {
    id: 4,
    title: "Fresh Garden Salad",
    cuisine: "International",
    time: "15 min",
    servings: "4",
    image: "/fresh-colorful-garden-salad.jpg",
    difficulty: "Easy",
  },
  {
    id: 5,
    title: "Homemade Pita Bread",
    cuisine: "Middle Eastern",
    time: "90 min",
    servings: "8",
    image: "/fresh-pita-bread-stack.jpg",
    difficulty: "Advanced",
  },
  {
    id: 6,
    title: "Grilled Vegetable Platter",
    cuisine: "Mediterranean",
    time: "35 min",
    servings: "6",
    image: "/colorful-grilled-vegetables-platter.jpg",
    difficulty: "Easy",
  },
]

export default function HomePage() {
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

      {/* Hero Section */}
      <section className="bg-secondary/30 py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6 text-balance">
              Discover Authentic International Recipes
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 text-pretty leading-relaxed">
              Learn to cook delicious dishes from around the world with our carefully curated collection of traditional
              recipes and modern techniques.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                <BookOpen className="mr-2 h-5 w-5" />
                Browse Recipes
              </Button>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Recipes Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">Featured Recipes</h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Explore our handpicked selection of recipes that celebrate flavors from around the world.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredRecipes.map((recipe) => (
              <Link key={recipe.id} href={`/recipe/${recipe.id}`}>
                <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={recipe.image || "/placeholder.svg"}
                      alt={recipe.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="mb-3">
                      <span className="inline-block px-3 py-1 text-xs font-medium bg-accent/10 text-accent rounded-full">
                        {recipe.cuisine}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3 text-balance">{recipe.title}</h3>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{recipe.time}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        <span>{recipe.servings}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Start Your Culinary Journey Today</h2>
            <p className="text-lg mb-8 opacity-90 text-pretty leading-relaxed">
              Join thousands of home cooks learning to create authentic dishes from around the world.
            </p>
            <Button size="lg" variant="secondary" className="bg-background text-foreground hover:bg-background/90">
              Explore All Recipes
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card py-12">
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
