import { CHECKOUT_URL } from "@/lib/constants"

export function TransformationPillarsSection() {
  return (
    <section className="bg-gradient-to-b from-[#f8f5ee] to-white py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <div className="mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#12110f] mb-4 sm:mb-6 px-2">
              O PoDI + foi feito pra você que quer conquistar liberdade e tempo pra viver.
            </h2>
            <p className="text-base sm:text-lg text-[#5c564b] leading-relaxed max-w-3xl mx-auto px-2">
              Aulas práticas e objetivas que você assiste pelo celular.<br className="hidden sm:block" />
              <span className="font-semibold text-[#12110f]">Mais prático. Mais direto. Mais atualizado. Mais oportunidades para você!</span>
            </p>
          </div>

          {/* Features */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-10 md:mb-12">
            <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-raised">
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">📱</div>
              <h4 className="text-lg sm:text-xl font-bold text-[#12110f] mb-3 sm:mb-4">
                Na Prática pelo Celular
              </h4>
              <p className="text-[#5c564b] leading-relaxed text-sm sm:text-base">
                Aprenda a gravar e editar vídeos utilizando seu celular, mesmo começando do zero e sem experiência.
              </p>
            </div>

            <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-raised">
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">⚡</div>
              <h4 className="text-lg sm:text-xl font-bold text-[#12110f] mb-3 sm:mb-4">
                Plano de Ação de 4 Semanas
              </h4>
              <p className="text-[#5c564b] leading-relaxed text-sm sm:text-base">
                Um passo a passo direto ao ponto de quatro semanas para você colocar tudo em prática com clareza.
              </p>
            </div>

            <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-raised sm:col-span-2 md:col-span-1">
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🏠</div>
              <h4 className="text-lg sm:text-xl font-bold text-[#12110f] mb-3 sm:mb-4">
                No Seu Ritmo, de Onde Estiver
              </h4>
              <p className="text-[#5c564b] leading-relaxed text-sm sm:text-base">
                Aprenda a trabalhar com Shein e Shopee aparecendo ou sem precisar mostrar o rosto, no seu próprio tempo.
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <a
            href={CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full sm:w-auto bg-[#12110f] text-[#e5c365] font-bold px-6 sm:px-8 md:px-12 py-4 sm:py-5 md:py-6 rounded-full text-sm sm:text-base md:text-lg lg:text-xl shadow-xl active:scale-[0.97] [@media(hover:hover)_and_(pointer:fine)]:hover:bg-[#23201b] [@media(hover:hover)_and_(pointer:fine)]:hover:scale-[1.03] transition-[transform,background-color,box-shadow] duration-150 ease-[cubic-bezier(0.23,1,0.32,1)]"
          >
            QUERO COMEÇAR AGORA
          </a>
        </div>
      </div>
    </section>
  )
}
