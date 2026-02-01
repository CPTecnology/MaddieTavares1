'use client'

import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import Link from 'next/link'
import { Star, Sparkles, Heart, Crown, Zap, ArrowRight } from 'lucide-react'
import Image from 'next/image'

export default function Servicos() {
  const servicosDestaque = [
    {
      nome: 'Pacote Noiva Queen',
      preco: '15.000 CVE',
      descricao: 'Bridal Make Up + Make Up Madrinha + Make Up Mãe, Penteado, Design e Henna, Esfoliação Corporal, Banho Terapêutico (15mn), Massagem Relaxante (45mn), Revitalização Facial, Manicure com Gel e Pedicure com Gelinho, Depilação Axila e Virilha. Bônus: 1 Sessão Detox Corporal Pós Casamento',
      imagem: '/luxury-facial-harmonization-treatment.jpg',
      tag: 'EXCLUSIVO NOIVA',
      beneficios: ['Pacote completo', 'Bônus incluído', 'Experiência premium'],
      icon: Crown
    },
    {
      nome: 'Depilação Laser Corpo Inteiro',
      preco: '18.000 CVE',
      descricao: 'Tecnologia avançada para depilação definitiva em todas as áreas do corpo. Resultados duradouros e precisos.',
      imagem: '/luxury-spa-bathtub-with-bamboo.jpg',
      tag: 'TECNOLOGIA AVANÇADA',
      beneficios: ['Resultado duradouro', 'Tecnologia precisa', 'Conforto'],
      icon: Zap
    },
    {
      nome: 'Limpeza de Pele + Microagulhamento',
      preco: '8.000 CVE',
      descricao: 'Combinação perfeita para renovação celular profunda. Tratamento completo para rejuvenescimento e tratamento de manchas.',
      imagem: '/facial-skin-treatment-technology.jpg',
      tag: 'TRATAMENTO COMPLETO',
      beneficios: ['Rejuvenescimento', 'Renovação celular', 'Resultado visível'],
      icon: Heart
    }
  ]

  const categorias = [
    {
      titulo: 'Maquiagem & Sobrancelhas',
      subtitulo: 'Realce sua beleza natural',
      cor: 'from-amber-500/20 to-yellow-500/20',
      icone: '✨',
      servicos: [
        { 
          nome: 'Maquiagem Simples', 
          preco: '2.000 CVE', 
          descricao: 'Preparação de pele completa, uma sombra ou sem sombra nos olhos, lábios batom ou gloss',
          duracao: '60 min'
        },
        { 
          nome: 'Maquiagem Sofisticada', 
          preco: '2.500 CVE', 
          descricao: 'Preparação de pele completa, combinação de sombra, lábios batom ou gloss',
          duracao: '90 min'
        },
        { 
          nome: 'Maquiagem Noiva', 
          preco: '4.000 CVE', 
          descricao: 'Higienização, Hidratação e Preparação de pele completa, combinação de sombra glam, lábios batom ou gloss',
          duracao: '120 min'
        },
        { 
          nome: 'Photoshoot Glow', 
          preco: '3.000 CVE', 
          descricao: 'Maquiagem mais elaborada ideal para fotos profissionais',
          duracao: '90 min'
        },
        { 
          nome: 'Brow Lamination + Tintura', 
          preco: '1.500 CVE', 
          descricao: 'Procedimento químico com efeito lifting que estica os fios, tornando a sobrancelha visualmente mais grossa, com coloração',
          duracao: '60 min'
        },
        { 
          nome: 'Micropigmentação Microblading', 
          preco: '15.000 CVE', 
          descricao: 'Desenho de sobrancelhas efeito fio a fio natural (inclui retoque 1 mês)',
          duracao: '120 min'
        }
      ]
    },
    {
      titulo: 'Tratamentos Faciais',
      subtitulo: 'Pele radiante e rejuvenescida',
      cor: 'from-amber-500/20 to-yellow-500/20',
      icone: '💎',
      servicos: [
        { 
          nome: 'Limpeza de Pele Clássica', 
          preco: '3.500 CVE', 
          descricao: 'Aplicação de dermocosméticos específicos inclui esfoliação, emoliência, extração manual e ultrassônica, alta frequência, LEDterapia e finalização',
          duracao: '60 min'
        },
        { 
          nome: 'Limpeza Profunda Facial', 
          preco: '4.200 CVE', 
          descricao: 'Protocolo completo de limpeza profunda com 1 hora de duração',
          duracao: '60 min'
        },
        { 
          nome: 'Hidrafacial', 
          preco: '5.000 CVE', 
          descricao: 'Protocolo de limpeza e hidratação profunda com peeling de água para peles desvitalizadas e sem brilho',
          duracao: '75 min'
        },
        { 
          nome: 'Rejuvenescadora / Antiaging', 
          preco: '4.700 CVE', 
          descricao: 'Limpeza de pele específica para peles desvitalizadas, ação firmadora, antiflacidez, antirrugas, remodeladora',
          duracao: '90 min'
        },
        { 
          nome: 'Radiofrequência Facial', 
          preco: '2.500 CVE', 
          descricao: 'Protocolo para estímulo de colágeno, antiflacidez e prevenção de rugas, rejuvenescimento e efeito lifting facial',
          duracao: '50 min'
        },
        { 
          nome: 'Dermaplaning', 
          preco: '3.500 CVE', 
          descricao: 'Peeling físico da camada mais superficial da pele',
          duracao: '45 min'
        }
      ]
    },
    {
      titulo: 'Estética Corporal',
      subtitulo: 'Transformação e bem-estar',
      cor: 'from-amber-600/20 to-yellow-600/20',
      icone: '👑',
      servicos: [
        { 
          nome: 'Microagulhamento Corporal', 
          preco: '8.000 CVE', 
          descricao: 'Tratamento para estrias, cicatrizes e flacidez tissular (por zona)',
          duracao: '60 min'
        },
        { 
          nome: 'Esfoliação Corporal + Banho Terapêutico + Massagem', 
          preco: '6.000 CVE', 
          descricao: 'Ritual relaxante de 1h30 que visa esfoliar, limpar e hidratar a pele',
          duracao: '90 min'
        },
        { 
          nome: 'Massagem Relaxante - Corpo Inteiro', 
          preco: '3.500 CVE', 
          descricao: 'Técnica de movimentos suaves e contínuos para diminuir tensão muscular, aliviar dores e relaxar a mente',
          duracao: '60 min'
        },
        { 
          nome: 'Massagem com Pedras Quentes', 
          preco: '4.000 CVE', 
          descricao: 'Massagem relaxante com pedras quentes para relaxamento profundo',
          duracao: '60 min'
        },
        { 
          nome: 'Drenagem Linfática - Corpo Inteiro', 
          preco: '2.800 CVE', 
          descricao: 'Técnica especializada para eliminação de toxinas e redução de inchaço',
          duracao: '60 min'
        },
        { 
          nome: 'Lipo Cavitação', 
          preco: '3.000 CVE', 
          descricao: 'Ultrassom estético que causa a quebra de células lipolíticas reduzindo a gordura localizada',
          duracao: '50 min'
        }
      ]
    },
    {
      titulo: 'Depilação & Cuidados',
      subtitulo: 'Suavidade e precisão',
      cor: 'from-amber-500/20 to-yellow-500/20',
      icone: '🌿',
      servicos: [
        { 
          nome: 'Depilação Laser - Virilha + Axilas', 
          preco: '6.000 CVE', 
          descricao: 'Tecnologia avançada para depilação definitiva nas áreas íntimas',
          duracao: '45 min'
        },
        { 
          nome: 'Depilação Laser - Meia Perna + Virilha', 
          preco: '7.000 CVE', 
          descricao: 'Protocolo combinado para resultados eficientes',
          duracao: '60 min'
        },
        { 
          nome: 'Depilação a Cera - Perna Inteira (Mulher)', 
          preco: '1.200 CVE', 
          descricao: 'Técnica tradicional com cera de alta qualidade',
          duracao: '45 min'
        },
        { 
          nome: 'Extensão de Pestanas', 
          preco: '4.500 CVE', 
          descricao: 'Colocação fio a fio clássico e fios tecnológicos',
          duracao: '120 min'
        },
        { 
          nome: 'Lash Lifting com Tintura', 
          preco: '1.800 CVE', 
          descricao: 'Procedimento químico com efeito lifting que estica os fios das pestanas, tornando-as visualmente mais compridas',
          duracao: '60 min'
        },
        { 
          nome: 'Manicure & Pedicure Terapêutico', 
          preco: '2.000 CVE', 
          descricao: 'Combo Spa das Mãos + Spa dos Pés com cutilagem, esfoliação, máscara de hidratação, massagem terapêutica',
          duracao: '90 min'
        }
      ]
    }
  ]

  return (
    <main className="min-h-screen bg-background">
      <Navigation blackText/>
      
      {/* Hero Section */}
      <section className="relative pt-40 pb-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-6 px-6 py-2 rounded-full bg-primary/10 border border-primary/20">
              <Sparkles className="text-primary" size={20} />
              <span className="text-primary font-light tracking-widest uppercase text-sm">Nossos Tratamentos</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-light tracking-tight mb-6 md:mb-8 text-balance">
              Desperte Sua
              <span className="block text-primary mt-2">Beleza Natural</span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light px-4">
              Tratamentos exclusivos que transformam, realçam e celebram sua essência única
            </p>
          </div>
        </div>
      </section>

      {/* Featured Services - Hero Cards */}
      <section className="py-20 px-6 bg-gradient-to-b from-background to-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {servicosDestaque.map((servico, idx) => (
              <div 
                key={idx}
                className="group relative overflow-hidden rounded-3xl border border-border hover:border-primary transition-all duration-500 glow-effect cursor-pointer"
              >
                <div className="absolute top-6 right-6 z-20">
                  <div className="px-4 py-2 rounded-full bg-primary text-primary-foreground text-xs font-medium tracking-wider">
                    {servico.tag}
                  </div>
                </div>
                
                <div className="relative h-64 lg:h-80 overflow-hidden">
                  <Image
                    src={servico.imagem || "/placeholder.svg"}
                    alt={servico.nome}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent"></div>
                </div>

                <div className="p-6 lg:p-8 -mt-32 relative z-10">
                  <servico.icon className="text-primary mb-4" size={32} />
                  <h3 className="text-3xl font-light mb-4 group-hover:text-primary transition text-balance">
                    {servico.nome}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {servico.descricao}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {servico.beneficios.map((beneficio, i) => (
                      <span key={i} className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
                        {beneficio}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-6 border-t border-border">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">A partir de</p>
                      <p className="text-3xl font-light text-primary">{servico.preco}</p>
                    </div>
                    <Link 
                      href="/agendar"
                      className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition group/btn"
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
          <div className="space-y-32">
            {categorias.map((categoria, catIdx) => (
              <div key={catIdx}>
                <div className="text-center mb-16">
                  <div className="text-6xl mb-6">{categoria.icone}</div>
                  <h2 className="text-5xl font-light mb-4">{categoria.titulo}</h2>
                  <p className="text-xl text-primary font-light">{categoria.subtitulo}</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {categoria.servicos.map((servico, idx) => (
                    <div
                      key={idx}
                      className={`group p-8 rounded-2xl border border-border hover:border-primary transition-all duration-300 cursor-pointer bg-gradient-to-br ${categoria.cor} hover:shadow-2xl hover:shadow-primary/20`}
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <h3 className="text-2xl font-light mb-2 group-hover:text-primary transition text-balance">
                            {servico.nome}
                          </h3>
                          <p className="text-sm text-muted-foreground mb-4 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                            {servico.duracao}
                          </p>
                        </div>
                        <Star className="text-primary flex-shrink-0" size={24} fill="currentColor" />
                      </div>

                      <p className="text-muted-foreground leading-relaxed mb-6">
                        {servico.descricao}
                      </p>

                      <div className="flex items-center justify-between pt-6 border-t border-border/50">
                        <p className="text-2xl font-light text-primary">{servico.preco}</p>
                        <Link
                          href="/agendar"
                          className="text-sm text-primary hover:underline flex items-center gap-1 group/link"
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
          <div className="mt-32 relative overflow-hidden rounded-3xl">
            <div className="absolute inset-0">
              <Image
                src="/luxury-spa-interior-golden-light.jpg"
                alt="Spa interior"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/80"></div>
            </div>
            
            <div className="relative z-10 p-8 md:p-16 lg:p-20">
              <div className="max-w-2xl">
                <h3 className="text-5xl font-light mb-6 text-balance">
                  Pacotes Exclusivos com Até 30% de Desconto
                </h3>
                <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
                  Combine seus tratamentos favoritos e economize. Criamos planos personalizados para sua jornada de beleza.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link 
                    href="/agendar"
                    className="luxury-button px-10 py-5 bg-primary text-primary-foreground text-lg inline-flex items-center gap-3 group"
                  >
                    Consultar Pacotes
                    <ArrowRight className="group-hover:translate-x-1 transition" />
                  </Link>
                  <Link 
                    href="/contato"
                    className="px-10 py-5 border-2 border-primary text-primary rounded-full text-lg hover:bg-primary hover:text-primary-foreground transition inline-flex items-center gap-3"
                  >
                    Falar com Especialista
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-10 lg:mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
            <div>
              <p className="text-5xl font-light text-primary mb-3">2.500+</p>
              <p className="text-muted-foreground">Clientes Satisfeitas</p>
            </div>
            <div>
              <p className="text-5xl font-light text-primary mb-3">98%</p>
              <p className="text-muted-foreground">Aprovação</p>
            </div>
            <div>
              <p className="text-5xl font-light text-primary mb-3">7+</p>
              <p className="text-muted-foreground">Anos de Experiência</p>
            </div>
            <div>
              <p className="text-5xl font-light text-primary mb-3">24</p>
              <p className="text-muted-foreground">Tratamentos Únicos</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
