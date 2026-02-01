lene'use client'

import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import Image from 'next/image'
import { Sparkles, Award, Heart, Users, Clock, MapPin } from 'lucide-react'
import Link from 'next/link'

export default function Sobre() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section with Parallax Effect */}
      <section className="relative h-[70vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-11-17%20at%2021.19.38-Q0ic3AXwGqwi7sO917iYnGBMGJwjT0.jpeg"
            alt="Maddie Tavares Beauty Boutique"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background" />
        </div>
        <div className="relative h-full flex items-center justify-center text-center px-6">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-light tracking-tight text-white mb-6">
              Onde a Beleza Encontra a Excelência
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-light">
              Uma jornada de transformação e bem-estar em Cabo Verde
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
            <div className="order-2 md:order-1">
              <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-4 block">
                Nossa História
              </span>
              <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-6">
                Um Sonho que se Tornou Realidade
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Maddie Tavares Beauty Boutique nasceu de uma visão clara: criar um santuário de beleza 
                e bem-estar em Cabo Verde, onde cada cliente é tratado como único e especial.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Com mais de 7 anos de experiência no setor de estética avançada, fundamos este espaço 
                pensado em cada detalhe, desde a arquitetura inspiradora até os tratamentos de última geração.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Hoje, somos referência em estética de alta qualidade, combinando expertise internacional 
                com o acolhimento e carinho cabo-verdiano que nos torna únicos.
              </p>
            </div>
            <div className="order-1 md:order-2 relative">
              <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="images/Maddie.jpeg"
                  alt="Maddie Tavares"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-primary text-white p-8 rounded-2xl shadow-xl">
                <div className="text-5xl font-light mb-2">7+</div>
                <div className="text-sm font-semibold uppercase tracking-wide">Anos de Experiência</div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-4 gap-8 mb-24">
            <div className="text-center p-8 bg-accent/5 rounded-2xl border border-accent/20 hover:border-primary/30 transition-all">
              <div className="text-4xl font-light text-primary mb-3">5000+</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wide">Clientes Satisfeitos</div>
            </div>
            <div className="text-center p-8 bg-accent/5 rounded-2xl border border-accent/20 hover:border-primary/30 transition-all">
              <div className="text-4xl font-light text-primary mb-3">24</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wide">Tratamentos Exclusivos</div>
            </div>
            <div className="text-center p-8 bg-accent/5 rounded-2xl border border-accent/20 hover:border-primary/30 transition-all">
              <div className="text-4xl font-light text-primary mb-3">98%</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wide">Taxa de Satisfação</div>
            </div>
            <div className="text-center p-8 bg-accent/5 rounded-2xl border border-accent/20 hover:border-primary/30 transition-all">
              <div className="text-4xl font-light text-primary mb-3">7+</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wide">Anos de Excelência</div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 px-6 bg-accent/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-4 block">
              Nossos Valores
            </span>
            <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-6">
              O que nos Torna Únicos
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Princípios que guiam cada tratamento, cada interação, cada momento na Maddie Tavares
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-background p-10 rounded-3xl shadow-lg hover:shadow-xl transition-all group">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Sparkles className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-light mb-4">Excelência</h3>
              <p className="text-muted-foreground leading-relaxed">
                Comprometidos com os mais altos padrões de qualidade em todos os procedimentos, 
                utilizando tecnologia de ponta e produtos premium internacionais.
              </p>
            </div>

            <div className="bg-background p-10 rounded-3xl shadow-lg hover:shadow-xl transition-all group">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-light mb-4">Acolhimento</h3>
              <p className="text-muted-foreground leading-relaxed">
                Cada cliente é único e merece atenção personalizada. Nosso ambiente foi criado 
                para que você se sinta em casa, relaxado e cuidado.
              </p>
            </div>

            <div className="bg-background p-10 rounded-3xl shadow-lg hover:shadow-xl transition-all group">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-light mb-4">Inovação</h3>
              <p className="text-muted-foreground leading-relaxed">
                Sempre à frente das tendências, investimos em formação contínua e nas mais 
                recentes tecnologias do mercado de estética avançada.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section - Real Photos from Client */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-4 block">
              Nosso Espaço
            </span>
            <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-6">
              Um Ambiente Pensado para Você
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Cada detalhe foi cuidadosamente escolhido para criar uma experiência sensorial completa
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="relative h-80 rounded-3xl overflow-hidden group">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-11-17%20at%2021.19.38-Q0ic3AXwGqwi7sO917iYnGBMGJwjT0.jpeg"
                alt="Recepção"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <span className="text-white font-light text-xl">Recepção Elegante</span>
              </div>
            </div>

            <div className="relative h-80 rounded-3xl overflow-hidden group">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-11-17%20at%2021.19.44%20%281%29-B4BAhak3JcrX4KDUdCJbmS2S8sLOXY.jpeg"
                alt="Sala de espera"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <span className="text-white font-light text-xl">Sala de Espera Aconchegante</span>
              </div>
            </div>

            <div className="relative h-80 rounded-3xl overflow-hidden group">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-11-17%20at%2021.19.44-32dARCvGwEsIrk9zjFujj50oV2UMCy.jpeg"
                alt="Spa com banheira"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <span className="text-white font-light text-xl">Spa Premium</span>
              </div>
            </div>

            <div className="relative h-80 rounded-3xl overflow-hidden group">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-11-17%20at%2021.19.43-MwiG8j4zfEaRCFa0Rjbw5vdjWHtUKY.jpeg"
                alt="Sala de tratamento"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <span className="text-white font-light text-xl">Sala de Tratamento</span>
              </div>
            </div>

            <div className="relative h-80 rounded-3xl overflow-hidden group">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-11-17%20at%2021.19.46-8c8EvOk90Y36Xm8e1sI58i0Fd2RLcI.jpeg"
                alt="Quarto de tratamento"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <span className="text-white font-light text-xl">Ambiente Relaxante</span>
              </div>
            </div>

            <div className="relative h-80 rounded-3xl overflow-hidden group">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-11-17%20at%2021.19.43%20%281%29-hO089841f2PqEX0Pv2Gyo3gAXoapJN.jpeg"
                alt="Balcão de recepção"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <span className="text-white font-light text-xl">Recepção Premium</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-24 px-6 bg-accent/5">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-11-17%20at%2021.19.44-32dARCvGwEsIrk9zjFujj50oV2UMCy.jpeg"
                alt="Experiência na clínica"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-4 block">
                A Experiência Maddie Tavares
              </span>
              <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-6">
                Mais do que Tratamentos, uma Jornada de Transformação
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Quando você entra na Maddie Tavares, é transportado para um mundo de tranquilidade 
                e sofisticação. O aroma suave, a iluminação cuidadosamente planejada, o som ambiente 
                relaxante - tudo foi pensado para o seu bem-estar.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-light mb-2">Atendimento Personalizado</h3>
                    <p className="text-muted-foreground">
                      Consulta inicial completa para entender suas necessidades e objetivos
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-light mb-2">Pontualidade e Respeito</h3>
                    <p className="text-muted-foreground">
                      Seu tempo é precioso. Garantimos horários pontuais e atendimento sem pressa
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-light mb-2">Localização Privilegiada</h3>
                    <p className="text-muted-foreground">
                      No coração de Cabo Verde, com fácil acesso e estacionamento disponível
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-4 block">
              Nossa Equipe
            </span>
            <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-6">
              Profissionais Especializadas e Apaixonadas
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Uma equipe dedicada, formada internacionalmente e certificada nas mais avançadas técnicas de estética
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="relative w-64 h-64 mx-auto mb-6 rounded-full overflow-hidden shadow-xl group-hover:shadow-2xl transition-all">
                <Image
                  src="images/MT.jpeg"
                  alt="Maddie Tavares"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h3 className="text-2xl font-light mb-2">Maddie Tavares</h3>
              <p className="text-primary text-sm font-semibold uppercase tracking-wide mb-3">Fundadora & CEO</p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                7+ anos de experiência em estética avançada, com formação internacional em harmonização facial
              </p>
            </div>

            <div className="text-center group">
              <div className="relative w-64 h-64 mx-auto mb-6 rounded-full overflow-hidden shadow-xl group-hover:shadow-2xl transition-all">
                <Image
                  src="images/carla.png"
                  alt="Especialista"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h3 className="text-2xl font-light mb-2">Carla Graça</h3>
              <p className="text-primary text-sm font-semibold uppercase tracking-wide mb-3">Especialista Sênior</p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Expert em massagens terapêuticas e procedimentos corporais.
            </div>

            <div className="text-center group">
              <div className="relative w-64 h-64 mx-auto mb-6 rounded-full overflow-hidden shadow-xl group-hover:shadow-2xl transition-all">
                <Image
                  src="images/edi.png"
                  alt="Terapeuta"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h3 className="text-2xl font-light mb-2">Edilene Fortes</h3>
              <p className="text-primary text-sm font-semibold uppercase tracking-wide mb-3">Especialista Sênior</p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Expert em manicure e pedicure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-primary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-6">
            Pronta para Sua Transformação?
          </h2>
          <p className="text-xl text-white/90 mb-10 font-light leading-relaxed">
            Agende sua consulta e descubra como podemos realçar sua beleza natural 
            com tratamentos personalizados e resultados extraordinários
          </p>
          <Link
            href="/agendar"
            className="inline-block bg-white text-primary px-12 py-4 rounded-full text-lg font-semibold hover:bg-white/90 transition-all shadow-xl hover:shadow-2xl hover:scale-105"
          >
            Agendar Consulta
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
