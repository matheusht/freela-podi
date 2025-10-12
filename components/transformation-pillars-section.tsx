import { motion } from "framer-motion"

export function TransformationPillarsSection() {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.9, y: 40 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="bg-gradient-to-b from-[#fceede] to-white py-12 sm:py-16 md:py-20 lg:py-24"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <div className="mb-8 sm:mb-10 md:mb-12">
            <div className="w-12 sm:w-16 h-1 bg-[#79450b] mx-auto mb-4 sm:mb-6"></div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#79450b] mb-4 sm:mb-6 px-2">
              O PoDI foi feito pra você que quer conquistar liberdade e tempo pra viver.
            </h2>
            <p className="text-base sm:text-lg text-[#8c745c] leading-relaxed max-w-3xl mx-auto px-2">
              Aulas curtas, diretas ao ponto, que você assiste pelo celular.<br className="hidden sm:block" />
              <span className="font-semibold text-[#79450b]">Tudo que você precisa é de um Wi-Fi para lucrar!</span>
            </p>
          </div>

          {/* Features */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-10 md:mb-12">
            <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg border border-[#d0c1b1]">
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">📱</div>
              <h4 className="text-lg sm:text-xl font-bold text-[#79450b] mb-3 sm:mb-4">
                Assista no Celular
              </h4>
              <p className="text-[#8c745c] leading-relaxed text-sm sm:text-base">
                Aulas otimizadas para mobile. Aprenda enquanto as crianças dormem, no intervalo do trabalho ou quando tiver alguns minutos livres.
              </p>
            </div>

            <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg border border-[#d0c1b1]">
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">⚡</div>
              <h4 className="text-lg sm:text-xl font-bold text-[#79450b] mb-3 sm:mb-4">
                Resultados Rápidos
              </h4>
              <p className="text-[#8c745c] leading-relaxed text-sm sm:text-base">
                Método direto ao ponto. Sem enrolação. Você implementa hoje e pode ter sua primeira venda em 24-48h seguindo o passo a passo.
              </p>
            </div>

            <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg border border-[#d0c1b1] sm:col-span-2 md:col-span-1">
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🏠</div>
              <h4 className="text-lg sm:text-xl font-bold text-[#79450b] mb-3 sm:mb-4">
                100% de Casa
              </h4>
              <p className="text-[#8c745c] leading-relaxed text-sm sm:text-base">
                Trabalhe de pijama, cuide dos filhos e ainda construa sua renda extra. Liberdade total de horário e local.
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <a
            href="https://pay.kiwify.com.br/G7NBrKH"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full sm:w-auto bg-gradient-to-r from-[#79450b] to-[#8c745c] hover:from-[#8c745c] hover:to-[#79450b] text-[#fceede] font-bold px-6 sm:px-8 md:px-12 py-4 sm:py-5 md:py-6 rounded-full text-sm sm:text-base md:text-lg lg:text-xl transition-all transform hover:scale-105 shadow-xl"
          >
            🚀 Quero Começar Agora!
          </a>
        </div>
      </div>
    </motion.section>
  )
}