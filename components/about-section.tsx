import { Card, CardContent } from "@/components/ui/card"

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-sans text-3xl md:text-4xl font-bold text-foreground mb-4">
            About <span className="text-accent">CUCOL</span>
          </h2>
          <p className="font-serif text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Fostering Colombian culture and community within the prestigious halls of Cambridge University
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img src="/colombian-cambridge-celebration.png" alt="CUCOL community" className="rounded-lg shadow-lg w-full" />
          </div>

          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-sans text-xl font-semibold text-secondary mb-3">Our Mission</h3>
                <p className="font-serif text-muted-foreground leading-relaxed">
                  To create a vibrant community that celebrates Colombian heritage while embracing the academic
                  excellence of Cambridge University. We provide support, cultural events, and networking opportunities
                  for Colombian students and friends of Colombia.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-sans text-xl font-semibold text-secondary mb-3">Our Values</h3>
                <p className="font-serif text-muted-foreground leading-relaxed">
                  Unity, academic excellence, cultural pride, and community service guide everything we do. We believe
                  in the power of education to transform lives and communities, both in Cambridge and back home in
                  Colombia.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-sans text-xl font-semibold text-secondary mb-3">Our Impact</h3>
                <p className="font-serif text-muted-foreground leading-relaxed">
                  Since our founding, we've connected hundreds of students, organized cultural celebrations, academic
                  seminars, and charity initiatives that strengthen ties between Cambridge and Colombia.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
