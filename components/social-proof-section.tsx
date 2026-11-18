"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

const testimonials = [
  {
    image: "/testimonials/15.jpg",
    alt: "Depoimento de aluna - R$ 1.206,51 de comissões no fechamento do mês",
  },
  {
    image: "/testimonials/16.jpg",
    alt: "Depoimento de aluna - Primeiro mês com Shein: R$ 904,46 disponível e R$ 1.646,57 pendente",
  },
  {
    image: "/testimonials/13.jpeg",
    alt: "Depoimento de aluna - Mais de R$ 150 em um único dia",
  },
  {
    image: "/testimonials/14.jpeg",
    alt: "Depoimento de aluna - R$ 154,60 de comissão em um único dia",
  },
  {
    image: "/testimonials/1.jpeg",
    alt: "Depoimento de aluna sobre o curso PoDI",
  },
  {
    image: "/testimonials/10.jpeg",
    alt: "Feedback positivo sobre a metodologia",
  },
]

export function SocialProofSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (isPaused) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 10000)

    return () => clearInterval(interval)
  }, [isPaused])

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const getVisibleTestimonials = () => {
    const visible = []
    for (let i = 0; i < 3; i++) {
      visible.push(testimonials[(currentIndex + i) % testimonials.length])
    }
    return visible
  }

  return (
    <section className="bg-[#12110f] py-14 sm:py-18 md:py-22 lg:py-24 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-12 max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-balance text-[#f8f5ee]">
            Dá uma olhada no que as alunas do PoDI estão falando
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-[#f8f5ee]/75 text-pretty leading-relaxed px-2">
            Centenas de mulheres já transformaram suas vidas com o PoDI
          </p>
        </div>

        <div
          className="relative max-w-6xl mx-auto mb-6 sm:mb-8"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="hidden md:grid grid-cols-3 gap-4 sm:gap-6">
            {getVisibleTestimonials().map((testimonial, index) => (
              <div
                key={`${currentIndex}-${index}`}
                className="rounded-xl sm:rounded-2xl overflow-hidden shadow-lg"
              >
                <Image
                  src={testimonial.image}
                  alt={testimonial.alt}
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            ))}
          </div>

          <div className="md:hidden">
            <div className="rounded-xl sm:rounded-2xl overflow-hidden shadow-lg max-w-md mx-auto">
              <Image
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].alt}
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center gap-3 sm:gap-4">
          <button
            onClick={goToPrev}
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[#f8f5ee]/30 text-[#f8f5ee] flex items-center justify-center active:scale-[0.97] [@media(hover:hover)_and_(pointer:fine)]:hover:bg-[#f8f5ee] [@media(hover:hover)_and_(pointer:fine)]:hover:text-[#12110f] transition-[transform,background-color,color] duration-150 ease-out"
            aria-label="Depoimento anterior"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-[width,background-color] duration-200 ease-out ${
                  index === currentIndex
                    ? "bg-[#e5c365] w-6"
                    : "bg-[#f8f5ee]/30 w-2 hover:bg-[#f8f5ee]/60"
                }`}
                aria-label={`Ir para depoimento ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={goToNext}
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[#f8f5ee]/30 text-[#f8f5ee] flex items-center justify-center active:scale-[0.97] [@media(hover:hover)_and_(pointer:fine)]:hover:bg-[#f8f5ee] [@media(hover:hover)_and_(pointer:fine)]:hover:text-[#12110f] transition-[transform,background-color,color] duration-150 ease-out"
            aria-label="Próximo depoimento"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
