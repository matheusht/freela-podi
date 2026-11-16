"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"

export interface StatCard {
  id: string
  text?: string
  number?: string
  label?: string
  accentImg?: string
}

export interface InboundHeroProps {
  headline?: string
  description: string | React.ReactNode
  stats: StatCard[]
  initialIndex?: number
  autoAdvanceMs?: number
  theme?: string
  onLearnMore?: () => void
  className?: string
}

export default function InboundHero({
  headline = "O que é o PoDI +?",
  description,
  stats,
  initialIndex = 0,
  onLearnMore,
  className,
}: InboundHeroProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex)

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
    <section className={cn("relative min-h-screen overflow-hidden bg-[#f8f5ee]", className)}>
      {/* Decorative gradient blobs */}
      <div
        className="absolute -right-32 -top-32 h-64 w-64 sm:h-96 sm:w-96 rounded-full bg-gradient-to-br from-[#12110f] to-[#c99e32] opacity-20"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-32 -left-32 h-64 w-64 sm:h-96 sm:w-96 rounded-full bg-gradient-to-tr from-[#c99e32] to-[#e6dfd1] opacity-35"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-16 -right-16 h-48 w-48 sm:h-64 sm:w-64 rounded-full bg-gradient-to-tl from-[#12110f] to-[#c99e32] opacity-20"
        aria-hidden="true"
      />

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center gap-8 sm:gap-12 px-4 sm:px-6 py-12 sm:py-16 lg:flex-row lg:gap-16 lg:px-12">
        {/* Content area - appears first on mobile */}
        <div className="flex w-full flex-col items-start justify-center lg:order-2 lg:w-3/5">
          <h2 className="mb-4 sm:mb-6 font-sans text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-[#12110f]">
            {headline}
          </h2>
          <p className="mb-6 sm:mb-8 max-w-2xl text-pretty text-sm sm:text-base md:text-lg leading-relaxed text-[#5c564b]">
            {description}
          </p>
          <Button
            variant="outline"
            size="lg"
            onClick={onLearnMore}
            className="w-full sm:w-auto rounded-full border-2 border-[#12110f] bg-transparent px-6 sm:px-8 py-4 sm:py-6 text-sm sm:text-base font-semibold uppercase tracking-wide text-[#12110f] active:scale-[0.97] [@media(hover:hover)_and_(pointer:fine)]:hover:bg-[#12110f] [@media(hover:hover)_and_(pointer:fine)]:hover:text-[#e5c365] transition-[transform,background-color,color] duration-150 ease-out focus-visible:ring-2 focus-visible:ring-[#12110f] focus-visible:ring-offset-2"
          >
            QUERO COMEÇAR AGORA
          </Button>
        </div>

        {/* Card area - appears second on mobile */}
        <div className="flex w-full flex-col items-center justify-center lg:order-1 lg:w-2/5">
          <div className="relative scale-90 sm:scale-100">
            <div className="absolute -left-8 sm:-left-12 -top-4 sm:-top-6 h-64 w-56 sm:h-72 sm:w-64 rotate-[-8deg] rounded-[2rem] bg-gradient-to-br from-white/40 to-white/15 shadow-xl backdrop-blur-sm" />
            <div className="absolute -left-4 sm:-left-6 -top-2 sm:-top-3 h-64 w-56 sm:h-72 sm:w-64 rotate-[-4deg] rounded-[2rem] bg-gradient-to-br from-white/60 to-white/25 shadow-xl backdrop-blur-sm" />

            <AnimatePresence mode="wait">
              <motion.div
                key={stats[currentIndex].id}
                initial={{ opacity: 0, scale: 0.95, rotateY: -25 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                exit={{ opacity: 0, scale: 0.95, rotateY: 25 }}
                transition={{
                  duration: 0.35,
                  ease: [0.23, 1, 0.32, 1],
                }}
                className="relative z-10 flex h-64 w-56 sm:h-72 sm:w-64 flex-col items-center justify-center overflow-hidden rounded-[2rem] bg-white p-8 sm:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
              >
                {stats[currentIndex].accentImg && (
                  <div className="absolute inset-0 z-0">
                    <img
                      src={stats[currentIndex].accentImg}
                      alt=""
                      className="h-full w-full object-cover opacity-75"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent" />
                  </div>
                )}

                <div
                  className="absolute -right-6 sm:-right-8 -top-6 sm:-top-8 h-24 w-24 sm:h-32 sm:w-32 rounded-full bg-gradient-to-br from-[#12110f] to-[#c99e32] opacity-90"
                  aria-hidden="true"
                />

                <div className="relative z-10 mt-6 sm:mt-8 text-center flex items-center justify-center h-full">
                  <div className="font-sans text-2xl sm:text-3xl font-bold leading-tight tracking-tight text-white drop-shadow-md px-4">
                    {stats[currentIndex].text || stats[currentIndex].number}
                  </div>
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
                    "h-3 w-3 rounded-full transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#12110f] focus-visible:ring-offset-2",
                    index === currentIndex ? "bg-[#12110f]" : "bg-[#e6dfd1] hover:bg-[#5c564b]"
                  )}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
