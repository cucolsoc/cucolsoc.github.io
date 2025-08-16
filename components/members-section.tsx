import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function MembersSection() {
  const memberTypes = [
    {
      title: "Current Students",
      description: "Colombian students currently studying at Cambridge University",
      image: "/colombian-cambridge-students.png",
      count: "50+",
    },
    {
      title: "Alumni Network",
      description: "Graduates who continue to support and mentor current students",
      image: "/cambridge-colombian-graduates.png",
      count: "200+",
    },
    {
      title: "Friends of Colombia",
      description: "International students and faculty interested in Colombian culture",
      image: "/cambridge-colombian-celebration.png",
      count: "30+",
    },
  ]

  return (
    <section id="members" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-sans text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our <span className="text-primary">Community</span>
          </h2>
          <p className="font-serif text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A diverse and vibrant community united by our connection to Colombia and Cambridge
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {memberTypes.map((type, index) => (
            <Card key={index} className="group hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={type.image || "/placeholder.svg"}
                    alt={type.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold">
                    {type.count}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-sans text-xl font-semibold text-secondary mb-3">{type.title}</h3>
                  <p className="font-serif text-muted-foreground leading-relaxed">{type.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
            Become a Member
          </Button>
        </div>
      </div>
    </section>
  )
}
