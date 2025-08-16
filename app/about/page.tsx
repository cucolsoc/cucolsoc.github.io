import { Navigation } from "@/components/navigation"
import { AboutSection } from "@/components/about-section"
import { Footer } from "@/components/footer"

export default function About() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-20">
        <AboutSection />
      </div>
      <Footer />
    </main>
  )
}
