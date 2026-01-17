'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'

interface NavigationProps {
  blackText?: boolean
}



export function Navigation({blackText}:NavigationProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const linkClass = scrolled || blackText 
  ? 'text-black hover:text-primary'   // fundo claro ou rolado
  : 'text-white hover:text-accent'    // fundo escuro, default

  
  return (
    <nav className={`fixed top-0 z-50 w-full transition-all duration-300 ${
      scrolled 
        ? 'bg-background/95 backdrop-blur border-b border-border shadow-md' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <Link href="/" className="flex-shrink-0 group">
            <div className="text-left">
              {/*<div className="text-2xl font-serif font-bold tracking-wide text-primary group-hover:scale-105 transition-transform duration-300">
                MADDIE TAVARES
              </div>
              <div className="text-sm font-light italic text-primary/80 tracking-widest -mt-1">
                beauty boutique
              </div>
               */}
              <img src="/images/logo.png" alt="Maddie Tavares Logo" className="h-12 w-auto mt-4" style={{height: '10vh', width: '25vh'}}/>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 items-center">
           <Link href="/" className={`text-sm transition duration-300 ${linkClass}`}>Home</Link>
           <Link href="/servicos" className={`text-sm transition duration-300 ${linkClass}`}>Serviços</Link>
           <Link href="/sobre" className={`text-sm transition duration-300 ${linkClass}`}>Sobre</Link>
           <Link href="/contato" className={`text-sm transition duration-300 ${linkClass}`}>Contacto</Link>
            <Link href="/agendar" className={`luxury-button ${
              scrolled 
                ? 'bg-primary text-primary-foreground hover:bg-primary/90' 
                : 'bg-white text-foreground hover:bg-white/90'
            }`} style={{background: '#e1b01a', color: '#fff'}}>
              Agendar
            </Link>
           <Link href="/login" className={`text-sm transition duration-300 ${linkClass}`}>Entrar</Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className={`md:hidden transition duration-300 ${
              scrolled ? 'text-foreground' : 'text-white'
            }`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-6 space-y-4 bg-background/95 backdrop-blur border-b border-border">
            <Link href="/" className="block text-sm text-foreground hover:text-primary py-2">Home</Link>
            <Link href="/servicos" className="block text-sm text-foreground hover:text-primary py-2">Servicos</Link>
            <Link href="/sobre" className="block text-sm text-foreground hover:text-primary py-2">Sobre</Link>
            <Link href="/contato" className="block text-sm text-foreground hover:text-primary py-2">Contato</Link>
            <Link href="/agendar" className="block w-full px-4 py-2 bg-primary text-primary-foreground rounded-full text-sm font-medium hover:bg-primary/90 transition text-center">
              Agendar
            </Link>
            <Link href="/login" className="block text-sm text-foreground hover:text-primary py-2">Entrar</Link>
          </div>
        )}
      </div>
    </nav>
  )
}
