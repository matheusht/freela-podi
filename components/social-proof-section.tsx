'use client'

import Image from "next/image"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

const testimonials = [
  {
    image: "/test.jpeg",
    alt: "Depoimento de aluna sobre o curso PoDI",
  },
  {
    image: "/test1.jpeg",
    alt: "Feedback positivo sobre a metodologia",
  },
  {
    image: "/test2.jpeg",
    alt: "Testemunho de transformação",
  },
  {
    image: "/test3.jpeg",
    alt: "Resultado alcançado com o PoDI",
  },
  {
    image: "/test4.jpeg",
    alt: "Experiência de sucesso com o curso",
  },
  {
    image: "/test6.jpeg",
    alt: "Depoimento de mudança de vida",
  },
  {
    image: "/test7.jpeg",
    alt: "Conquista financeira com o PoDI",
  },
  {
    image: "/test8.jpeg",
    alt: "Transformação através do método",
  },
]

export function SocialProofSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  // Auto-advance carousel
  useEffect(() => {
    if (isPaused) return
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 10000) // Change slide every 10 seconds

    return () => clearInterval(interval)
  }, [isPaused])

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  // Get visible testimonials (current + next 2 for desktop, current for mobile)
  const getVisibleTestimonials = () => {
    const visible = []
    for (let i = 0; i < 3; i++) {
      visible.push(testimonials[(currentIndex + i) % testimonials.length])
    }
    return visible
  }

  return (
    <motion.section 
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="bg-[#432818] py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-10 md:mb-12 max-w-3xl mx-auto">
          <div className="w-12 sm:w-16 h-1 bg-[#fceede] mx-auto mb-4 sm:mb-6"></div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-balance text-[#fceede]">
            Da uma olhada no que as alunas do PoDI estão falando
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-[#d0c1b1] text-pretty leading-relaxed px-2">
            Centenas de mulheres já transformaram suas vidas com o PoDI
          </p>
        </div>

        {/* Carousel Container */}
        <div 
          className="relative max-w-6xl mx-auto mb-6 sm:mb-8"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Desktop: 3 columns with auto-advance */}
          <div className="hidden md:block">
              <motion.div
              key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-3 gap-4 sm:gap-6"
              >
              {getVisibleTestimonials().map((testimonial, index) => (
                <div
                  key={`${currentIndex}-${index}`}
                  className="rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
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
            </motion.div>
          </div>

          {/* Mobile/Tablet: 1 column */}
          <div className="md:hidden">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="rounded-xl sm:rounded-2xl overflow-hidden shadow-lg max-w-md mx-auto"
          >
              <Image
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].alt}
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </motion.div>
      </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex justify-center items-center gap-3 sm:gap-4">
          <button 
            onClick={goToPrev}
            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-[#fceede] text-[#fceede] flex items-center justify-center hover:bg-[#fceede] hover:text-[#5a3208] transition-colors"
            aria-label="Depoimento anterior"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Dots Indicator */}
          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex 
                    ? 'bg-[#fceede] w-6' 
                    : 'bg-[#8c745c] hover:bg-[#d0c1b1]'
                }`}
                aria-label={`Ir para depoimento ${index + 1}`}
              />
            ))}
          </div>

          <button 
            onClick={goToNext}
            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-[#fceede] text-[#fceede] flex items-center justify-center hover:bg-[#fceede] hover:text-[#5a3208] transition-colors"
            aria-label="Próximo depoimento"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </motion.section>
  )
}
