import { Button } from "@/components/ui/button"
import { CHECKOUT_URL } from "@/lib/constants"

const includedItems = [
  "Acesso aos 7 módulos do PoDI +",
  "Aulas práticas e objetivas",
  "Suporte pelo WhatsApp",
  "12 meses de acesso ao treinamento",
  "Plano de ação para começar",
]

export function PricingSection() {
  return (
    <section
      id="oferta"
      className="bg-[#12110f] bg-gradient-to-br from-[#1f1b14] via-[#12110f] to-[#0a0908] py-14 sm:py-18 md:py-22 lg:py-24 relative overflow-hidden"
    >
      <div className="relative z-10">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center max-w-6xl mx-auto">
            {/* Left Content: O que você recebe? */}
            <div className="text-[#f8f5ee]">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6 sm:mb-8 text-balance text-white">
                Sua oportunidade de começar é agora!
              </h2>

              <div className="mb-6 sm:mb-8">
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 sm:mb-5 text-[#e5c365]">
                  O que você recebe?
                </h3>
                <ul className="space-y-3 sm:space-y-3.5">
                  {includedItems.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 sm:w-6 sm:h-6 text-[#e5c365] flex-shrink-0 mt-0.5"
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
                      <span className="text-base sm:text-lg leading-relaxed text-white/95">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-white/15 pt-5 sm:pt-6 space-y-2">
                <p className="text-sm sm:text-base text-white/80 leading-relaxed">
                  Aprenda no seu ritmo, de onde estiver, e descubra novas possibilidades de trabalhar pela internet.
                </p>
                <p className="text-sm sm:text-base font-semibold text-[#e5c365] pt-1">
                  PoDI + — Mais moderno. Mais direto. Mais prática. Mais possibilidades.
                </p>
              </div>
            </div>

            {/* Right Pricing Card */}
            <div className="flex justify-center lg:justify-end">
              <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-9 shadow-[0_24px_60px_rgba(0,0,0,0.45)] max-w-md w-full text-[#12110f]">
                <div className="flex items-center justify-between mb-6 gap-2">
                  <span className="bg-[#f8f5ee] text-[#9a721c] px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold">
                    Oferta Especial de Lançamento
                  </span>
                  <div className="text-[#12110f] font-bold text-base sm:text-lg">PoDI +</div>
                </div>

                <div className="text-center mb-6 sm:mb-7">
                  <p className="text-sm sm:text-base text-[#5c564b] mb-2">
                    De <span className="line-through">R$ 297,00</span> por apenas
                  </p>
                  <div className="flex items-baseline justify-center gap-1.5 mb-1">
                    <span className="text-4xl sm:text-5xl font-bold tracking-tight text-[#12110f]">
                      R$ 197,00
                    </span>
                  </div>
                  <p className="text-[#5c564b] text-sm sm:text-base font-medium mb-3">
                    à vista ou em até 12x
                  </p>
                  <p className="text-xs sm:text-sm font-semibold text-[#9a721c]">
                    R$ 100 de desconto no lançamento!
                  </p>
                </div>

                <Button
                  size="lg"
                  className="w-full text-sm sm:text-base py-6 bg-[#12110f] text-[#e5c365] font-bold rounded-full active:scale-[0.97] [@media(hover:hover)_and_(pointer:fine)]:hover:bg-[#23201b] [@media(hover:hover)_and_(pointer:fine)]:hover:scale-[1.01] transition-[transform,background-color] duration-150 ease-[cubic-bezier(0.23,1,0.32,1)]"
                  asChild
                >
                  <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer">
                    QUERO GARANTIR MEU ACESSO POR R$ 197
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
