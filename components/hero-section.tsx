'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect, useCallback } from 'react'
import { ChevronLeft, ChevronRight, Sparkles, Heart, Star, Gem } from 'lucide-react'

const highlights = [
  {
    id: 1,
    title: "Limpeza de Pele Profunda",
    description: "Tratamento completo para uma pele radiante e renovada",
    icon: Sparkles,
    gradient: "from-primary/90 to-primary/70",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1200&q=80"
  },
  {
    id: 2,
    title: "Massagem Relaxante",
    description: "Momento de paz e relaxamento para corpo e mente",
    icon: Heart,
    gradient: "from-accent/90 to-accent/70",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1200&q=80"
  },
  {
    id: 3,
    title: "Design de Sobrancelhas",
    description: "Realce sua beleza natural com técnicas exclusivas",
    icon: Star,
    gradient: "from-primary/85 to-accent/75",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1200&q=80"
  },
  {
    id: 4,
    title: "Tratamentos Premium",
    description: "Protocolos exclusivos para resultados extraordinários",
    icon: Gem,
    gradient: "from-accent/85 to-primary/75",
    image: "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=1200&q=80"
  }
]

export function HeroSection() {
  const [scrollY, setScrollY] = useState(0)
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % highlights.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % highlights.length)
  }, [])

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + highlights.length) % highlights.length)
  }, [])

  return (
    <section className="relative flex flex-col overflow-hidden">
      {/* Main Hero - Full Screen Height */}
      <div className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden pt-20">
        {/* Background Image with Parallax */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/inicio2.jpeg"
            alt="Recepção Maddie Tavares"
            fill
            className="object-cover brightness-40"
            priority
            style={{
              transform: `translateY(${scrollY * 0.3}px)`
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background/60" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center py-12">
          <div className="fade-in">
            <p className="text-accent tracking-widest uppercase text-sm mb-4 font-light">Bem-vindo ao Luxo</p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-white mb-6 text-balance">
              Transformação em Cada Detalhe
            </h1>
          </div>
          
          <p className="text-base md:text-lg text-white/90 mb-8 text-balance max-w-2xl mx-auto leading-relaxed font-light">
            Descubra um espaço onde o luxo encontra a serenidade. Cada tratamento é cuidadosamente crafted para sua transformação.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="/agendar"
              className="luxury-button px-8 py-3 bg-primary text-primary-foreground text-base font-medium"
            >
              Agendar Agora
            </Link>
            <Link 
              href="/servicos"
              className="luxury-button px-8 py-3 border-2 border-white text-white hover:bg-white/10 text-base font-medium"
            >
              Explorar Serviços
            </Link>
          </div>
        </div>
      </div>

      {/* Highlights Carousel */}
      <div className="relative h-[25vh] min-h-[200px] px-[10px] py-4">
        <div className="relative h-full w-full rounded-[50px] overflow-hidden shadow-2xl">
          {/* Slides */}
          {highlights.map((slide, index) => {
            const Icon = slide.icon
            return (
              <div
                key={slide.id}
                className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                  index === currentSlide 
                    ? 'opacity-100 translate-x-0' 
                    : index < currentSlide 
                      ? 'opacity-0 -translate-x-full' 
                      : 'opacity-0 translate-x-full'
                }`}
              >
                {/* Background Image */}
                <Image
                  src={slide.image || "/placeholder.svg"}
                  alt={slide.title}
                  fill
                  className="object-cover"
                />
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-r ${slide.gradient}`} />
                
                {/* Content */}
                <div className="absolute inset-0 flex items-center justify-between px-8 md:px-16">
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <Icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl md:text-3xl lg:text-4xl font-light text-white mb-2 tracking-wide">
                        {slide.title}
                      </h3>
                      <p className="text-white/90 text-sm md:text-base font-light max-w-md">
                        {slide.description}
                      </p>
                    </div>
                  </div>
                  
                  <Link 
                    href="/servicos"
                    className="hidden md:flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                  >
                    <span>Ver mais</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            )
          })}

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors z-10"
            aria-label="Slide anterior"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors z-10"
            aria-label="Próximo slide"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Dots Indicator */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {highlights.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-white w-6' 
                    : 'bg-white/50 hover:bg-white/70'
                }`}
                aria-label={`Ir para slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
