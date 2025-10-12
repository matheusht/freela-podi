import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function PainPointsSection() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="bg-white py-12 sm:py-16 md:py-20 lg:py-24"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-10 md:mb-12 max-w-3xl mx-auto">
          <div className="w-12 sm:w-16 h-1 bg-[#79450b] mx-auto mb-4 sm:mb-6"></div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-balance text-[#79450b]">Comece sua jornada hoje</h2>
          <p className="text-base sm:text-lg md:text-xl text-[#8c745c] text-pretty leading-relaxed px-2">
            Libere seu potencial em todas as áreas da sua vida com apenas 20 minutos por dia, aplicando métodos
            comprovados em neurociência aplicada
          </p>
        </div>

        <div className="flex justify-center px-4">
          <Button
            size="lg"
            className="w-full sm:w-auto text-base sm:text-lg px-8 sm:px-10 py-5 sm:py-7 bg-[#79450b] hover:bg-[#8c745c] text-[#fceede] font-semibold rounded-full"
            asChild
          >
            <a href="https://pay.kiwify.com.br/G7NBrKH" target="_blank" rel="noopener noreferrer">
              Quero assinar
            </a>
          </Button>
        </div>
      </div>
    </motion.section>
  )
}
