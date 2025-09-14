"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
  ]

  return (
    <header
      className=
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full flex items-center justify-center">
              <Image
                src="/Logo.webp"
                alt="SAGA Engineering"
                width={32}
                height={32}
                className="w-14 h-auto"
              />
            </div>
            <div className="hidden sm:block">
              <h1
                className=
                  "text-xl lg:text-2xl font-bold transition-colors duration-300 text-[#000094]"
                
              >
                SAGA Engineering
              </h1>
            </div>
          </Link>

          <nav className="hidden md:flex items-center space-x-8 ">
  {navItems.map((item) => {
    const isActive = pathname === item.href;

    return (
      <Link
        key={item.name}
        href={item.href}
        className={cn(
          "transition-colors duration-300 font-medium relative",
          isScrolled
            ? "text-foreground hover:text-primary"
            : "text-black hover:text-[#000094]",
          isActive && (isScrolled ? "text-primary font-semibold" : "text-black font-semibold")
        )}
      >
        {item.name}
        {isActive && (
          <span className="absolute left-0 bottom-0 mt-1 w-full h-0.5 bg-primary rounded-full" />
        )}
      </Link>
    );
  })}
</nav>


          {/* Contact Button & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Link href="/contact" className="hidden sm:inline-flex">
              <button
                className="transition-all duration-300 text-white  rounded-full bg-[#000094] p-2 px-4 cursor-pointer"
              >
                Contact Us
              </button>
            </Link>

            {/* Mobile Menu Button */}
            <button
              className={cn(
                "md:hidden p-2 transition-colors duration-300",
                isScrolled ? "text-foreground" : "text-black",
              )}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-background border-t border-border">
            <nav className="px-4 py-4 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "block text-foreground hover:text-primary transition-colors duration-200 font-medium",
                    pathname === item.href && "text-primary font-semibold",
                  )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link href="/contact" className="block">
                <button className="w-full mt-4" onClick={() => setIsMenuOpen(false)}>
                  Contact Us
                </button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
