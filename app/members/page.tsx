import { Navigation } from "@/components/navigation"
import { MembersSection } from "@/components/members-section"
import { Footer } from "@/components/footer"

export default function Members() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-20">
        <MembersSection />
      </div>
      <Footer />
    </main>
  )
}
