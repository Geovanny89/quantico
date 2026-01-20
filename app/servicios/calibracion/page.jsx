'use client'

import Image from 'next/image'
import Link from 'next/link'
import { CheckSquare, Ruler, Scale, FileCheck, ArrowRight, Globe, ShieldCheck } from 'lucide-react'

export default function ServicioCalibracion() {
  const pilares = [
    {
      title: 'Normativa Internacional',
      desc: 'Procedimientos alineados con estándares ISO e IEC, garantizando validez técnica global.',
      icon: <Globe size={28} />,
    },
    {
      title: 'Responsabilidad Social',
      desc: 'Calibramos pensando en la seguridad del paciente y la integridad del personal médico.',
      icon: <ShieldCheck size={28} />,
    },
    {
      title: 'Certificación Oficial',
      desc: 'Entrega de informes detallados con trazabilidad metrológica completa.',
      icon: <FileCheck size={28} />,
    }
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 overflow-x-hidden transition-colors duration-500">

      {/* ================= HERO ================= */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-slate-900 py-12 group">

        {/* Imagen con zoom suave */}
        <div className="absolute inset-0 transition-transform duration-[3000ms] ease-out md:group-hover:scale-105">
          <Image
    src="/foto3.jpg"
    fill
    className="object-cover"
    alt="Hero"
  />
        </div>

        {/* Gradiente equilibrado */}
        <div className="absolute inset-0 bg-gradient-to-b 
          from-slate-950/30 
          via-slate-950/40 
          to-slate-950/70" 
        />

        {/* Contenido */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[10px] md:text-xs font-black uppercase tracking-[0.2em] mb-6 md:mb-8">
            Metrología Biomédica Certificada
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-8xl font-black text-white mb-6 tracking-tighter leading-[1.1]">
            SERVICIO DE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              CALIBRACIÓN
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-base md:text-xl text-slate-200 font-light leading-relaxed px-2">
            Garantizamos la exactitud de sus mediciones mediante protocolos estandarizados de alta precisión.
          </p>
        </div>
      </section>

      {/* ================= COMPROMISO ================= */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
          
          <div className="relative">
            <div className="absolute -left-4 -top-4 w-24 h-24 bg-cyan-500/10 rounded-full blur-3xl" />
            <h2 className="text-xs font-bold text-cyan-600 dark:text-cyan-400 uppercase tracking-[0.3em] mb-4">
              Nuestro Compromiso
            </h2>
            <h3 className="text-2xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight leading-tight">
              Calidad que genera confianza y seguridad.
            </h3>
            <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 mb-6 leading-relaxed italic border-l-4 border-cyan-500 pl-4 md:pl-6">
              "En nuestra empresa estamos comprometidos con la calidad y la satisfacción de nuestros clientes."
            </p>
            <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
              Procedimientos desarrollados bajo normativas internacionales y nacionales, asegurando diagnósticos precisos.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex items-center gap-2 bg-slate-100 dark:bg-slate-900 px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-800">
                <CheckSquare className="text-cyan-500 flex-shrink-0" size={18} />
                <span className="text-xs font-bold dark:text-slate-200 uppercase">ISO 17025 Ready</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-100 dark:bg-slate-900 px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-800">
                <Scale className="text-cyan-500 flex-shrink-0" size={18} />
                <span className="text-xs font-bold dark:text-slate-200 uppercase">Trazabilidad Metrológica</span>
              </div>
            </div>
          </div>

          {/* Pilares */}
          <div className="grid gap-4 md:gap-6">
            {pilares.map((p, i) => (
              <div
                key={i}
                className="group p-5 md:p-8 rounded-2xl md:rounded-[2rem] bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:border-cyan-500/30 transition-all duration-300 shadow-sm"
              >
                <div className="flex flex-col sm:flex-row items-start gap-4 md:gap-6">
                  <div className="p-3 rounded-xl bg-cyan-50 dark:bg-cyan-500/10 text-cyan-600 group-hover:bg-cyan-500 group-hover:text-white transition-colors flex-shrink-0">
                    {p.icon}
                  </div>
                  <div>
                    <h4 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white mb-2">
                      {p.title}
                    </h4>
                    <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= INFO ================= */}
      <section className="py-12 md:py-20 bg-slate-50 dark:bg-slate-900/30">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
          <Ruler size={40} className="mx-auto text-cyan-500 mb-6 opacity-50" />
          <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-4">
            Metrología de Vanguardia
          </h3>
          <p className="text-sm md:text-base text-slate-500 dark:text-slate-400 leading-relaxed italic px-2">
            Utilizamos patrones de referencia certificados con trazabilidad nacional e internacional, garantizando la mínima incertidumbre.
          </p>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-12 md:py-20 px-4">
        <div className="max-w-6xl mx-auto bg-slate-900 rounded-3xl md:rounded-[3rem] p-8 md:p-12 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-blue-500" />
          <h2 className="text-2xl md:text-5xl font-black text-white mb-6">
            Asegure la precisión de su diagnóstico
          </h2>
          <p className="text-sm md:text-lg text-slate-400 mb-10 max-w-xl mx-auto font-light">
            Solicite una cotización para la calibración periódica de su parque tecnológico.
          </p>
          <Link
            href="/contacto"
            className="inline-flex items-center justify-center gap-3 bg-cyan-500 text-slate-950 px-8 py-4 md:px-10 md:py-5 rounded-full font-black text-base md:text-lg hover:bg-cyan-400 transition-all shadow-lg active:scale-95"
          >
            Solicitar Calibración <ArrowRight size={20} />
          </Link>
        </div>
      </section>

    </div>
  )
}
