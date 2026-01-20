import Link from "next/link"
import { Wrench, Ruler } from "lucide-react"

export default function Servicios() {
  return (
    <section className="py-16 md:py-24 bg-white dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 md:px-6">

       

        {/* Encabezado */}
        <header className="max-w-3xl mb-12">
          <h1 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">
            Servicios
          </h1>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            Nuestra empresa ofrece soluciones de mantenimiento de equipamiento industrial y biomédico,
            permitiendo la conservación de los instrumentos y asegurando su óptimo funcionamiento y rendimiento,
            reduciendo costos, fallas operativas y pérdidas por inoperatividad del equipo.
          </p>
        </header>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2">

          {/* Mantenimiento Preventivo */}
          <div className="group p-6 md:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 hover:border-cyan-500/40 transition">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-500">
                <Wrench size={26} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Mantenimiento Preventivo
              </h3>
            </div>

            <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
              Brindamos un servicio orientado a mejorar la calidad funcional y técnica de los equipos,
              asegurando su óptimo funcionamiento y prolongando su vida útil.
            </p>

            <Link
              href="/servicios/mantenimiento"
              className="inline-flex items-center gap-2 font-semibold text-cyan-600 hover:text-cyan-500 transition"
            >
              Ver más →
            </Link>
          </div>

          {/* Servicio de Calibración */}
          <div className="group p-6 md:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 hover:border-cyan-500/40 transition">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-500">
                <Ruler size={26} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Servicio de Calibración
              </h3>
            </div>

            <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
              Trabajamos con un profundo sentido de responsabilidad social y compromiso,
              garantizando mediciones precisas y confiables para equipos biomédicos.
            </p>

            <Link
              href="/servicios/calibracion"
              className="inline-flex items-center gap-2 font-semibold text-cyan-600 hover:text-cyan-500 transition"
            >
              Ver más →
            </Link>
          </div>

        </div>
      </div>
    </section>
  )
}
