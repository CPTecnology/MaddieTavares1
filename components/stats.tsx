'use client'

import { Award, Users, TrendingUp, Heart } from 'lucide-react'

export function StatsSection() {
  const stats = [
    {
      icon: Award,
      number: '15+',
      label: 'Anos de Excelência',
      description: 'Referência em beleza premium'
    },
    {
      icon: Users,
      number: '5000+',
      label: 'Clientes Satisfeitos',
      description: 'Histórias de transformação'
    },
    {
      icon: TrendingUp,
      number: '50+',
      label: 'Procedimentos',
      description: 'Serviços especializados'
    },
    {
      icon: Heart,
      number: '98%',
      label: 'Taxa de Satisfação',
      description: 'Recomendação entre clientes'
    },
  ]

  return (
    <section className="py-12 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-secondary/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, idx) => {
            const Icon = stat.icon
            return (
              <div key={idx} className="group text-center">
                <div className="mb-4 sm:mb-6 flex justify-center">
                  <div className="p-3 sm:p-4 bg-primary/10 rounded-full group-hover:bg-primary/20 transition">
                    <Icon className="text-primary" size={28} />
                  </div>
                </div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-light mb-2 text-primary">{stat.number}</h3>
                <p className="text-xs sm:text-sm md:text-base font-medium mb-2">{stat.label}</p>
                <p className="text-xs sm:text-sm text-muted-foreground">{stat.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
