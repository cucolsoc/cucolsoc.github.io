import { Navigation } from "@/components/navigation"
import { NewsSection } from "@/components/news-section"
import { Footer } from "@/components/footer"

export default function News() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-20">
        <NewsSection />
      </div>
      <Footer />
    </main>
  )
}
