'use client'

import { CheckCircle2 } from 'lucide-react'

export function ProcessSection() {
  const steps = [
    {
      step: '01',
      title: 'Avaliação Inicial',
      description: 'Análise minuciosa da sua pele, saúde e objetivos de beleza em consulta personalizada'
    },
    {
      step: '02',
      title: 'Plano Personalizado',
      description: 'Desenvolvimento de estratégia única adaptada aos seus desejos e necessidades'
    },
    {
      step: '03',
      title: 'Tratamento Premium',
      description: 'Execução dos procedimentos com tecnologia de ponta e profissionais experientes'
    },
    {
      step: '04',
      title: 'Acompanhamento',
      description: 'Suporte contínuo e orientações para manter seus resultados impecáveis'
    },
  ]

  return (
    <section className="py-16 sm:py-24 md:py-32 lg:py-40 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16 md:mb-20 lg:mb-24">
          <p className="text-accent tracking-widest uppercase text-xs sm:text-sm mb-4 sm:mb-6 font-light">Metodologia</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light tracking-tight mb-4 sm:mb-6 md:mb-8 text-balance px-2 sm:px-0">
            Sua Jornada Transformadora
          </h2>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed px-2 sm:px-0">
            Seguimos um processo comprovado que garante resultados extraordinários e satisfação plena
          </p>
        </div>

        <div className="space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-12">
          {steps.map((item, idx) => (
            <div key={idx} className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 lg:gap-12">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-16 w-16 sm:h-20 sm:w-20 rounded-full bg-primary/10 border-2 border-primary">
                  <span className="text-lg sm:text-2xl font-light text-primary">{item.step}</span>
                </div>
              </div>
              <div className="flex-1 pt-0 sm:pt-2">
                <h3 className="text-lg sm:text-xl md:text-2xl font-light mb-2 sm:mb-4">{item.title}</h3>
                <p className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
