"use client"

import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="font-bold text-xl text-slate-900">
            Bilal Ahmed
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link href="#about" className="text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors">
              About
            </Link>
            <Link href="#skills" className="text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors">
              Skills
            </Link>
            <Link
              href="#experience"
              className="text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors"
            >
              Experience
            </Link>
            <Link
              href="#education"
              className="text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors"
            >
              Education
            </Link>
            <Link
              href="#projects"
              className="text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors"
            >
              Projects
            </Link>
            <Link href="#contact" className="text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors">
              Contact
            </Link>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Button asChild variant="outline" size="sm" className="border-slate-300">
              <Link href="/resume.pdf" target="_blank">
                Download CV
              </Link>
            </Button>
            <Button asChild size="sm" className="bg-slate-800 hover:bg-slate-700">
              <Link href="#contact">Hire Me</Link>
            </Button>
          </div>

          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col gap-4">
              <Link
                href="#about"
                className="text-sm font-medium hover:text-slate-900 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="#skills"
                className="text-sm font-medium hover:text-slate-900 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Skills
              </Link>
              <Link
                href="#experience"
                className="text-sm font-medium hover:text-slate-900 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Experience
              </Link>
              <Link
                href="#education"
                className="text-sm font-medium hover:text-slate-900 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Education
              </Link>
              <Link
                href="#projects"
                className="text-sm font-medium hover:text-slate-900 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </Link>
              <Link
                href="#contact"
                className="text-sm font-medium hover:text-slate-900 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="flex flex-col gap-2 mt-2">
                <Button asChild variant="outline" size="sm" className="justify-center">
                  <Link href="/resume.pdf" target="_blank">
                    Download CV
                  </Link>
                </Button>
                <Button asChild size="sm" className="justify-center bg-slate-800 hover:bg-slate-700">
                  <Link href="#contact">Hire Me</Link>
                </Button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
