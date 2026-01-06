"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

const navigation = [
  { name: "Início", href: "/#inicio", isAnchor: true },
  { name: "Depoimentos", href: "/#depoimentos", isAnchor: true },
  { name: "Perguntas Frequentes", href: "/faq", isAnchor: false },
  { name: "Suporte", href: "/suporte", isAnchor: false },
  { name: "Contato", href: "/contato", isAnchor: false },
]

export function Header() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  const handleNavClick = (href: string, isAnchor: boolean) => {
    setOpen(false)
    if (isAnchor) {
      if (pathname !== '/') {
        window.location.href = href
      } else {
        const element = document.querySelector(href.replace('/', ''))
        if (element) {
          element.scrollIntoView({ behavior: "smooth" })
        }
      }
    }
  }

  return (
    <header className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <nav className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-2 sm:gap-3 hover-scale smooth-transition group">
              <div className="relative w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0 group-hover:rotate-12 transition-transform duration-300">
                <Image
                  src="/logo.png"
                  alt="Brandiza Logo"
                  width={40}
                  height={40}
                  className="object-contain w-full h-full"
                  priority
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                  }}
                />
              </div>
              <div className="flex flex-col">
                <span className="text-lg sm:text-xl font-bold group-hover:text-primary transition-colors">Brandiza</span>
                <span className="text-[10px] sm:text-xs text-muted-foreground hidden sm:block">Soluções Web</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="ml-6 xl:ml-10 flex items-baseline space-x-2 xl:space-x-4">
              {navigation.map((item) => (
                item.isAnchor ? (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item.href, item.isAnchor)}
                    className="text-foreground hover:text-primary px-2 xl:px-3 py-2 text-xs xl:text-sm font-medium transition-all relative group"
                  >
                    {item.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                  </button>
                ) : (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-foreground hover:text-primary px-2 xl:px-3 py-2 text-xs xl:text-sm font-medium transition-all relative group"
                  >
                    {item.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                  </Link>
                )
              ))}
            </div>
          </div>

          {/* Mobile/Tablet menu button */}
          <div className="lg:hidden">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="h-9 w-9 sm:h-10 sm:w-10">
                  <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
                  <span className="sr-only">Abrir menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] sm:w-[320px]">
                <nav className="flex flex-col space-y-2 sm:space-y-4 mt-8">
                  {navigation.map((item) => (
                    item.isAnchor ? (
                      <button
                        key={item.name}
                        onClick={() => handleNavClick(item.href, item.isAnchor)}
                        className="text-left text-foreground hover:text-primary px-3 py-2.5 text-sm sm:text-base font-medium transition-colors rounded-md hover:bg-muted"
                      >
                        {item.name}
                      </button>
                    ) : (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className="text-left text-foreground hover:text-primary px-3 py-2.5 text-sm sm:text-base font-medium transition-colors rounded-md hover:bg-muted"
                      >
                        {item.name}
                      </Link>
                    )
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  )
}

