import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/colombian-abstract-cambridge.png')`,
        }}
      >
        <div className="absolute inset-0 bg-background/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex justify-center">
          <Image
            src="/images/cucol-logo.png"
            alt="CUCOL - Cambridge University Colombian Society"
            width={200}
            height={200}
            className="w-32 h-32 md:w-48 md:h-48"
            priority
          />
        </div>

        <h1 className="font-sans text-4xl md:text-6xl font-bold text-foreground mb-6">
          Cambridge University
          <span className="block text-primary">Colombian Society</span>
        </h1>
        <p className="font-serif text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          Connecting Colombian students at Cambridge University, celebrating our heritage, and building bridges between
          cultures in the heart of academic excellence.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/about">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 w-full sm:w-auto">
              Learn About Us
            </Button>
          </Link>
          <Link href="/members">
            <Button
              size="lg"
              variant="outline"
              className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground bg-transparent w-full sm:w-auto"
            >
              Join Our Community
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
