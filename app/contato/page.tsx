'use client'

import Image from 'next/image'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Mail, Phone, MapPin, Instagram, Facebook, Youtube } from 'lucide-react'

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
      
      <section className="py-20 px-6 pt-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Left Column - Contact Form */}
            <div>
              <h2 className="text-4xl font-light mb-4">Envie sua Mensagem</h2>
              <p className="text-muted-foreground mb-8">Preencha o formulário abaixo para entrar em contato conosco.</p>
              
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Nome Completo</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition bg-background" 
                    placeholder="Seu nome" 
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Endereço de E-mail</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition bg-background" 
                    placeholder="seuemail@exemplo.com" 
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Telefone (Opcional)</label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition bg-background" 
                    placeholder="(XX) XXXX-XXXX" 
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Sua Mensagem</label>
                  <textarea 
                    rows={6} 
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition resize-none bg-background" 
                    placeholder="Digite sua mensagem aqui..." 
                  />
                </div>
                
                <button 
                  type="submit" 
                  className="w-full px-6 py-4 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition shadow-lg"
                >
                  Enviar Mensagem
                </button>
              </form>
            </div>

            {/* Right Column - Contact Info, Social Media & Map */}
            <div className="space-y-12">
              {/* Contact Information */}
              <div>
                <h2 className="text-4xl font-light mb-8">Fale Conosco</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-full bg-primary/10">
                      <MapPin className="text-primary" size={20} />
                    </div>
                    <div>
                      <p className="text-foreground">Rua da Estética, 123 - Centro, Cidade</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-full bg-primary/10">
                      <Phone className="text-primary" size={20} />
                    </div>
                    <div>
                      <p className="text-foreground">(XX) XXXX-XXXX</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-full bg-primary/10">
                      <Mail className="text-primary" size={20} />
                    </div>
                    <div>
                      <p className="text-foreground">contato@maddietavares.com</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="text-2xl font-light mb-6">Nossas Redes Sociais</h3>
                <div className="flex gap-4">
                  <a 
                    href="https://instagram.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 border border-border rounded-lg hover:bg-accent transition"
                  >
                    <Instagram size={24} />
                  </a>
                  <a 
                    href="https://facebook.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 border border-border rounded-lg hover:bg-accent transition"
                  >
                    <Facebook size={24} />
                  </a>
                  <a 
                    href="https://youtube.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 border border-border rounded-lg hover:bg-accent transition"
                  >
                    <Youtube size={24} />
                  </a>
                </div>
              </div>

              {/* Map */}
              <div>
                <h3 className="text-2xl font-light mb-6">Onde Estamos</h3>
                <div className="w-full h-80 rounded-lg overflow-hidden border border-border">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.086394292857!2d-23.561684!3d14.916682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTTCsDU0JzU4LjEiTiAyM8KwMzMnNDIuMSJX!5e0!3m2!1spt-BR!2sbr!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
