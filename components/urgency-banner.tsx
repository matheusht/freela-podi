"use client"

import { useState, useEffect } from "react"
import { CHECKOUT_URL } from "@/lib/constants"

export function UrgencyBanner() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59,
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 }
        }
        return prev
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="bg-[#0d0c0a]/95 backdrop-blur-md border-b border-[#e5c365]/20 py-2.5 px-3 sm:px-4 text-center sticky top-0 z-50">
      <a
        href={CHECKOUT_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex flex-wrap items-center justify-center gap-x-2.5 gap-y-1 text-xs sm:text-sm md:text-base font-medium text-[#f8f5ee] active:scale-[0.97] [@media(hover:hover)_and_(pointer:fine)]:hover:opacity-90 transition-[transform,opacity] duration-150 ease-[cubic-bezier(0.23,1,0.32,1)]"
      >
        <span>
          <strong className="font-semibold text-[#e5c365]">Oferta Especial de Lançamento:</strong> De{" "}
          <span className="line-through text-[#f8f5ee]/55">R$ 297,00</span> por apenas{" "}
          <span className="font-bold text-white text-sm sm:text-base">R$ 197,00</span>
        </span>
        <span className="hidden sm:inline text-[#e5c365]/50">•</span>
        <span className="font-bold tabular-nums bg-[#e5c365] px-2.5 py-0.5 rounded-full text-[#12110f] text-xs sm:text-sm">
          {String(timeLeft.hours).padStart(2, "0")}:{String(timeLeft.minutes).padStart(2, "0")}:
          {String(timeLeft.seconds).padStart(2, "0")}
        </span>
      </a>
    </div>
  )
}
