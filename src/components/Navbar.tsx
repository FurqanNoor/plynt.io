import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  return (
    <header className="border-b border-gray-800 bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-white">
            plynt
          </Link>
          <nav className="flex items-center gap-4">
            <Link 
              href="/pricing" 
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              Pricing
            </Link>
            <Button 
              variant="ghost" 
              className="text-gray-400 hover:text-white hover:bg-gray-800"
              asChild
            >
              <Link href="/login">Login</Link>
            </Button>
            <Button 
              className="bg-white text-black hover:bg-gray-100"
              asChild
            >
              <Link href="/signup">Sign up</Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  )
}

