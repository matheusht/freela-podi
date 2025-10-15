"use client"

import { useState, useEffect } from "react"

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
    <div className="bg-[#fceede] border-b border-[#79450b]/20 py-2 sm:py-3 px-3 sm:px-4 text-center sticky top-0 z-50">
      <p className="text-xs sm:text-sm md:text-base font-medium text-[#79450b]">
        🔥 APROVEITE A OFERTA: De <span className="line-through">R$1997</span> por apenas{" "}
        <span className="font-bold text-[#79450b] text-sm sm:text-base md:text-lg">R$297</span>
        <span className="hidden sm:inline"> • </span>
        <span className="block sm:inline mt-1 sm:mt-0">
          <span className="font-bold bg-[#d0c1b1] px-2 py-1 rounded text-[#79450b]">
            {String(timeLeft.hours).padStart(2, "0")}:{String(timeLeft.minutes).padStart(2, "0")}:
            {String(timeLeft.seconds).padStart(2, "0")}
          </span>
        </span>
      </p>
    </div>
  )
}
