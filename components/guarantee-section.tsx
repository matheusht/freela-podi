import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Image from "next/image"

export function GuaranteeSection() {
  return (
    <section className="bg-gradient-to-b from-[#fceede] to-white py-12 sm:py-16 md:py-20 lg:py-24">
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
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#79450b] mb-6 sm:mb-8 text-balance px-2">
            O seu investimento é 100% <br className="hidden sm:block" />
             seguro e protegido!
          </h2>

          {/* Description */}
          <div className="text-[#8c745c] text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed space-y-4 sm:space-y-6 mb-6 sm:mb-8 px-2">
            <p>
              Ao realizar a sua inscrição no PoDI, você automaticamente ganha 7 dias de teste sem compromisso.
            </p>
            
            <p>
              Onde poderá assistir às aulas, realizar o que for ensinado e se caso não quiser permanecer ou se arrepender dentro dos 7 primeiros dias, devolvemos 100% do seu dinheiro.
            </p>
            
            <p>
              Basta nos chamar no suporte e solicitar seu reembolso.
            </p>
          </div>

          {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="mt-8 text-center"
              >
                <motion.a
                  href="https://pay.kiwify.com.br/G7NBrKH"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -4 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative overflow-hidden inline-block bg-gradient-to-r from-[#79450b] to-[#8c745c] hover:from-[#8c745c] hover:to-[#79450b] text-[#fceede] font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg transition-all transform shadow-xl border-2 border-[#d0c1b1]/30 cursor-pointer"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#79450b] via-[#8c745c] to-[#79450b] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#d0c1b1]/30 to-[#d0c1b1]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="transition-transform duration-300 group-hover:scale-105 relative z-10">
                  QUERO EXPERIMENTAR SEM RISCOS
                  </span>
                </motion.a>
              </motion.div>
        </div>
      </div>
    </section>
  )
}