"use client"

import { useEffect, useCallback } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

interface ImageLightboxProps {
  images: { src: string; alt: string }[]
  currentIndex: number
  isOpen: boolean
  onClose: () => void
  onNext: () => void
  onPrevious: () => void
}

export function ImageLightbox({ images, currentIndex, isOpen, onClose, onNext, onPrevious }: ImageLightboxProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return
      if (e.key === "Escape") onClose()
      if (e.key === "ArrowRight") onNext()
      if (e.key === "ArrowLeft") onPrevious()
    },
    [isOpen, onClose, onNext, onPrevious],
  )

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown)
    if (isOpen) {
      document.body.style.overflow = "hidden"
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown)
      document.body.style.overflow = "unset"
    }
  }, [handleKeyDown, isOpen])

  if (!isOpen) return null

  const currentImage = images[currentIndex]

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center" onClick={onClose}>
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" />

      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 transition text-white"
        aria-label="Fechar"
      >
        <X size={28} />
      </button>

      {/* Previous button */}
      <button
        onClick={(e) => {
          e.stopPropagation()
          onPrevious()
        }}
        className="absolute left-4 md:left-8 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 transition text-white"
        aria-label="Imagem anterior"
      >
        <ChevronLeft size={32} />
      </button>

      {/* Next button */}
      <button
        onClick={(e) => {
          e.stopPropagation()
          onNext()
        }}
        className="absolute right-4 md:right-8 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 transition text-white"
        aria-label="Próxima imagem"
      >
        <ChevronRight size={32} />
      </button>

      {/* Image container */}
      <div className="relative w-[90vw] h-[80vh] max-w-5xl" onClick={(e) => e.stopPropagation()}>
        <Image
          src={currentImage.src || "https://res.cloudinary.com/dzdyokoiv/image/upload/v1769915340/maddie_tavares/voalh0amrnr4oybu4wyd.svg"}
          alt={currentImage.alt}
          fill
          className="object-contain"
          sizes="90vw"
          priority
        />
      </div>

      {/* Image counter */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/80 text-sm">
        {currentIndex + 1} / {images.length}
      </div>

      {/* Dots indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={(e) => {
              e.stopPropagation()
            }}
            className={`w-2 h-2 rounded-full transition ${idx === currentIndex ? "bg-white" : "bg-white/40"}`}
            aria-label={`Ir para imagem ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
