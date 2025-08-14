import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const featuredDinosaurs = [
  {
    name: "Tyrannosaurus Rex",
    period: "Late Cretaceous",
    classification: "Carnivorous",
    size: "12-13 meters long",
    weight: "8-14 tons",
    habitat: "Forests and river plains",
    modernRelative: "Birds (especially chickens)",
    facts: [
      "Had teeth up to 20cm long",
      "Excellent sense of smell",
      "Could run up to 25 mph",
      "Had tiny arms but incredibly strong",
    ],
    image: "/tyrannosaurus-rex-forest.png",
  },
  {
    name: "Triceratops",
    period: "Late Cretaceous",
    classification: "Herbivorous",
    size: "8-9 meters long",
    weight: "6-12 tons",
    habitat: "Open woodlands and plains",
    modernRelative: "Rhinoceros and elephants",
    facts: [
      "Had over 800 small teeth",
      "Frill was likely for display",
      "Lived in herds for protection",
      "Could charge at 25 mph",
    ],
    image: "/triceratops-grazing.png",
  },
  {
    name: "Velociraptor",
    period: "Late Cretaceous",
    classification: "Carnivorous",
    size: "2 meters long",
    weight: "15-20 kg",
    habitat: "Desert and semi-arid regions",
    modernRelative: "Birds of prey (hawks, eagles)",
    facts: [
      "Had feathers for insulation",
      "Hunted in coordinated packs",
      "Sickle-shaped killing claw",
      "Highly intelligent problem solver",
    ],
    image: "/velociraptor-desert-hunt.png",
  },
  {
    name: "Brontosaurus",
    period: "Late Jurassic",
    classification: "Herbivorous",
    size: "22 meters long",
    weight: "15-17 tons",
    habitat: "River valleys and floodplains",
    modernRelative: "Giraffes and elephants",
    facts: [
      "Could reach treetops 9m high",
      "Swallowed stones to aid digestion",
      "Lived in herds for protection",
      "Had a whip-like tail for defense",
    ],
    image: "/brontosaurus-river-herd.png",
  },
  {
    name: "Spinosaurus",
    period: "Mid Cretaceous",
    classification: "Semi-Aquatic Carnivorous",
    size: "15-18 meters long",
    weight: "7-20 tons",
    habitat: "Rivers, lakes, and swamps",
    modernRelative: "Crocodiles and herons",
    facts: [
      "Largest known carnivorous dinosaur",
      "Had webbed feet for swimming",
      "Primarily ate fish",
      "Distinctive sail on its back",
    ],
    image: "/spinosaurus-fishing.png",
  },
  {
    name: "Stegosaurus",
    period: "Late Jurassic",
    classification: "Herbivorous",
    size: "9 meters long",
    weight: "2-5 tons",
    habitat: "Fern prairies and conifer forests",
    modernRelative: "Armadillos and ankylosaurus",
    facts: [
      "Had 17 plates along its back",
      "Four sharp spikes on its tail",
      "Brain was only walnut-sized",
      "Plates may have regulated temperature",
    ],
    image: "/stegosaurus-fern-forest.png",
  },
]

export function FeaturedSpecies() {
  return (
    <section id="species" className="py-20 px-4 bg-gray-50">
      <div className="container max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-black text-gray-900 mb-4">Featured Dinosaur Species</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Meet some of the most fascinating dinosaurs that once ruled our planet
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredDinosaurs.map((dino, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-video overflow-hidden">
                <img
                  src={dino.image || "/placeholder.svg"}
                  alt={dino.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl font-serif font-bold text-gray-900">{dino.name}</CardTitle>
                  <Badge variant="secondary" className="text-xs">
                    {dino.period}
                  </Badge>
                </div>
                <CardDescription className="text-sm text-gray-600">
                  {dino.classification} • {dino.size} • {dino.weight}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold">Habitat:</span> {dino.habitat}
                  </p>
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold">Modern Relative:</span> {dino.modernRelative}
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-gray-900 mb-2">Fascinating Facts:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {dino.facts.map((fact, i) => (
                      <li key={i}>• {fact}</li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
