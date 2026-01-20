'use client'

import Image from 'next/image'

export default function QuienesSomos() {
  const equipo = [
    {
      nombre: 'Jeysson Salazar',
      cargo: 'Director Técnico',
      empresa: 'Quantico Tecnología',
      genero: 'm', // masculino
    },
    {
      nombre: 'Natali Barragan',
      cargo: 'Coordinadora de Mantenimiento',
      empresa: 'Quantico Tecnología',
      genero: 'f', // femenino
    },
    {
      nombre: 'Juan Carlos Valencia',
      cargo: 'Metrólogo',
      empresa: 'Quantico Tecnología',
      genero: 'm', // masculino
    },
  ]

  return (
    <main className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-500">

      {/* --- HERO --- */}
      <section className="relative py-24 px-6 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-cyan-500/10" />
        <div className="relative max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
            ¿Quiénes Somos?
          </h1>
          <p className="text-slate-300 text-base md:text-xl leading-relaxed">
            Somos una empresa joven orientada a la excelencia técnica y al acompañamiento estratégico
            de nuestros clientes en el sector biomédico.
          </p>
        </div>
      </section>

      {/* --- DESCRIPCIÓN --- */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <p className="text-slate-600 dark:text-slate-400 text-base md:text-lg leading-relaxed mb-6">
          Somos una empresa joven, fundada con el firme propósito de convertirnos en el gran aliado
          de nuestros clientes, proveyendo servicios de calidad basados en el conocimiento y la amplia
          experiencia de nuestro personal.
        </p>

        <p className="text-slate-600 dark:text-slate-400 text-base md:text-lg leading-relaxed">
          Nuestro equipo se encuentra en constante capacitación y actualización, lo que nos permite
          estar a la vanguardia en nuevas tecnologías orientadas al área biomédica, brindando soluciones
          en metrología, tecnovigilancia, habilitaciones, mantenimiento y suministro de equipos biomédicos.
        </p>
      </section>

      {/* --- EQUIPO --- */}
      <section className="py-20 px-6 bg-slate-50 dark:bg-slate-900/40">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-center text-slate-900 dark:text-white mb-16">
            Nuestro Equipo
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {equipo.map((p) => (
              <div
                key={p.nombre}
                className="group bg-white dark:bg-slate-900 rounded-3xl p-8 text-center border border-slate-200 dark:border-slate-800 hover:border-blue-500/40 transition-all shadow-sm"
              >
                {/* Avatar */}
                <div className="mx-auto mb-6 w-28 h-28 relative rounded-full overflow-hidden bg-slate-200 dark:bg-slate-800">
                  <Image
                    src={p.genero === 'f' ? '/avtar2.png' : '/avtar1.png'}
                    alt={p.nombre}
                    fill
                    className="object-cover"
                  />
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                  {p.nombre}
                </h3>

                <p className="text-blue-600 dark:text-blue-400 font-semibold mb-1">
                  {p.cargo}
                </p>

                <p className="text-sm text-slate-500 dark:text-slate-400">
                  {p.empresa}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  )
}
