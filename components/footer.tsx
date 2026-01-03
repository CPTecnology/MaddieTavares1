'use client'

import Link from 'next/link'
import { Mail, Phone, MapPin, Instagram, Facebook } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 md:gap-12 mb-8 sm:mb-12 md:mb-16">
          <div className="lg:col-span-2">
            <div className="mb-4 sm:mb-6">
              <div className="text-2xl sm:text-3xl font-serif font-bold tracking-wide text-background">
                MADDIE TAVARES
              </div>
              <div className="text-xs sm:text-sm font-light italic text-background/90 tracking-widest">
                beauty boutique
              </div>
            </div>
            <p className="text-xs sm:text-sm text-background/80 leading-relaxed mb-4 sm:mb-6">
              Clínica de Estética Avançada. Transformando beleza em arte desde 2010.
            </p>
            <div className="flex gap-3">
              <a href="#" className="p-2.5 sm:p-3 bg-background/10 rounded-full hover:bg-background/20 transition">
                <Instagram size={18} />
              </a>
              <a href="#" className="p-2.5 sm:p-3 bg-background/10 rounded-full hover:bg-background/20 transition">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-light text-xs uppercase tracking-widest mb-4 sm:mb-6">Menu</h4>
            <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
              <li><Link href="/" className="hover:text-primary transition">Home</Link></li>
              <li><Link href="/servicos" className="hover:text-primary transition">Serviços</Link></li>
              <li><Link href="/sobre" className="hover:text-primary transition">Sobre</Link></li>
              <li><Link href="/contato" className="hover:text-primary transition">Contato</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-light text-xs uppercase tracking-widest mb-4 sm:mb-6">Conta</h4>
            <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
              <li><Link href="/login" className="hover:text-primary transition">Login</Link></li>
              <li><Link href="/registrar" className="hover:text-primary transition">Registrar</Link></li>
              <li><Link href="/agendar" className="hover:text-primary transition">Agendar</Link></li>
              <li><Link href="#" className="hover:text-primary transition">Meus Agendamentos</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-light text-xs uppercase tracking-widest mb-4 sm:mb-6">Contato</h4>
            <ul className="space-y-3 sm:space-y-4 text-xs sm:text-sm">
              <li className="flex items-center gap-2 sm:gap-3">
                <Phone size={14} className="flex-shrink-0" />
                <span>(238) 333-5512</span>
              </li>
              <li className="flex items-center gap-2 sm:gap-3">
                <Mail size={14} className="flex-shrink-0" />
                <span>maddie@tavares.cv</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <MapPin size={14} className="mt-0.5 flex-shrink-0" />
                <span>Av. Amilcar Cabral<br />Praia, Cabo Verde</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-6 sm:pt-8 text-center text-xs sm:text-sm text-background/80">
          <p>&copy; 2025 LEIT 4 ano 2025/2026</p>
          <div className="mt-4 flex flex-col sm:flex-row justify-center gap-3 sm:gap-6 text-xs">
            <Link href="#" className="hover:text-primary transition">Política de Privacidade</Link>
            <Link href="#" className="hover:text-primary transition">Termos de Serviço</Link>
            <Link href="#" className="hover:text-primary transition">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
    </footer>
  )
}
