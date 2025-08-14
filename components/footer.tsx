export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="text-2xl">🦕</div>
              <h3 className="text-xl font-serif font-bold">DinoDiscover</h3>
            </div>
            <p className="text-gray-400 text-sm">
              Exploring the fascinating world of dinosaurs through science, discovery, and education.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Explore</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#species" className="hover:text-white transition-colors">
                  Species
                </a>
              </li>
              <li>
                <a href="#classifications" className="hover:text-white transition-colors">
                  Classifications
                </a>
              </li>
              <li>
                <a href="#relatives" className="hover:text-white transition-colors">
                  Modern Relatives
                </a>
              </li>
              <li>
                <a href="#discoveries" className="hover:text-white transition-colors">
                  Latest Discoveries
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Learn More</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Fossil Records
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Evolution Timeline
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Paleontology
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Research Papers
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Educational Materials
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Museum Partnerships
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Scientific Community
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 DinoDiscover. Bringing prehistoric worlds to life through education and discovery.
          </p>
        </div>
      </div>
    </footer>
  )
}
