'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'

export function HeroSection() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="relative min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh] lg:min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20 md:pt-24">
      {/* Background Image with Parallax */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-11-17%20at%2021.19.44%20%281%29-B4BAhak3JcrX4KDUdCJbmS2S8sLOXY.jpeg"
          alt="Recepção Maddie Tavares"
          fill
          className="object-cover brightness-40"
          priority
          style={{
            transform: `translateY(${scrollY * 0.5}px)`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-2xl sm:max-w-3xl md:max-w-4xl mx-auto px-4 sm:px-6 text-center py-8 sm:py-12 md:py-16 lg:py-24">
        <div className="fade-in">
          <p className="text-accent tracking-widest uppercase text-xs sm:text-sm mb-3 sm:mb-4 md:mb-5 font-light">Bem-vindo ao Luxo</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light tracking-tight text-white mb-4 sm:mb-6 md:mb-8 text-balance px-1 sm:px-0">
            Transformação em Cada Detalhe
          </h1>
        </div>
        
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 mb-6 sm:mb-8 md:mb-12 text-balance max-w-2xl mx-auto leading-relaxed font-light px-2 sm:px-0">
          Descubra um espaço onde o luxo encontra a serenidade. Cada tratamento é cuidadosamente crafted para sua transformação e bem-estar absoluto.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 justify-center items-center">
          <Link 
            href="/agendar"
            className="luxury-button w-full sm:w-auto px-6 sm:px-8 md:px-10 py-2.5 sm:py-3 md:py-4 bg-primary text-primary-foreground text-sm sm:text-base md:text-lg font-medium text-center"
          >
            Agendar Agora
          </Link>
          <Link 
            href="/servicos"
            className="luxury-button w-full sm:w-auto px-6 sm:px-8 md:px-10 py-2.5 sm:py-3 md:py-4 border-2 border-white text-white hover:bg-white/10 text-sm sm:text-base md:text-lg font-medium text-center"
          >
            Explorar Serviços
          </Link>
        </div>

        <div className="mt-24 animate-bounce">
          <svg className="w-6 h-6 mx-auto text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}
