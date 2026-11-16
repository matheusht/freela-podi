"use client"

import Image from "next/image"
import { CHECKOUT_URL } from "@/lib/constants"

export function GuaranteeSection() {
  return (
    <section className="bg-gradient-to-b from-[#f8f5ee] to-white py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Guarantee Badge */}
          <div className="flex justify-center mb-6 sm:mb-8">
            <Image
              src="/selo-garantia.webp"
              alt="Garantia de 7 dias"
              width={200}
              height={200}
              className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56"
            />
          </div>

          {/* Main Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#12110f] mb-6 sm:mb-8 text-balance px-2">
            O seu investimento é 100% <br className="hidden sm:block" />
            seguro e protegido!
          </h2>

          {/* Description */}
          <div className="text-[#5c564b] text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed space-y-4 sm:space-y-6 mb-6 sm:mb-8 px-2">
            <p>
              Ao realizar a sua inscrição no PoDI +, você automaticamente ganha 7 dias de teste sem compromisso.
            </p>

            <p>
              Onde poderá assistir às aulas, realizar o que for ensinado e se caso não quiser permanecer ou se arrepender dentro dos 7 primeiros dias, devolvemos 100% do seu dinheiro.
            </p>

            <p>
              Basta nos chamar no suporte e solicitar seu reembolso.
            </p>
          </div>

          {/* CTA Button */}
          <div className="mt-8 text-center">
            <a
              href={CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#12110f] text-[#e5c365] font-bold px-6 sm:px-8 py-3.5 sm:py-4 rounded-full text-base sm:text-lg shadow-xl active:scale-[0.97] [@media(hover:hover)_and_(pointer:fine)]:hover:bg-[#23201b] [@media(hover:hover)_and_(pointer:fine)]:hover:scale-[1.03] transition-[transform,background-color,box-shadow] duration-150 ease-[cubic-bezier(0.23,1,0.32,1)]"
            >
              QUERO EXPERIMENTAR SEM RISCOS
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
