import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const classifications = [
  {
    type: "Carnivorous",
    icon: "🦖",
    description: "Meat-eating predators with sharp teeth and claws",
    examples: ["Tyrannosaurus Rex", "Velociraptor", "Allosaurus"],
    characteristics: ["Sharp, serrated teeth", "Strong jaw muscles", "Powerful hind limbs", "Keen eyesight"],
  },
  {
    type: "Herbivorous",
    icon: "🦕",
    description: "Plant-eating dinosaurs with specialized digestive systems",
    examples: ["Brontosaurus", "Triceratops", "Stegosaurus"],
    characteristics: [
      "Flat grinding teeth",
      "Long necks (some species)",
      "Complex stomach systems",
      "Defensive features",
    ],
  },
  {
    type: "Omnivorous",
    icon: "🦴",
    description: "Dinosaurs that ate both plants and meat",
    examples: ["Oviraptor", "Ornithomimus", "Therizinosaurus"],
    characteristics: ["Varied tooth types", "Flexible diet", "Medium-sized builds", "Opportunistic feeding"],
  },
  {
    type: "Aquatic/Semi-Aquatic",
    icon: "🌊",
    description: "Dinosaurs adapted for life in or near water",
    examples: ["Spinosaurus", "Baryonyx", "Suchomimus"],
    characteristics: ["Webbed feet or flippers", "Streamlined bodies", "Fish-eating adaptations", "Dense bones"],
  },
]

export function ClassificationSection() {
  return (
    <section id="classifications" className="py-20 px-4 bg-white">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-black text-gray-900 mb-4">Dinosaur Classifications</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover how dinosaurs are categorized based on their diet, habitat, and physical characteristics
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {classifications.map((classification, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="text-4xl mb-2">{classification.icon}</div>
                <CardTitle className="text-xl font-serif font-bold text-blue-600">{classification.type}</CardTitle>
                <CardDescription className="text-sm">{classification.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-sm text-gray-900 mb-2">Examples:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {classification.examples.map((example, i) => (
                        <li key={i}>• {example}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-gray-900 mb-2">Key Features:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {classification.characteristics.map((char, i) => (
                        <li key={i}>• {char}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
