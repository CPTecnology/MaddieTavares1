'use client'

import { useState } from "react"
import Image from 'next/image'
import { ImageLightbox } from "./image-lightbox"

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
const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index)
    setLightboxOpen(true)
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
  }

  const goToNext = () => {
    setCurrentImageIndex((prev) => (prev + 1) % spaces.length)
  }

  const goToPrevious = () => {
    setCurrentImageIndex((prev) => (prev - 1 + spaces.length) % spaces.length)
  }

  return (
    <section className="py-40 px-6 bg-gradient-to-b from-background via-secondary/30 to-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <p className="text-accent tracking-widest uppercase text-sm mb-6 font-light">Ambiente Excepcional</p>
          <h2 className="text-5xl md:text-6xl font-light tracking-tight mb-8 text-balance">Imersão no Luxo</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Cada espaço foi cuidadosamente projetado para criar uma atmosfera de serenidade, elegância e bem-estar
            absoluto. Descubra os ambientes que tornam Maddie Tavares único.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {spaces.map((space, idx) => (
            <div key={idx} className="group cursor-pointer" onClick={() => openLightbox(idx)}>
              <div className="relative overflow-hidden rounded-2xl h-72 mb-6 glow-effect">
                <Image
                  src={space.src || "/placeholder.svg"}
                  alt={space.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500">
                  <span className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm">
                    Clique para ampliar
                  </span>
                </div>
              </div>
              <h3 className="text-xl font-light mb-3 group-hover:text-primary transition">{space.alt}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{space.description}</p>
            </div>
          ))}
        </div>
      </div>

      <ImageLightbox
        images={spaces}
        currentIndex={currentImageIndex}
        isOpen={lightboxOpen}
        onClose={closeLightbox}
        onNext={goToNext}
        onPrevious={goToPrevious}
      />
    </section>
  )
}
