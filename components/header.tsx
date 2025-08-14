import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="text-2xl">🦕</div>
          <h1 className="text-xl font-serif font-bold text-blue-600">DinoDiscover</h1>
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          <a href="#species" className="text-sm font-medium hover:text-blue-600 transition-colors">
            Species
          </a>
          <a href="#classifications" className="text-sm font-medium hover:text-blue-600 transition-colors">
            Classifications
          </a>
          <a href="#relatives" className="text-sm font-medium hover:text-blue-600 transition-colors">
            Modern Relatives
          </a>
          <a href="#discoveries" className="text-sm font-medium hover:text-blue-600 transition-colors">
            Discoveries
          </a>
        </nav>

        <Button variant="outline" className="md:hidden bg-transparent">
          Menu
        </Button>
      </div>
    </header>
  )
}
