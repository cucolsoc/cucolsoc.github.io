import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, ArrowRight } from "lucide-react"

export function NewsSection() {
  const news = [
    {
      title: "Annual Colombian Independence Day Celebration",
      excerpt:
        "Join us for our biggest event of the year celebrating Colombia's independence with traditional food, music, and dance.",
      date: "July 20, 2024",
      image: "/colombian-independence-cambridge.png",
      category: "Event",
    },
    {
      title: "CUCOL Scholarship Program Launch",
      excerpt:
        "We're excited to announce our new scholarship program supporting Colombian students pursuing graduate studies at Cambridge.",
      date: "June 15, 2024",
      image: "/cambridge-scholarship-colombian.png",
      category: "Announcement",
    },
    {
      title: "Academic Seminar: Colombia's Economic Future",
      excerpt:
        "Professor María González discusses Colombia's economic prospects and the role of Cambridge-educated professionals.",
      date: "May 30, 2024",
      image: "/cambridge-colombian-economics-seminar.png",
      category: "Academic",
    },
  ]

  return (
    <section id="news" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-sans text-3xl md:text-4xl font-bold text-foreground mb-4">
            Latest <span className="text-accent">News</span>
          </h2>
          <p className="font-serif text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Stay updated with our latest events, announcements, and community highlights
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {news.map((article, index) => (
            <Card key={index} className="group hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                    {article.category}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-muted-foreground text-sm mb-3">
                    <Calendar className="h-4 w-4 mr-2" />
                    {article.date}
                  </div>
                  <h3 className="font-sans text-lg font-semibold text-foreground mb-3 group-hover:text-secondary transition-colors">
                    {article.title}
                  </h3>
                  <p className="font-serif text-muted-foreground leading-relaxed mb-4">{article.excerpt}</p>
                  <Button variant="ghost" className="p-0 h-auto text-secondary hover:text-secondary/80">
                    Read More <ArrowRight className="h-4 w-4 ml-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            variant="outline"
            className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
          >
            View All News
          </Button>
        </div>
      </div>
    </section>
  )
}
