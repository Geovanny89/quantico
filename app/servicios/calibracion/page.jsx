'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  CheckSquare,
  Scale,
  FileCheck,
  ArrowRight,
  Globe,
  ShieldCheck,
  X,
} from 'lucide-react'

export default function ServicioCalibracion() {
  const [modal, setModal] = useState(null)

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
    },
  ]

  const equipos = [
  {
    nombre: 'Básculas',
    desc: 'Verificación de peso, repetibilidad y exactitud',
    img: '/bsacu.webp',
  },
  {
    nombre: 'Pesas Bebés',
    desc: 'Verificación de peso, repetibilidad y exactitud',
    img: '/pesa.webp',
  },
  {
    nombre: 'Desfibriladores',
    desc: 'Energía de descarga, sincronía y tiempos',
    img: '/desfri.webp',
  },
  {
    nombre: 'Termómetros',
    desc: 'Temperatura, presión arterial y humedad',
    img: '/termometro.webp',
  },
   {
    nombre: 'Tensiometros',
    desc: 'Temperatura, presión arterial y humedad',
    img: '/tensiome.webp',
  },
   {
    nombre: 'Termohigrómetros',
    desc: 'Temperatura, presión arterial y humedad',
    img: '/termohi.webp',
  },
  {
    nombre: 'Electrocardiógrafos',
    desc: 'Exactitud de señal, tiempo y amplitud',
    img: '/electro.webp',
  },
  {
    nombre: 'Monitores de Signos Vitales',
    desc: 'ECG, SpO₂, presión no invasiva, temperatura',
    img: '/signos.webp',
  },
]


  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 overflow-x-hidden transition-colors duration-500">

      {/* ================= HERO ================= */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-slate-900 py-12 group">
        <div className="absolute inset-0 transition-transform duration-[3000ms] ease-out md:group-hover:scale-105">
          <Image src="/foto3.jpg" fill className="object-cover" alt="Servicio de calibración biomédica" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/30 via-slate-950/40 to-slate-950/70" />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-black uppercase tracking-[0.2em] mb-6">
            Metrología Biomédica Certificada
          </div>
          <h1 className="text-4xl md:text-8xl font-black text-white mb-6 tracking-tighter">
            SERVICIO DE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              CALIBRACIÓN
            </span>
          </h1>
          <p className="max-w-2xl mx-auto text-base md:text-xl text-slate-200 font-light">
            Garantizamos la exactitud de sus mediciones mediante protocolos estandarizados.
          </p>
        </div>
      </section>

      {/* ================= COMPROMISO ================= */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-xs font-bold text-cyan-500 uppercase tracking-[0.3em] mb-4">
              Nuestro Compromiso
            </h2>
            <h3 className="text-2xl md:text-4xl font-bold mb-6">
              Calidad que genera confianza y seguridad
            </h3>

            <p className="italic border-l-4 border-cyan-500 pl-6 text-slate-600 dark:text-slate-400 mb-6">
              “La calibración no es un trámite, es una garantía para la vida.”
            </p>

            <div className="flex gap-3 flex-wrap">
              <button
                onClick={() => setModal('iso')}
                className="flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-slate-900 border rounded-lg text-xs font-bold hover:border-cyan-500 transition"
              >
                <CheckSquare size={16} className="text-cyan-500" /> ISO 17025
              </button>

              <button
                onClick={() => setModal('trazabilidad')}
                className="flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-slate-900 border rounded-lg text-xs font-bold hover:border-cyan-500 transition"
              >
                <Scale size={16} className="text-cyan-500" /> Trazabilidad
              </button>
            </div>
          </div>

          <div className="grid gap-6">
            {pilares.map((p, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white dark:bg-slate-900 border">
                <div className="flex gap-4">
                  <div className="p-3 rounded-xl bg-cyan-100 dark:bg-cyan-500/10 text-cyan-600">
                    {p.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">{p.title}</h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{p.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= EQUIPOS ================= */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900/40">
  <div className="max-w-7xl mx-auto px-4">
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {equipos.map((e, i) => (
        <div
          key={i}
          className="group p-6 rounded-2xl bg-white dark:bg-slate-900 border hover:border-cyan-500/40 transition-all shadow-sm"
        >
          {/* IMAGEN */}
          <div className="flex items-center justify-center h-28 mb-4 rounded-xl
  bg-transparent
  border border-slate-200 dark:border-slate-700
  overflow-hidden"
>
<Image
  src={e.img}
  alt={e.nombre}
  width={72}
  height={72}
  className="
    object-contain
    transition-all duration-300 ease-out
    group-hover:scale-110

    dark:invert
    dark:brightness-110
    dark:contrast-110
  "
/>

</div>



          {/* TEXTO */}
          <h3 className="font-bold text-lg mb-2 text-slate-900 dark:text-white">
            {e.nombre}
          </h3>

          <p className="text-sm text-slate-500 dark:text-slate-400">
            {e.desc}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* ================= CTA ================= */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto bg-slate-900 rounded-3xl p-10 text-center">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
            Asegure la precisión de su diagnóstico
          </h2>
          <Link
            href="/contacto"
            className="inline-flex items-center gap-3 bg-cyan-500 text-slate-950 px-10 py-5 rounded-full font-black hover:bg-cyan-400 transition"
          >
            Solicitar Calibración <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      {/* ================= MODALES ================= */}
      {modal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 backdrop-blur-sm px-4">
          <div className="relative max-w-lg w-full bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-xl">
            <button
              onClick={() => setModal(null)}
              className="absolute top-4 right-4 text-slate-500 hover:text-slate-900 dark:hover:text-white"
            >
              <X size={20} />
            </button>

            {modal === 'iso' && (
              <>
                <h3 className="text-xl font-black mb-4">ISO/IEC 17025</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                  Garantiza la competencia técnica del laboratorio y la validez
                  de los resultados de calibración.
                </p>
                <ul className="text-sm list-disc pl-4 space-y-2 text-slate-600 dark:text-slate-400">
                  <li>Procedimientos documentados y auditables</li>
                  <li>Control de incertidumbre de medición</li>
                  <li>Resultados confiables y reproducibles</li>
                  <li>Aceptación en auditorías y entes regulatorios</li>
                </ul>
              </>
            )}

            {modal === 'trazabilidad' && (
              <>
                <h3 className="text-xl font-black mb-4">Trazabilidad Metrológica</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                  Cadena ininterrumpida de calibraciones que conecta cada medición
                  con patrones nacionales o internacionales.
                </p>
                <ul className="text-sm list-disc pl-4 space-y-2 text-slate-600 dark:text-slate-400">
                  <li>Patrones certificados y vigentes</li>
                  <li>Relación con institutos metrológicos</li>
                  <li>Soporte legal y técnico del resultado</li>
                  <li>Seguridad para el diagnóstico clínico</li>
                </ul>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
