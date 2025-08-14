import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const modernConnections = [
  {
    dinosaur: "Tyrannosaurus Rex",
    modernAnimal: "Chickens & Birds",
    connection: "Direct Descendants",
    evidence: [
      "Hollow bones for reduced weight",
      "Similar protein structures in bones",
      "Shared wishbone (furcula) structure",
      "Similar egg-laying and nesting behaviors",
    ],
    image: "/t-rex-chicken-comparison.png",
  },
  {
    dinosaur: "Velociraptor",
    modernAnimal: "Birds of Prey",
    connection: "Behavioral & Physical Similarities",
    evidence: [
      "Sickle-shaped killing claws",
      "Pack hunting strategies",
      "Feathered bodies for insulation",
      "High intelligence and problem-solving",
    ],
    image: "/velociraptor-eagle-claws.png",
  },
  {
    dinosaur: "Sauropods (Long-necked)",
    modernAnimal: "Giraffes & Elephants",
    connection: "Convergent Evolution",
    evidence: [
      "Long necks for reaching high vegetation",
      "Herd behavior for protection",
      "Large body size for defense",
      "Complex social structures",
    ],
    image: "/brontosaurus-giraffe-necks.png",
  },
  {
    dinosaur: "Spinosaurus",
    modernAnimal: "Crocodiles & Herons",
    connection: "Aquatic Adaptations",
    evidence: [
      "Semi-aquatic lifestyle",
      "Fish-eating specialization",
      "Webbed feet for swimming",
      "Dense bones for buoyancy control",
    ],
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    dinosaur: "Triceratops",
    modernAnimal: "Rhinoceros",
    connection: "Defensive Strategies",
    evidence: [
      "Horned facial features for defense",
      "Charging behavior when threatened",
      "Thick, protective skin",
      "Herbivorous grazing patterns",
    ],
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    dinosaur: "Stegosaurus",
    modernAnimal: "Armadillos & Pangolins",
    connection: "Armor & Defense",
    evidence: [
      "Protective plates and spikes",
      "Defensive posturing when threatened",
      "Specialized armor for protection",
      "Slow movement with heavy defenses",
    ],
    image: "/placeholder.svg?height=200&width=300",
  },
]

export function ModernRelatives() {
  return (
    <section id="relatives" className="py-20 px-4 bg-white">
      <div className="container max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-black text-gray-900 mb-4">
            Modern Relatives & Connections
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover how dinosaurs live on today through their descendants and evolutionary relatives
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {modernConnections.map((connection, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <div className="aspect-video overflow-hidden rounded-t-lg">
                <img
                  src={connection.image || "/placeholder.svg"}
                  alt={`${connection.dinosaur} and ${connection.modernAnimal} comparison`}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-lg font-serif font-bold text-gray-900">{connection.dinosaur}</CardTitle>
                <CardDescription className="text-blue-600 font-semibold">↓ {connection.modernAnimal}</CardDescription>
                <p className="text-sm text-gray-600 font-medium">{connection.connection}</p>
              </CardHeader>
              <CardContent>
                <div>
                  <h4 className="font-semibold text-sm text-gray-900 mb-3">Evidence & Similarities:</h4>
                  <ul className="text-sm text-gray-600 space-y-2">
                    {connection.evidence.map((evidence, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        {evidence}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-blue-50 rounded-lg p-8">
          <div className="text-center">
            <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">The Living Legacy of Dinosaurs</h3>
            <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Birds are the direct descendants of theropod dinosaurs, making them living dinosaurs today. Every time you
              see a bird fly, you're witnessing the continuation of a lineage that began over 150 million years ago.
              From the mighty T-Rex to the humble sparrow, the connection spans millions of years of evolution,
              adaptation, and survival.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
