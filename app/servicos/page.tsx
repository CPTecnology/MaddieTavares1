'use client'

import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import Link from 'next/link'
import { Star, Sparkles, Heart, Crown, Zap, ArrowRight } from 'lucide-react'
import Image from 'next/image'

export default function Servicos() {
  const servicosDestaque = [
    {
      nome: 'Harmonização Facial Completa',
      preco: '35.000 Esc',
      descricao: 'O tratamento mais completo para realçar sua beleza natural. Análise facial 3D, bioestimulação e preenchimentos estratégicos.',
      imagem: '/luxury-facial-harmonization-treatment.jpg',
      tag: 'MAIS PROCURADO',
      beneficios: ['Resultado natural', 'Sem cirurgia', 'Efeito imediato'],
      icon: Crown
    },
    {
      nome: 'Sessão Spa Completa Premium',
      preco: '25.000 Esc',
      descricao: '3 horas de puro luxo. Hidroterapia, massagem com pedras quentes, aromaterapia e tratamento facial radiante.',
      imagem: '/luxury-spa-bathtub-with-bamboo.jpg',
      tag: 'EXPERIÊNCIA ÚNICA',
      beneficios: ['Relaxamento total', 'Detox completo', 'Renovação celular'],
      icon: Heart
    },
    {
      nome: 'Radiofrequência + Microagulhamento',
      preco: '22.000 Esc',
      descricao: 'A combinação perfeita para rejuvenescimento. Estimula colágeno profundo e renova completamente a textura da pele.',
      imagem: '/facial-skin-treatment-technology.jpg',
      tag: 'TECNOLOGIA AVANÇADA',
      beneficios: ['Anti-idade', 'Lifting natural', 'Pele firme'],
      icon: Zap
    }
  ]

  const categorias = [
    {
      titulo: 'Facial Premium',
      subtitulo: 'Brilhe com confiança',
      cor: 'from-amber-500/20 to-yellow-500/20',
      icone: '✨',
      servicos: [
        { 
          nome: 'Limpeza de Pele Profunda', 
          preco: '12.500 Esc', 
          descricao: 'Remoção profunda + extração + máscara luminosa',
          duracao: '90 min'
        },
        { 
          nome: 'Peeling Químico Avançado', 
          preco: '15.000 Esc', 
          descricao: 'Renovação celular com ácidos de alta performance',
          duracao: '60 min'
        },
        { 
          nome: 'Radiofrequência Facial', 
          preco: '18.500 Esc', 
          descricao: 'Lifting não invasivo com resultados visíveis',
          duracao: '50 min'
        },
        { 
          nome: 'Facial Anti-Idade Luxo', 
          preco: '20.000 Esc', 
          descricao: 'Redução de rugas + firmeza + luminosidade',
          duracao: '120 min'
        },
        { 
          nome: 'Hidratação Profunda Premium', 
          preco: '16.000 Esc', 
          descricao: 'Séruns concentrados + máscaras de ouro',
          duracao: '75 min'
        },
        { 
          nome: 'Microdermabrasão Diamante', 
          preco: '14.000 Esc', 
          descricao: 'Esfoliação profunda para pele de porcelana',
          duracao: '60 min'
        }
      ]
    },
    {
      titulo: 'Corpo Esculpido',
      subtitulo: 'Seu corpo dos sonhos',
      cor: 'from-amber-500/20 to-yellow-500/20',
      icone: '💎',
      servicos: [
        { 
          nome: 'Redução de Medidas 3D', 
          preco: '15.000 Esc', 
          descricao: 'Cavitação + radiofrequência + drenagem',
          duracao: '90 min'
        },
        { 
          nome: 'Massagem Terapêutica Premium', 
          preco: '10.000 Esc', 
          descricao: '60 minutos de relaxamento profundo',
          duracao: '60 min'
        },
        { 
          nome: 'Depilação Laser Completa', 
          preco: '8.500 Esc', 
          descricao: 'Tecnologia indolor de última geração',
          duracao: '45 min'
        },
        { 
          nome: 'Drenagem Linfática Deluxe', 
          preco: '9.000 Esc', 
          descricao: 'Elimine toxinas e desinche imediatamente',
          duracao: '60 min'
        },
        { 
          nome: 'Harmonização Corporal', 
          preco: '17.500 Esc', 
          descricao: 'Protocolo personalizado para seu corpo',
          duracao: '120 min'
        },
        { 
          nome: 'Criofrequência Localizada', 
          preco: '12.000 Esc', 
          descricao: 'Congela gordura + firma + modela',
          duracao: '50 min'
        }
      ]
    },
    {
      titulo: 'Estética Avançada',
      subtitulo: 'Transformação real',
      cor: 'from-amber-600/20 to-yellow-600/20',
      icone: '👑',
      servicos: [
        { 
          nome: 'Bioestimulação Facial 3D', 
          preco: '19.000 Esc', 
          descricao: 'Preenchimento natural com ácido hialurônico',
          duracao: '40 min'
        },
        { 
          nome: 'Toxina Botulínica Premium', 
          preco: '18.000 Esc', 
          descricao: 'Suavização de rugas e linhas de expressão',
          duracao: '30 min'
        },
        { 
          nome: 'Sculptra & Radiesse', 
          preco: '24.000 Esc', 
          descricao: 'Volume e restauração facial duradoura',
          duracao: '50 min'
        },
        { 
          nome: 'Fios de Sustentação PDO', 
          preco: '28.000 Esc', 
          descricao: 'Lifting imediato sem cirurgia',
          duracao: '60 min'
        },
        { 
          nome: 'Tratamento de Cicatrizes', 
          preco: '16.000 Esc', 
          descricao: 'Redução de 70% das marcas',
          duracao: '45 min'
        },
        { 
          nome: 'Lipopapada sem Cirurgia', 
          preco: '21.000 Esc', 
          descricao: 'Elimine papada com enzimas naturais',
          duracao: '40 min'
        }
      ]
    },
    {
      titulo: 'Bem-Estar & Spa',
      subtitulo: 'Renove sua energia',
      cor: 'from-amber-500/20 to-yellow-500/20',
      icone: '🌿',
      servicos: [
        { 
          nome: 'Hidroterapia Exclusiva', 
          preco: '13.000 Esc', 
          descricao: '45 minutos em banheira terapêutica',
          duracao: '45 min'
        },
        { 
          nome: 'Aromaterapia Personalizada', 
          preco: '8.500 Esc', 
          descricao: 'Óleos essenciais selecionados para você',
          duracao: '50 min'
        },
        { 
          nome: 'Reflexologia Podal Premium', 
          preco: '10.000 Esc', 
          descricao: 'Equilíbrio energético total',
          duracao: '60 min'
        },
        { 
          nome: 'Pedras Quentes + Massagem', 
          preco: '14.000 Esc', 
          descricao: 'Calor terapêutico que relaxa profundamente',
          duracao: '75 min'
        },
        { 
          nome: 'Crioterapia Corporal', 
          preco: '11.000 Esc', 
          descricao: 'Recuperação muscular e rejuvenescimento',
          duracao: '30 min'
        },
        { 
          nome: 'Meditação + Reiki', 
          preco: '12.500 Esc', 
          descricao: 'Experiência holística completa',
          duracao: '60 min'
        }
      ]
    }
  ]

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-24 sm:pt-32 md:pt-40 pb-16 sm:pb-24 md:pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-8 sm:mb-12">
            <div className="inline-flex items-center gap-2 mb-4 sm:mb-6 px-4 sm:px-6 py-2 rounded-full bg-primary/10 border border-primary/20 flex-wrap justify-center">
              <Sparkles className="text-primary" size={18} />
              <span className="text-primary font-light tracking-widest uppercase text-xs sm:text-sm">Nossos Tratamentos</span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl xl:text-8xl font-light tracking-tight mb-4 sm:mb-6 md:mb-8 text-balance px-2 sm:px-0">
              Desperte Sua
              <span className="block text-primary mt-2">Beleza Natural</span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light px-2 sm:px-4">
              Tratamentos exclusivos que transformam, realçam e celebram sua essência única
            </p>
          </div>
        </div>
      </section>

      {/* Featured Services - Hero Cards */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
            {servicosDestaque.map((servico, idx) => (
              <div 
                key={idx}
                className="group relative overflow-hidden rounded-2xl sm:rounded-3xl border border-border hover:border-primary transition-all duration-500 glow-effect cursor-pointer flex flex-col h-full"
              >
                <div className="absolute top-3 sm:top-6 right-3 sm:right-6 z-20">
                  <div className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary text-primary-foreground text-xs font-medium tracking-wider">
                    {servico.tag}
                  </div>
                </div>
                
                <div className="relative h-48 sm:h-56 md:h-64 lg:h-80 overflow-hidden">
                  <Image
                    src={servico.imagem || "/placeholder.svg"}
                    alt={servico.nome}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent"></div>
                </div>

                <div className="p-4 sm:p-6 lg:p-8 -mt-20 sm:-mt-24 md:-mt-32 relative z-10 flex-1 flex flex-col justify-between">
                  <div>
                    <servico.icon className="text-primary mb-3 sm:mb-4" size={28} />
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-light mb-3 sm:mb-4 group-hover:text-primary transition text-balance">
                      {servico.nome}
                    </h3>
                    <p className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed mb-4 sm:mb-6">
                      {servico.descricao}
                    </p>
                    
                    <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
                      {servico.beneficios.map((beneficio, i) => (
                        <span key={i} className="px-2.5 sm:px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
                          {beneficio}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 pt-4 sm:pt-6 border-t border-border">
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">A partir de</p>
                      <p className="text-2xl sm:text-3xl font-light text-primary">{servico.preco}</p>
                    </div>
                    <Link 
                      href="/agendar"
                      className="flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition group/btn text-sm sm:text-base w-full sm:w-auto justify-center sm:justify-start"
                    >
                      Agendar
                      <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Categories */}
          <div className="space-y-16 sm:space-y-24 md:space-y-32 mt-12 sm:mt-16 md:mt-20">
            {categorias.map((categoria, catIdx) => (
              <div key={catIdx}>
                <div className="text-center mb-10 sm:mb-12 md:mb-16 px-4 sm:px-6">
                  <div className="text-4xl sm:text-5xl md:text-6xl mb-4 sm:mb-6">{categoria.icone}</div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light mb-2 sm:mb-4">{categoria.titulo}</h2>
                  <p className="text-base sm:text-lg md:text-xl text-primary font-light">{categoria.subtitulo}</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
                  {categoria.servicos.map((servico, idx) => (
                    <div
                      key={idx}
                      className={`group p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl border border-border hover:border-primary transition-all duration-300 cursor-pointer bg-gradient-to-br ${categoria.cor} hover:shadow-2xl hover:shadow-primary/20 flex flex-col justify-between h-full`}
                    >
                      <div className="flex items-start justify-between mb-3 sm:mb-4">
                        <div className="flex-1 pr-3">
                          <h3 className="text-lg sm:text-xl md:text-2xl font-light mb-2 group-hover:text-primary transition text-balance">
                            {servico.nome}
                          </h3>
                          <p className="text-xs sm:text-sm text-muted-foreground mb-4 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></span>
                            {servico.duracao}
                          </p>
                        </div>
                        <Star className="text-primary flex-shrink-0" size={20} fill="currentColor" />
                      </div>

                      <p className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed mb-4 sm:mb-6">
                        {servico.descricao}
                      </p>

                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 pt-4 sm:pt-6 border-t border-border/50">
                        <p className="text-xl sm:text-2xl font-light text-primary">{servico.preco}</p>
                        <Link
                          href="/agendar"
                          className="text-xs sm:text-sm text-primary hover:underline flex items-center gap-1 group/link"
                        >
                          Quero esse
                          <ArrowRight size={14} className="group-hover/link:translate-x-1 transition" />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 sm:mt-20 md:mt-24 lg:mt-32 relative overflow-hidden rounded-2xl sm:rounded-3xl">
            <div className="absolute inset-0">
              <Image
                src="/luxury-spa-interior-golden-light.jpg"
                alt="Spa interior"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/80"></div>
            </div>
            
            <div className="relative z-10 p-6 sm:p-8 md:p-12 lg:p-16 xl:p-20">
              <div className="max-w-2xl">
                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light mb-4 sm:mb-6 text-balance">
                  Pacotes Exclusivos com Até 30% de Desconto
                </h3>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground mb-6 sm:mb-8 md:mb-10 leading-relaxed">
                  Combine seus tratamentos favoritos e economize. Criamos planos personalizados para sua jornada de beleza.
                </p>
                <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
                  <Link 
                    href="/agendar"
                    className="luxury-button px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 bg-primary text-primary-foreground text-sm sm:text-base md:text-lg inline-flex items-center gap-2 sm:gap-3 group text-center justify-center"
                  >
                    Consultar Pacotes
                    <ArrowRight className="group-hover:translate-x-1 transition hidden sm:block" />
                  </Link>
                  <Link 
                    href="/contato"
                    className="px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 border-2 border-primary text-primary rounded-full text-sm sm:text-base md:text-lg hover:bg-primary hover:text-primary-foreground transition inline-flex items-center gap-2 sm:gap-3 text-center justify-center"
                  >
                    Falar com Especialista
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-8 sm:mt-12 md:mt-16 lg:mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 text-center px-4 sm:px-6">
            <div>
              <p className="text-3xl sm:text-4xl md:text-5xl font-light text-primary mb-2 sm:mb-3">2.500+</p>
              <p className="text-xs sm:text-sm md:text-base text-muted-foreground">Clientes Satisfeitas</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl md:text-5xl font-light text-primary mb-2 sm:mb-3">98%</p>
              <p className="text-xs sm:text-sm md:text-base text-muted-foreground">Aprovação</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl md:text-5xl font-light text-primary mb-2 sm:mb-3">15+</p>
              <p className="text-xs sm:text-sm md:text-base text-muted-foreground">Anos de Experiência</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl md:text-5xl font-light text-primary mb-2 sm:mb-3">24</p>
              <p className="text-xs sm:text-sm md:text-base text-muted-foreground">Tratamentos Únicos</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
