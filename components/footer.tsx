"use client"

import Link from "next/link"
import { Mail, Phone, MapPin, Instagram, Facebook, MessageCircle } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-5 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="mb-4">
              <div className="text-2xl font-serif font-bold tracking-wide text-background"><img src="/images/logo.png" alt="Maddie Tavares Logo" className="h-12 w-auto mt-4" style={{height: '10vh', width: '25vh'}}/></div>
              <div className="text-sm font-light italic text-background/90 tracking-widest">beauty boutique</div>
            </div>
            <p className="text-sm text-background/80 leading-relaxed mb-4">
              Clínica de Estética Avançada. Transformando beleza em arte desde 2019.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/bymaddietavares_estetica/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-background/10 rounded-full hover:bg-background/20 transition"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://www.facebook.com/maddie.tavares.13/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-background/10 rounded-full hover:bg-background/20 transition"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://wa.me/2385875124"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-background/10 rounded-full hover:bg-background/20 transition"
              >
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-light text-sm uppercase tracking-widest mb-6">Menu</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/" className="hover:text-primary transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/servicos" className="hover:text-primary transition">
                  Serviços
                </Link>
              </li>
              <li>
                <Link href="/sobre" className="hover:text-primary transition">
                  Sobre
                </Link>
              </li>
              <li>
                <Link href="/contato" className="hover:text-primary transition">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-light text-sm uppercase tracking-widest mb-6">Conta</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/login" className="hover:text-primary transition">
                  Login
                </Link>
              </li>
              <li>
                <Link href="/registrar" className="hover:text-primary transition">
                  Registrar
                </Link>
              </li>
              <li>
                <Link href="/agendar" className="hover:text-primary transition">
                  Agendar
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition">
                  Meus Agendamentos
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-light text-sm uppercase tracking-widest mb-6">Contato</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <Phone size={16} />
                <span>(238) 5875124</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} />
                <span>maddietavares.bb@gmail.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-1" />
                <span>
                  Rua Corsino António Fortes
                  <br />
                  São Vicente, Cabo Verde
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-6 text-center text-sm text-background/80">
          <p>&copy; 2025 Maddie Tavares. Todos os direitos reservados.</p>
          <div className="mt-4 flex justify-center gap-6 text-xs">
            <Link href="#" className="hover:text-primary transition">
              Política de Privacidade
            </Link>
            <Link href="#" className="hover:text-primary transition">
              Termos de Serviço
            </Link>
            <Link href="#" className="hover:text-primary transition">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
