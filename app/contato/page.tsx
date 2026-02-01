'use client'

import Image from 'next/image'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Mail, Phone, MapPin, Instagram, Facebook, MessageCircle, Clock, Sparkles } from "lucide-react"

export default function Contato() {
  return (
    
    <main className="min-h-screen bg-background">
      <Navigation />
           {/* Hero Section with Parallax Effect */}
            <section className="relative h-[70vh] overflow-hidden">
              <div className="absolute inset-0">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-11-17%20at%2021.19.38-Q0ic3AXwGqwi7sO917iYnGBMGJwjT0.jpeg"
                  alt="Maddie Tavares Beauty Boutique"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background" />
              </div>
              <div className="relative h-full flex items-center justify-center text-center px-6">
                <div className="max-w-4xl">
                  <h1 className="text-5xl md:text-7xl font-light tracking-tight text-white mb-6">
                    Contacte - nos
                  </h1>
                  <p className="text-xl md:text-2xl text-white/90 font-light">
                    Uma jornada de transformação e bem-estar em Cabo Verde
                  </p>
                </div>
              </div>
            </section>
      
     <section className="py-32 px-6 bg-gradient-to-b from-background via-accent/20 to-background">
        <div className="max-w-7xl mx-auto">
          {/* Contact Information Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Contact Info Card */}
            <div className=" from-primary/5 to-amber-500/5 rounded-3xl p-8 border border-primary/20">
              <h3 className="text-2xl font-light mb-6 flex items-center gap-2">
                <Phone className="text-primary" size={24} />
                Contatos Diretos
              </h3>

              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-background/50 rounded-xl">
                  <Phone className="text-primary" size={20} />
                  <div>
                    <p className="text-xs text-muted-foreground">Telefone</p>
                    <p className="font-medium">(+238) 5875124</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 bg-background/50 rounded-xl">
                  <Mail className="text-primary" size={20} />
                  <div>
                    <p className="text-xs text-muted-foreground">E-mail</p>
                    <p className="font-medium">maddietavares.bb@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 bg-background/50 rounded-xl">
                  <MapPin className="text-primary" size={20} />
                  <div>
                    <p className="text-xs text-muted-foreground">Endereço</p>
                    <p className="font-medium">Rua Corsino António Fortes - Madeiralzinho</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media Card */}
            <div className="bg-gradient-to-br from-primary/5 to-amber-500/5 rounded-3xl p-8 border border-primary/20">
              <h3 className="text-2xl font-light mb-6">Redes Sociais</h3>
              <p className="text-muted-foreground mb-6 text-sm">
                Acompanhe nosso dia a dia e fique por dentro das novidades
              </p>

              <div className="grid grid-cols-3 gap-4">
                <a
                  href="https://www.instagram.com/bymaddietavares_estetica/?e=2a484431-1ca8-4c99-85cd-2b00513db3dd&g=5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="aspect-square flex flex-col items-center justify-center gap-2 bg-background rounded-xl hover:bg-primary/10 transition border border-border hover:border-primary group"
                >
                  <Instagram className="text-primary group-hover:scale-110 transition" size={28} />
                  <span className="text-xs font-medium">Instagram</span>
                </a>

                <a
                  href="https://www.facebook.com/maddie.tavares.13"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="aspect-square flex flex-col items-center justify-center gap-2 bg-background rounded-xl hover:bg-primary/10 transition border border-border hover:border-primary group"
                >
                  <Facebook className="text-primary group-hover:scale-110 transition" size={28} />
                  <span className="text-xs font-medium">Facebook</span>
                </a>

                <a
                  href="https://wa.me/2385875124"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="aspect-square flex flex-col items-center justify-center gap-2 bg-background rounded-xl hover:bg-primary/10 transition border border-border hover:border-primary group"
                >
                  <MessageCircle className="text-primary group-hover:scale-110 transition" size={28} />
                  <span className="text-xs font-medium">WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Hours Card */}
            <div className="bg-gradient-to-br from-primary/5 to-amber-500/5 rounded-3xl p-8 border border-primary/20">
              <h3 className="text-2xl font-light mb-6 flex items-center gap-2">
                <Clock className="text-primary" size={24} />
                Horário de Funcionamento
              </h3>

              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-background/50 rounded-lg">
                  <span className="font-medium">Segunda - Sexta</span>
                  <span className="text-primary font-semibold">9:00 - 19:00</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-background/50 rounded-lg">
                  <span className="font-medium">Sábado</span>
                  <span className="text-primary font-semibold">9:00 - 14:00</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-background/50 rounded-lg">
                  <span className="font-medium">Domingo</span>
                  <span className="text-muted-foreground">Fechado</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.7868432947953!2d-24.98938292538344!3d16.892520916873725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94f1fcd75a4a949%3A0x175c53d93c5f63eb!2sMaddie%20Tavares%20Beauty%20Boutique!5e1!3m2!1spt-PT!2scv!4v1769986417250!5m2!1spt-PT!2scv"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>


        <div className="absolute top-8 left-1/2 -translate-x-1/2 z-10">
          <div className="bg-white/95 backdrop-blur-lg rounded-2xl px-8 py-6 shadow-2xl border border-primary/20">
            <h3 className="text-3xl font-light text-center mb-2">
              Venha nos <span className="text-primary font-serif italic">Visitar</span>
            </h3>
          </div>
        </div>
      </section>

      <Footer />

      <style jsx>{`
        @keyframes subtle-zoom {
          0%, 100% { transform: scale(1.1); }
          50% { transform: scale(1.15); }
        }
        .animate-subtle-zoom {
          animation: subtle-zoom 20s ease-in-out infinite;
        }
      `}</style>
    </main>
  )
}
