'use client'

import { FileText, Scale, Copyright, AlertCircle, RefreshCw, ArrowLeft, CheckCircle2 } from "lucide-react"
import Link from "next/link"

export default function Terminos() {
  const currentYear = new Date().getFullYear();

  return (
    <main className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300">
      {/* Fondo decorativo sutil */}
      <div className="absolute top-0 right-0 w-full h-96 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-50/50 via-transparent to-transparent dark:from-blue-900/10 -z-10" />

      <article className="max-w-4xl mx-auto px-6 py-20">
        <Link 
          href="/" 
          className="inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline mb-8 group"
        >
          <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" />
          Volver al inicio
        </Link>

        <header className="mb-16">
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">
            Términos y <span className="text-blue-600">Condiciones</span>
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-3xl">
            Bienvenido al portal oficial de <strong>Quantico Tecnología</strong>. El uso de este sitio web y la solicitud de nuestros servicios profesionales de ingeniería biomédica están sujetos a las siguientes disposiciones legales.
          </p>
        </header>

        <div className="grid gap-12">
          <TermSection 
            icon={<FileText size={22} />}
            title="1. Uso del Sitio Técnico"
            content="Este portal está diseñado para proporcionar información sobre servicios de metrología, calibración y mantenimiento preventivo/correctivo de equipos biomédicos. El usuario se compromete a utilizar la información aquí contenida de manera lícita y profesional."
          />

          <TermSection 
            icon={<Copyright size={22} />}
            title="2. Propiedad Intelectual"
            content="Todos los logotipos, gráficas de calibración, contenidos técnicos y el software de la plataforma son propiedad exclusiva de Quantico Tecnología. Queda prohibida su reproducción total o parcial sin consentimiento expreso por escrito."
          />

          <TermSection 
            icon={<CheckCircle2 size={22} />}
            title="3. Veracidad de la Información"
            content="El usuario es responsable de la veracidad de los datos técnicos suministrados sobre sus equipos para la elaboración de cotizaciones y certificados. Quantico Tecnología no se hace responsable por errores derivados de información técnica incorrecta entregada por el cliente."
          />

          <TermSection 
            icon={<AlertCircle size={22} />}
            title="4. Limitación de Responsabilidad"
            content="Aunque nos esforzamos por la exactitud técnica, Quantico Tecnología no garantiza que el sitio esté libre de errores temporales. La responsabilidad de la empresa en la prestación de servicios se rige bajo los contratos de servicio firmados independientemente de este portal web."
          />

          <TermSection 
            icon={<RefreshCw size={22} />}
            title="5. Modificaciones"
            content="Nos reservamos el derecho de actualizar estos términos para ajustarlos a nuevas normativas de salud o metrología en Colombia. Se recomienda revisar esta sección periódicamente."
          />
        </div>

        <footer className="mt-20 pt-8 border-t border-slate-200 dark:border-slate-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-slate-50 dark:bg-slate-900/40 p-8 rounded-[2rem]">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-600 rounded-xl text-white">
                <Scale size={24} />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">Marco Legal</p>
                <p className="text-xs text-slate-500">Legislación Colombiana Vigente</p>
              </div>
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400 text-center md:text-right">
              Última actualización: <strong>Enero {currentYear}</strong><br />
              Quantico Tecnología - Ingeniería Biomédica
            </p>
          </div>
        </footer>
      </article>
    </main>
  )
}

function TermSection({ icon, title, content }) {
  return (
    <section className="relative pl-0 md:pl-10">
      <div className="hidden md:flex absolute left-0 top-1 text-blue-600">
        {icon}
      </div>
      <div>
        <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-3">
          <span className="md:hidden text-blue-600">{icon}</span>
          {title}
        </h2>
        <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-base md:text-lg">
          {content}
        </p>
      </div>
    </section>
  )
}