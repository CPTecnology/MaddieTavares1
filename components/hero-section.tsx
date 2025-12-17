'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [scrollY, setScrollY] = useState(0)

  // Array de slides com imagens diferentes
  const slides = [
    {
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-11-17%20at%2021.19.44%20%281%29-B4BAhak3JcrX4KDUdCJbmS2S8sLOXY.jpeg",
      alt: "Recepção Maddie Tavares",
      title: "Transformação em Cada Detalhe",
      subtitle: "Bem-vindo ao Luxo",
      description: "Descubra um espaço onde o luxo encontra a serenidade. Cada tratamento é cuidadosamente crafted para sua transformação e bem-estar absoluto."
    },
    {
      image: "/images/facial.jpg",
      alt: "Tratamentos Faciais Premium",
      title: "Facial Premium",
      subtitle: "Beleza & Radiance",
      description: "Procedimentos avançados com produtos de última geração para sua pele impecável."
    },
    {
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-11-17%20at%2021.19.46-8c8EvOk90Y36Xm8e1sI58i0Fd2RLcI.jpeg",
      alt: "Corpo & Spa",
      title: "Corpo & Spa",
      subtitle: "Renovação Total",
      description: "Experiências sensaciais de bem-estar corporal e relaxamento absoluto."
    },
    {
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-11-17%20at%2021.19.44-32dARCvGwEsIrk9zjFujj50oV2UMCy.jpeg",
      alt: "Estética Avançada",
      title: "Estética Avançada",
      subtitle: "Inovação & Elegância",
      description: "Procedimentos inovadores para resultados excepcionais e duradouros."
    }
  ]

  // Scroll handler
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Auto-play carousel - passa a cada 3 segundos
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 4000) // 3 segundos

    return () => clearInterval(timer)
  }, [slides.length])

  // Handlers
  const nextSlide = () => {
    //setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <div className="relative w-full overflow-hidden bg-background">
      {/* Carrossel Container - Scroll Horizontal */}
      <div 
        className="flex w-full transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${currentSlide * 100}%)`
        }}
      >
        {/* Slides */}
        {slides.map((slide, index) => (
          <section 
            key={index}
            className="relative min-h-screen w-full flex-shrink-0 flex items-center justify-center overflow-hidden pt-24"
          >
            {/* Background Image with Parallax */}
            <div className="absolute inset-0 z-0">
              <Image
                src={slide.image}
                alt={slide.alt}
                fill
                className="object-cover brightness-40"
                priority={index === 0}
                style={{
                  transform: `translateY(${scrollY * 0.5}px)`
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background/40"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-4xl mx-auto px-6 text-center py-24">
              <div className="fade-in">
                <p className="text-accent tracking-widest uppercase text-sm mb-6 font-light">
                  {slide.subtitle}
                </p>
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-light tracking-tight text-white mb-8 text-balance">
                  {slide.title}
                </h1>
              </div>
              
              <p className="text-lg md:text-xl text-white/90 mb-12 text-balance max-w-2xl mx-auto leading-relaxed font-light">
                {slide.description}
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Link 
                  href="/agendar"
                  className="luxury-button px-10 py-4 bg-primary text-primary-foreground text-lg font-medium"
                >
                  Agendar Agora
                </Link>
                <Link 
                  href="/servicos"
                  className="luxury-button px-10 py-4 border-2 border-white text-white hover:bg-white/10 text-lg font-medium"
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
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-40 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition duration-300 backdrop-blur"
        aria-label="Slide anterior"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-40 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition duration-300 backdrop-blur"
        aria-label="Próximo slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-40 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentSlide
                ? 'bg-white w-8 h-2'
                : 'bg-white/40 hover:bg-white/60 w-2 h-2'
            }`}
            aria-label={`Ir para slide ${index + 1}`}
          />
        ))}
      </div>

     
    </div>
  )
}
