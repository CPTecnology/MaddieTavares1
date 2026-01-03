'use client'

import Image from 'next/image'

export function Atmosphere() {
  const spaces = [
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-11-17%20at%2021.19.44%20%281%29-B4BAhak3JcrX4KDUdCJbmS2S8sLOXY.jpeg",
      alt: "Sala de Espera Luxuosa",
      description: "Ambiente acolhedor pensado para sua chegada"
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-11-17%20at%2021.19.44-32dARCvGwEsIrk9zjFujj50oV2UMCy.jpeg",
      alt: "Banheira de Hidroterapia",
      description: "Relaxamento absoluto em ambiente zen"
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-11-17%20at%2021.19.43-MwiG8j4zfEaRCFa0Rjbw5vdjWHtUKY.jpeg",
      alt: "Sala de Recepção",
      description: "Espaço elegante e aconchegante"
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-11-17%20at%2021.19.46-8c8EvOk90Y36Xm8e1sI58i0Fd2RLcI.jpeg",
      alt: "Cama de Tratamento Premium",
      description: "Conforto máximo para seu atendimento"
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-11-17%20at%2021.19.38-Q0ic3AXwGqwi7sO917iYnGBMGJwjT0.jpeg",
      alt: "Recepção Principal",
      description: "Primeira impressão de luxo e profissionalismo"
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-11-17%20at%2021.19.43%20%281%29-hO089841f2PqEX0Pv2Gyo3gAXoapJN.jpeg",
      alt: "Balcão de Atendimento",
      description: "Design sofisticado em cada detalhe"
    },
  ]

  return (
    <section className="py-16 sm:py-24 md:py-32 lg:py-40 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-secondary/30 to-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16 md:mb-20 lg:mb-24">
          <p className="text-accent tracking-widest uppercase text-xs sm:text-sm mb-4 sm:mb-6 font-light">Ambiente Excepcional</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light tracking-tight mb-4 md:mb-8 text-balance px-2 sm:px-0">
            Imersão no Luxo
          </h2>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed px-2 sm:px-0">
            Cada espaço foi cuidadosamente projetado para criar uma atmosfera de serenidade, elegância e bem-estar absoluto. Descubra os ambientes que tornam Maddie Tavares único.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {spaces.map((space, idx) => (
            <div key={idx} className="group flex flex-col h-full">
              <div className="relative overflow-hidden rounded-lg sm:rounded-2xl h-40 sm:h-56 md:h-64 mb-4 sm:mb-6 glow-effect">
                <Image
                  src={space.src || "/placeholder.svg"}
                  alt={space.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-light mb-2 sm:mb-3 group-hover:text-primary transition">{space.alt}</h3>
              <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">{space.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
