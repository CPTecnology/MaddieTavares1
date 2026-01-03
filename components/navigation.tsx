'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 z-50 w-full transition-all duration-300 ${
      scrolled 
        ? 'bg-background/95 backdrop-blur border-b border-border shadow-md' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20 md:h-24">
          <Link href="/" className="flex-shrink-0 group">
            <div className="text-left">
              {/*<div className="text-2xl font-serif font-bold tracking-wide text-primary group-hover:scale-105 transition-transform duration-300">
                MADDIE TAVARES
              </div>
              <div className="text-sm font-light italic text-primary/80 tracking-widest -mt-1">
                beauty boutique
              </div>
               */}
              <img src="/images/logo.png" alt="Maddie Tavares Logo" className="h-8 sm:h-10 md:h-12 w-auto" />
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-6 lg:gap-8 items-center">
            <Link href="/" className={`text-xs lg:text-sm transition duration-300 ${
              scrolled ? 'text-foreground hover:text-primary' : 'text-white hover:text-accent'
            }`}>Home</Link>
            <Link href="/servicos" className={`text-xs lg:text-sm transition duration-300 ${
              scrolled ? 'text-foreground hover:text-primary' : 'text-white hover:text-accent'
            }`}>Serviços</Link>
            <Link href="/sobre" className={`text-xs lg:text-sm transition duration-300 ${
              scrolled ? 'text-foreground hover:text-primary' : 'text-white hover:text-accent'
            }`}>Sobre</Link>
            <Link href="/contato" className={`text-xs lg:text-sm transition duration-300 ${
              scrolled ? 'text-foreground hover:text-primary' : 'text-white hover:text-accent'
            }`}>Contato</Link>
            <Link href="/agendar" className={`luxury-button text-xs lg:text-sm px-4 lg:px-6 py-2 lg:py-2.5 ${
              scrolled 
                ? 'bg-primary text-primary-foreground hover:bg-primary/90' 
                : 'bg-white text-foreground hover:bg-white/90'
            }`}>
              Agendar
            </Link>
            <Link href="/login" className={`text-xs lg:text-sm transition duration-300 ${
              scrolled ? 'text-foreground hover:text-primary' : 'text-white hover:text-accent'
            }`}>Entrar</Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            aria-label="Alternar menu"
            aria-expanded={isOpen}
            className={`md:hidden transition duration-300 p-2 rounded-lg ${
              scrolled ? 'text-foreground hover:bg-foreground/10' : 'text-white hover:bg-white/10'
            }`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden fixed top-16 sm:top-20 left-0 right-0 z-40 pb-4 space-y-2 bg-background/95 backdrop-blur border-t border-border px-4 sm:px-6 animate-in fade-in slide-in-from-top">
            <Link href="/" className="block text-sm text-foreground hover:text-primary py-2.5 px-4 rounded-lg hover:bg-foreground/5 transition">Home</Link>
            <Link href="/servicos" className="block text-sm text-foreground hover:text-primary py-2.5 px-4 rounded-lg hover:bg-foreground/5 transition">Serviços</Link>
            <Link href="/sobre" className="block text-sm text-foreground hover:text-primary py-2.5 px-4 rounded-lg hover:bg-foreground/5 transition">Sobre</Link>
            <Link href="/contato" className="block text-sm text-foreground hover:text-primary py-2.5 px-4 rounded-lg hover:bg-foreground/5 transition">Contato</Link>
            <Link href="/agendar" className="block w-full px-4 py-2.5 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition text-center mt-2">
              Agendar
            </Link>
            <Link href="/login" className="block text-sm text-foreground hover:text-primary py-2.5 px-4 rounded-lg hover:bg-foreground/5 transition">Entrar</Link>
          </div>
        )}
      </div>
    </nav>
  )
}
