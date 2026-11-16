import { Button } from "@/components/ui/button"
import { CHECKOUT_URL } from "@/lib/constants"

export function PainPointsSection() {
  return (
    <section className="bg-white py-14 sm:py-18 md:py-22 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-10 md:mb-12 max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 sm:mb-6 text-balance text-[#12110f]">
            Sua oportunidade de começar é agora!
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-[#5c564b] text-pretty leading-relaxed px-2">
            Aprenda no seu ritmo, de onde estiver, e descubra novas possibilidades de trabalhar pela internet.
          </p>
        </div>

        <div className="flex justify-center px-4">
          <Button
            size="lg"
            className="w-full sm:w-auto text-base sm:text-lg px-8 sm:px-10 py-5 sm:py-7 bg-[#12110f] text-[#e5c365] font-semibold rounded-full active:scale-[0.97] [@media(hover:hover)_and_(pointer:fine)]:hover:bg-[#23201b] transition-[transform,background-color] duration-150 ease-out"
            asChild
          >
            <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer">
              QUERO COMEÇAR AGORA
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
