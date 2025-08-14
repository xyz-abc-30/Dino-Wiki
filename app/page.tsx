import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ClassificationSection } from "@/components/classification-section"
import { FeaturedSpecies } from "@/components/featured-species"
import { ModernRelatives } from "@/components/modern-relatives"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ClassificationSection />
        <FeaturedSpecies />
        <ModernRelatives />
      </main>
      <Footer />
    </div>
  )
}
