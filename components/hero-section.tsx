import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative py-20 px-4 text-center bg-gradient-to-b from-blue-50 to-white">
      <div className="container max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-serif font-black text-gray-900 mb-6">
          Unearth the Past: Discover the Dinosaurs That Roamed Our Planet
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8 font-sans">
          Explore Species, Classifications, and Their Modern Relatives
        </p>
        <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
          Start Your Journey
        </Button>

        <div className="mt-16 relative">
          <img
            src="/prehistoric-landscape.png"
            alt="Prehistoric landscape with dinosaurs"
            className="w-full max-w-4xl mx-auto rounded-lg shadow-2xl"
          />
        </div>
      </div>
    </section>
  )
}
