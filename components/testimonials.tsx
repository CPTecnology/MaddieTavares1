'use client'

import { Star } from 'lucide-react'

export function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Sofia Silva',
      role: 'Empresária',
      content: 'Maddie Tavares transformou minha autoestima. O resultado foi além das expectativas, sem contar o atendimento impecável.',
      rating: 5
    },
    {
      name: 'Maria Oliveira',
      role: 'Influenciadora',
      content: 'A qualidade dos procedimentos é incomparável. Minha pele nunca esteve tão luminosa e hidratada. Recomendo muito!',
      rating: 5
    },
    {
      name: 'Ana Costa',
      role: 'Professora',
      content: 'O ambiente é absolutamente relaxante. Saí de lá sentindo-me uma nova pessoa. Voltarei com certeza!',
      rating: 5
    },
    {
      name: 'Carla Mendes',
      role: 'Médica',
      content: 'Como profissional de saúde, aprecio o conhecimento técnico da equipe. Trabalho excelente, totalmente seguro e eficaz.',
      rating: 5
    },
  ]

  return (
    <section className="py-16 sm:py-24 md:py-32 lg:py-40 px-4 sm:px-6 lg:px-8 bg-secondary/40">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16 md:mb-20 lg:mb-24">
          <p className="text-accent tracking-widest uppercase text-xs sm:text-sm mb-4 sm:mb-6 font-light">Depoimentos</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light tracking-tight mb-4 md:mb-8 text-balance px-2 sm:px-0">
            Histórias de Transformação
          </h2>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed px-2 sm:px-0">
            Veja o que nossas clientes dizem sobre suas experiências
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="p-5 sm:p-6 md:p-8 bg-card border border-border rounded-lg sm:rounded-2xl hover:border-primary transition glow-effect flex flex-col h-full">
              <div className="flex gap-1 mb-4 sm:mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-primary text-primary" />
                ))}
              </div>
              <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8 text-muted-foreground flex-grow">"{testimonial.content}"</p>
              <div className="border-t border-border pt-4 sm:pt-6">
                <p className="font-light text-base sm:text-lg">{testimonial.name}</p>
                <p className="text-xs sm:text-sm text-accent">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
