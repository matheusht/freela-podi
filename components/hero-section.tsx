import { Button } from "./ui/button"
import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <motion.section
      // initial={{ opacity: 0, scale: 0.95 }}
      // animate={{ opacity: 1, scale: 1 }}
      // transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="gradient-brand min-h-[calc(100vh-150px)] sm:min-h-screen flex items-start justify-center py-2 pb-4 sm:py-12 md:py-16 lg:py-20"
    >
      <div className="container mt-5 mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center space-y-4 sm:space-y-6 pt-8 sm:pt-0">
          <h1 className="text-2xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl font-bold leading-tight text-[#fceede] text-balance px-2">
            Conquiste sua <span className="font-bold">LIBERDADE FINANCEIRA</span> sem sair de casa
          </h1>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#fceede]/90 leading-relaxed text-pretty max-w-3xl mx-auto px-2">
            No PoDI você vai apreender a usar o seu celular como FONTE DE RENDA 💰 <br />
            E o melhor: trabalhando da sua casa, ter mais tempo com seus filhos e SEM precisar aparecer.
          </p>

          {/* Urgency Offer */}
          {/* <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 md:p-6 max-w-2xl mx-auto border border-white/20">
            <p className="text-lg md:text-xl lg:text-2xl font-bold text-yellow-300 mb-2">
              🔥 OFERTA ESPECIAL POR TEMPO LIMITADO!
            </p>
            <p className="text-base md:text-lg lg:text-xl text-white">
              De <span className="line-through text-white/70">R$297</span> por apenas{" "}
              <span className="text-2xl md:text-3xl font-bold text-yellow-300">12x de R$19,70</span>
            </p>
            <p className="text-white/90 mt-2 text-sm md:text-base">ou R$197 à vista</p>
          </div> */}

          <div className="flex justify-center pt-4 sm:pt-6 px-4">
            <Button
              size="lg"
              className="w-full sm:w-auto text-sm sm:text-base md:text-lg px-6 sm:px-8 md:px-12 py-5 sm:py-6 md:py-8 bg-[#fceede] text-[#79450b] hover:bg-[#d0c1b1] font-bold rounded-full shadow-2xl transform hover:scale-105 transition-all"
              asChild
            >
              <a href="https://pay.kiwify.com.br/G7NBrKH" target="_blank" rel="noopener noreferrer">
                <span className="hidden sm:inline">🚀 Quero minha vaga agora para começar a ganhar dinheiro!</span>
                <span className="sm:hidden">🚀 Quero Minha Vaga!</span>
              </a>
            </Button>
          </div>

          <div className="pt-4 sm:pt-6 px-2">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl max-w-3xl mx-auto bg-[#fceede]/10 backdrop-blur-sm">
              <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
                <iframe
                  src="https://player.vimeo.com/video/1126605579?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                  title="PoDI"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
