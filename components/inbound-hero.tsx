"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"

export interface StatCard {
  id: string
  text: string
  accentImg?: string
}

export interface InboundHeroProps {
  headline?: string
  description: string | React.ReactNode
  stats: StatCard[]
  initialIndex?: number
  onLearnMore?: () => void
  className?: string
}

export default function InboundHero({
  headline = "O que e o PoDI?",
  description,
  stats,
  initialIndex = 0,
  onLearnMore,
  className,
}: InboundHeroProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex)

  // Auto-rotate carousel every 4 seconds
  useEffect(() => {
    if (stats.length <= 1) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % stats.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [stats.length])

  const handleDotClick = (index: number) => {
    setCurrentIndex(index)
  }

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === "ArrowLeft" && index > 0) {
      setCurrentIndex(index - 1)
    } else if (e.key === "ArrowRight" && index < stats.length - 1) {
      setCurrentIndex(index + 1)
    }
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className={cn("relative min-h-screen overflow-hidden bg-[#fceede]", className)}
    >
      {/* Decorative gradient blobs */}
      <div
        className="absolute  -right-32 -top-32 h-64 w-64 sm:h-96 sm:w-96 rounded-full bg-gradient-to-br from-[#79450b] to-[#8c745c] opacity-60"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-32 -left-32 h-64 w-64 sm:h-96 sm:w-96 rounded-full bg-gradient-to-tr from-[#8c745c] to-[#d0c1b1] opacity-60"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-16 -right-16 h-48 w-48 sm:h-64 sm:w-64 rounded-full bg-gradient-to-tl from-[#79450b] to-[#8c745c] opacity-50"
        aria-hidden="true"
      />

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center gap-8 sm:gap-12 px-4 sm:px-6 py-12 sm:py-16 lg:flex-row lg:gap-16 lg:px-12">
        {/* Content area - appears first on mobile */}
        <div className="flex w-full flex-col items-start justify-center lg:order-2 lg:w-3/5">
          <h1 className="mb-4 sm:mb-6 font-sans text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-[#79450b]">
            {headline}
          </h1>
          <p className="mb-6 sm:mb-8 max-w-2xl text-pretty text-sm sm:text-base md:text-lg leading-relaxed text-[#8c745c]">
            {description}
          </p>
          <Button
            variant="outline"
            size="lg"
            onClick={onLearnMore}
            className="w-full sm:w-auto rounded-full border-2 border-[#79450b] bg-transparent px-6 sm:px-8 py-4 sm:py-6 text-sm sm:text-base font-semibold uppercase tracking-wide text-[#79450b] transition-all hover:bg-[#79450b] hover:text-[#fceede] focus-visible:ring-2 focus-visible:ring-[#79450b] focus-visible:ring-offset-2"
          >
            EU QUERO FAZER PARTE
          </Button>
        </div>

        {/* Card area - appears second on mobile */}
        <div className="flex w-full flex-col items-center justify-center lg:order-1 lg:w-2/5">
          <div className="relative scale-90 sm:scale-100">
            <div className="absolute -left-8 sm:-left-12 -top-4 sm:-top-6 h-64 w-56 sm:h-72 sm:w-64 rotate-[-8deg] rounded-[2rem] bg-gradient-to-br from-white/30 to-white/10 shadow-xl backdrop-blur-sm" />
            <div className="absolute -left-4 sm:-left-6 -top-2 sm:-top-3 h-64 w-56 sm:h-72 sm:w-64 rotate-[-4deg] rounded-[2rem] bg-gradient-to-br from-white/50 to-white/20 shadow-xl backdrop-blur-sm" />

            <AnimatePresence mode="wait">
              <motion.div
                key={stats[currentIndex].id}
                initial={{ opacity: 0, scale: 0.8, rotateY: -90 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                exit={{ opacity: 0, scale: 0.8, rotateY: 90 }}
                transition={{
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1]
                }}
                className="relative z-10 flex h-64 w-56 sm:h-72 sm:w-64 flex-col items-center justify-center overflow-hidden rounded-[2rem] bg-white p-8 sm:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
              >
                {/* Background image with low opacity */}
                {stats[currentIndex].accentImg && (
                  <motion.div
                    className="absolute inset-0 z-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.1, duration: 0.5 }}
                  >
                    <img
                      src={stats[currentIndex].accentImg}
                      alt=""
                      className="h-full w-full object-cover opacity-70"
                    />
                  </motion.div>
                )}

                <motion.div
                  className="absolute -right-6 sm:-right-8 -top-6 sm:-top-8 h-24 w-24 sm:h-32 sm:w-32 rounded-full bg-gradient-to-br from-[#79450b] to-[#8c745c] opacity-90"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, duration: 0.5, ease: "backOut" }}
                  aria-hidden="true"
                />

                <div className="relative z-10 mt-6 sm:mt-8 text-center flex items-center justify-center h-full">
                  <motion.div
                    className="font-sans text-2xl sm:text-3xl font-bold leading-tight tracking-tight text-[#79450b] px-4"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                  >
                    {stats[currentIndex].text}
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Carousel dots */}
          {stats.length > 1 && (
            <div
              className="mt-6 sm:mt-8 flex gap-2"
              role="tablist"
              aria-label="Stat cards navigation"
              onKeyDown={(e) => handleKeyDown(e, currentIndex)}
            >
              {stats.map((stat, index) => (
                <button
                  key={stat.id}
                  role="tab"
                  aria-label={`View stat ${index + 1}`}
                  aria-current={index === currentIndex ? "true" : "false"}
                  onClick={() => handleDotClick(index)}
                  className={cn(
                    "h-3 w-3 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#79450b] focus-visible:ring-offset-2",
                    index === currentIndex ? "bg-[#79450b]" : "bg-[#d0c1b1] hover:bg-[#8c745c]",
                  )}
                />
              ))}
            </div>
          )}

          {/* Logo placeholder */}
          {/* <div className="mt-8 sm:mt-12 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full border-3 sm:border-4 border-[#79450b]">
            <div className="h-5 w-5 sm:h-6 sm:w-6 rounded-full bg-[#79450b]" />
          </div> */}
        </div>
      </div>
    </motion.section>
  )
}
