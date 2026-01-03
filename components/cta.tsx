'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function CtaSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/90 to-accent/80 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-white rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-10 max-w-3xl md:max-w-4xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light tracking-tight text-primary-foreground mb-4 sm:mb-6 md:mb-8 text-balance px-2 sm:px-0">
          Pronto para sua Transformação?
        </h2>
        <p className="text-xs sm:text-sm md:text-base lg:text-lg text-primary-foreground/90 mb-6 sm:mb-8 md:mb-12 leading-relaxed px-2 sm:px-0">
          Entre em contato conosco hoje e comece sua jornada para a melhor versão de si mesma
        </p>
        
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 justify-center items-center px-2 sm:px-0">
          <Link 
            href="/agendar"
            className="group luxury-button w-full sm:w-auto px-6 sm:px-8 md:px-10 py-2.5 sm:py-3 md:py-4 bg-primary-foreground text-primary text-sm sm:text-base md:text-lg font-medium text-center hover:shadow-2xl inline-flex items-center justify-center gap-2"
          >
            Agendar Agora
            <ArrowRight className="group-hover:translate-x-1 transition hidden sm:block" size={18} />
          </Link>
          <Link 
            href="/contato"
            className="luxury-button w-full sm:w-auto px-6 sm:px-8 md:px-10 py-2.5 sm:py-3 md:py-4 border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 text-sm sm:text-base md:text-lg font-medium text-center"
          >
            Fale Conosco
          </Link>
        </div>
      </div>
    </section>
  )
}
