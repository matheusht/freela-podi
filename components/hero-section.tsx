"use client"

import Image from "next/image"
import { Button } from "./ui/button"
import { CHECKOUT_URL } from "@/lib/constants"

const highlights = [
  "Venda aparecendo ou sem aparecer",
  "Grave e edite pelo celular",
  "Plano prático de 4 semanas",
]

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#090807] text-[#f8f5ee] py-12 sm:py-16 md:py-20 lg:py-24 border-b border-[#e5c365]/15">
      {/* Ambient gold radial lighting */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(212,175,55,0.12),transparent_50%),radial-gradient(circle_at_80%_50%,rgba(212,175,55,0.14),transparent_55%)]"
        aria-hidden="true"
      />

      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Brand Lockup, Copy, Value Stack & CTA */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
            {/* Clean Brand Lockup */}
            <div className="inline-flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
              <div className="relative w-40 sm:w-48">
                <div
                  className="pointer-events-none absolute -inset-4 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.14)_0%,transparent_70%)] blur-lg"
                  aria-hidden="true"
                />
                <Image
                  src="/podi-plus-logo.png"
                  alt="PoDI +"
                  width={688}
                  height={380}
                  priority
                  className="relative z-10 w-full h-auto object-contain drop-shadow-[0_4px_20px_rgba(212,175,55,0.18)]"
                />
              </div>
              <span className="hidden sm:block h-6 w-px bg-white/15" aria-hidden="true" />
              <span className="text-sm sm:text-base font-medium text-[#f8f5ee]/80">
                Poder da Divulgação na Internet
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold leading-[1.12] tracking-tight text-white text-balance">
              Aprenda a trabalhar com{" "}
              <span className="text-[#e5c365]">Shein e Shopee</span>, gravar e editar vídeos aparecendo ou não
            </h1>

            {/* Subtitle & Tagline */}
            <p className="text-base sm:text-lg md:text-xl text-[#f8f5ee]/80 leading-relaxed max-w-2xl text-pretty">
              Mesmo começando do zero, sem experiência.{" "}
              <span className="text-white font-medium">
                Mais prático. Mais direto. Mais atualizado. Mais oportunidades para você!
              </span>
            </p>

            {/* Scannable Highlights */}
            <ul className="flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2.5 pt-1 text-sm sm:text-base text-[#f8f5ee]/90">
              {highlights.map((item) => (
                <li key={item} className="inline-flex items-center gap-2">
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 text-[#e5c365] flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* CTA & Price/Guarantee Anchor */}
            <div className="w-full sm:w-auto pt-2 space-y-3">
              <Button
                size="lg"
                className="w-full sm:w-auto text-base sm:text-lg px-8 sm:px-10 py-6 sm:py-7 gradient-gold text-[#12110f] font-bold rounded-full shadow-[0_12px_36px_-4px_rgba(212,175,55,0.4)] active:scale-[0.97] [@media(hover:hover)_and_(pointer:fine)]:hover:scale-[1.02] [@media(hover:hover)_and_(pointer:fine)]:hover:opacity-95 transition-[transform,opacity,box-shadow] duration-150 ease-[cubic-bezier(0.23,1,0.32,1)]"
                asChild
              >
                <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer">
                  QUERO COMEÇAR AGORA
                </a>
              </Button>

              <p className="text-xs sm:text-sm text-[#f8f5ee]/65">
                Oferta especial de lançamento: de{" "}
                <span className="line-through text-[#f8f5ee]/45">R$ 297,00</span> por{" "}
                <strong className="text-[#e5c365] font-semibold">R$ 197,00 à vista</strong> ou em até 12x • 7 dias de garantia
              </p>
            </div>
          </div>

          {/* Right Column: Editorial Mentor & Outcome Showcase */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md lg:max-w-none">
              <div className="relative rounded-[2rem] overflow-hidden bg-[#141210] shadow-[0_24px_60px_rgba(0,0,0,0.65),0_0_0_1px_rgba(229,195,101,0.22)] aspect-[4/5]">
                <Image
                  src="/flavia-yuan-2.jpg"
                  alt="Flávia Raíssa e Yuan Martins criando conteúdo pelo celular"
                  width={800}
                  height={1000}
                  priority
                  className="w-full h-full object-cover object-[50%_62%] scale-[1.06]"
                />
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#090807]/90 via-[#090807]/20 to-transparent"
                  aria-hidden="true"
                />

                {/* Bottom White/Gold Card inside Portrait */}
                <div className="absolute inset-x-4 bottom-4 sm:inset-x-5 sm:bottom-5 rounded-2xl bg-[#f8f5ee]/95 backdrop-blur-md p-4 sm:p-5 text-[#12110f] shadow-[0_12px_30px_rgba(0,0,0,0.35)]">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="font-bold text-base sm:text-lg text-[#12110f] leading-snug">
                        Flávia Raíssa e Yuan
                      </p>
                      <p className="text-xs sm:text-sm text-[#5c564b] mt-0.5">
                        +12 anos de experiência no digital
                      </p>
                    </div>
                    <div className="flex-shrink-0 text-right border-l border-[#12110f]/12 pl-4">
                      <p className="text-xs sm:text-sm font-bold text-[#12110f] leading-none">
                        7 Módulos
                      </p>
                      <p className="text-xs font-semibold text-[#9a721c] mt-1 leading-none">
                        + Suporte VIP
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
