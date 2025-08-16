import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone, Facebook, Instagram, Linkedin } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-sans text-3xl md:text-4xl font-bold text-foreground mb-4">
            Get in <span className="text-primary">Touch</span>
          </h2>
          <p className="font-serif text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Have questions or want to get involved? We'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card>
            <CardContent className="p-8">
              <h3 className="font-sans text-2xl font-semibold text-secondary mb-6">Send us a Message</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="font-serif text-sm font-medium text-foreground mb-2 block">First Name</label>
                    <Input placeholder="Your first name" />
                  </div>
                  <div>
                    <label className="font-serif text-sm font-medium text-foreground mb-2 block">Last Name</label>
                    <Input placeholder="Your last name" />
                  </div>
                </div>
                <div>
                  <label className="font-serif text-sm font-medium text-foreground mb-2 block">Email</label>
                  <Input type="email" placeholder="your.email@cam.ac.uk" />
                </div>
                <div>
                  <label className="font-serif text-sm font-medium text-foreground mb-2 block">Subject</label>
                  <Input placeholder="What's this about?" />
                </div>
                <div>
                  <label className="font-serif text-sm font-medium text-foreground mb-2 block">Message</label>
                  <Textarea placeholder="Tell us more..." rows={5} />
                </div>
                <Button size="lg" className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card>
              <CardContent className="p-8">
                <h3 className="font-sans text-2xl font-semibold text-secondary mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-primary mr-3" />
                    <span className="font-serif text-foreground">cucol@cam.ac.uk</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-primary mr-3" />
                    <span className="font-serif text-foreground">Cambridge University, Cambridge, UK</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-primary mr-3" />
                    <span className="font-serif text-foreground">+44 (0) 1223 123456</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h3 className="font-sans text-2xl font-semibold text-secondary mb-6">Follow Us</h3>
                <div className="flex space-x-4">
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                  >
                    <Facebook className="h-4 w-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
                  >
                    <Instagram className="h-4 w-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground bg-transparent"
                  >
                    <Linkedin className="h-4 w-4" />
                  </Button>
                </div>
                <p className="font-serif text-muted-foreground mt-4 leading-relaxed">
                  Stay connected with our community and never miss an event or announcement.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h3 className="font-sans text-2xl font-semibold text-secondary mb-6">Office Hours</h3>
                <div className="space-y-2 font-serif text-foreground">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>10:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
