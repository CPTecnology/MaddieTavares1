'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Sparkles, Flower2, Waves } from 'lucide-react'

export function FeaturedServices() {
  const services = [
    {
      icon: Sparkles,
      title: 'Facial Premium',
      description: 'Tratamentos faciais avançados com produtos de última geração',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-11-17%20at%2021.19.47-TPhdfW2Xzq6Z89THPpUkr2n6Ec1qlB.jpeg',
    },
    {
      icon: Waves,
      title: 'Corpo & Spa',
      description: 'Experiências sensaciais de renovação corporal e bem-estar',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-11-17%20at%2021.19.44-32dARCvGwEsIrk9zjFujj50oV2UMCy.jpeg',
    },
    {
      icon: Flower2,
      title: 'Estética Avançada',
      description: 'Procedimentos inovadores para resultado excepcional',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-11-17%20at%2021.19.46-8c8EvOk90Y36Xm8e1sI58i0Fd2RLcI.jpeg',
    },
  ]

  return (
    <section className="py-32 px-6 bg-gradient-to-b from-background to-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-20 px-4 sm:px-6">
          <p className="text-accent tracking-widest uppercase text-xs sm:text-sm mb-3 font-light">Nossos Serviços</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mb-4 md:mb-6 text-balance">
            Experiências Luxuosas
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Cada procedimento é uma jornada personalizada para sua beleza e bem-estar
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16 px-4 sm:px-6">
          {services.map((service, idx) => {
            const Icon = service.icon
            return (
              <div key={idx} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl mb-4 sm:mb-6 h-48 sm:h-56 md:h-64 glow-effect">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                </div>
                <div className="mb-4 p-3 bg-accent rounded-full w-fit">
                  <Icon className="text-accent-foreground" size={24} />
                </div>
                <h3 className="text-2xl font-light mb-3 text-foreground group-hover:text-primary transition">{service.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                <Link href="/servicos" className="text-primary font-medium hover:text-primary/70 transition inline-flex items-center gap-2">
                  Saber Mais →
                </Link>
              </div>
            )
          })}
        </div>

        <div className="text-center pt-8 border-t border-border">
          <Link 
            href="/servicos"
            className="luxury-button px-10 py-4 bg-primary text-primary-foreground text-lg inline-block"
          >
            Ver Todos os Serviços
          </Link>
        </div>
      </div>
    </section>
  )
}
