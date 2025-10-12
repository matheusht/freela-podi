export function DeviceCompatibilitySection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <div className="mb-12">
            <div className="w-16 h-1 bg-black mx-auto mb-8"></div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
              Transforme sua vida pelo celular, desktop ou tablet
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Não importa se você está em trânsito, no conforto da sua casa ou no escritório durante uma pausa –<br />
              você tem a flexibilidade de aprender e crescer quando e onde quiser. A AURA se adapta à sua rotina,<br />
              não o contrário.
            </p>
          </div>

          {/* Devices */}
          <div className="mb-8">
            <p className="text-purple-600 font-medium mb-4 uppercase tracking-wide">
              DISPOSITIVOS
            </p>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Mobile • Desktop • Tablet
            </h3>
            <p className="text-gray-600">
              Acesse de qualquer lugar, a qualquer momento.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}