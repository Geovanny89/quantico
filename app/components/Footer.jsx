'use client'

import Link from "next/link"
import { Mail, Phone, MapPin, Facebook, Instagram, ArrowRight, Globe } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = {
    facebook: "https://www.facebook.com/quantico.tecnologia.7",
    instagram: "https://www.instagram.com/quantico_tecnologia"
  };

  return (
    <footer className="relative bg-slate-50 dark:bg-slate-950 text-slate-600 dark:text-slate-400 border-t border-slate-200 dark:border-slate-800/50 transition-colors duration-300">
      
      {/* ================= ENCABEZADO DE UBICACIÓN ================= */}
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-blue-600 dark:text-blue-500">
            <Globe size={18} className="animate-pulse" />
            <span className="text-xs font-black uppercase tracking-[0.3em]">Localización</span>
          </div>
          <h2 className="text-2xl font-black text-slate-900 dark:text-white tracking-tighter">
            Nuestra Sede <span className="text-blue-600">Principal</span>
          </h2>
        </div>
        <div className="flex items-center gap-3 text-sm font-medium text-slate-500">
          <MapPin size={16} className="text-blue-600" />
          <span>Calle 16 #7-26, Cúcuta, Colombia</span>
        </div>
      </div>

      {/* ================= SECCIÓN DEL MAPA ================= */}
      <section className="w-full h-[400px] relative border-y border-slate-200 dark:border-slate-800">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.123456789!2d-72.5074!3d7.8891!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwNTMnMjAuOCJOIDcywrAzMCcyNi42Ilc!5e0!3m2!1ses!2sco!4v123456789" 
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="grayscale dark:invert-[0.9] dark:hue-rotate-[180deg] opacity-90 hover:opacity-100 hover:grayscale-0 transition-all duration-700"
        ></iframe>
      </section>

      <div className="max-w-7xl mx-auto px-6 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Marca */}
          <div className="lg:col-span-4 space-y-6">
            <h3 className="text-2xl font-black text-slate-900 dark:text-white tracking-tighter">
              QUANTICO<span className="text-blue-600">.</span>
            </h3>
            <p className="text-sm leading-relaxed max-w-sm text-slate-500 dark:text-slate-400">
              Líderes en ingeniería biomédica y soluciones industriales de alta precisión. 
              Garantizamos la continuidad operativa de su tecnología con estándares internacionales.
            </p>
            <div className="flex gap-3">
              <SocialIcon icon={<Instagram size={18} />} href={socialLinks.instagram} />
              <SocialIcon icon={<Facebook size={18} />} href={socialLinks.facebook} />
            </div>
          </div>

          {/* Plataforma */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-black text-slate-900 dark:text-white uppercase tracking-[0.2em] mb-6">
              Plataforma
            </h4>
            <ul className="space-y-4">
              <FooterLink href="/">Inicio</FooterLink>
              <FooterLink href="/servicios">Servicios</FooterLink>
              <FooterLink href="/quienes-somos">Nosotros</FooterLink>
              <FooterLink href="/privacidad">Privacidad</FooterLink>
              <FooterLink href="/terminos">Términos</FooterLink>
            </ul>
          </div>

          {/* Especialidades */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-black text-slate-900 dark:text-white uppercase tracking-[0.2em] mb-6">
              Especialidades
            </h4>
            <ul className="space-y-4">
              <FooterLink href="/servicios/calibracion">
                Calibración Metrológica
              </FooterLink>
            </ul>
          </div>

          {/* Sede Central */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-black text-slate-900 dark:text-white uppercase tracking-[0.2em] mb-6">
              Sede Central
            </h4>

            <ul className="space-y-4 text-sm">
              <li className="flex gap-3 items-start">
                <MapPin size={18} className="text-blue-600 shrink-0 mt-1" />
                <div className="text-slate-600 dark:text-slate-300">
                  <span className="font-bold block text-slate-900 dark:text-white mb-0.5 tracking-wide uppercase">
                    QUANTICOTEC
                  </span>
                  Calle 16 #7-26, Cúcuta <br />
                  <span className="text-slate-400 italic text-[11px]">
                    Norte de Santander · Cobertura Nacional
                  </span>
                </div>
              </li>

              <li className="flex gap-3 items-center">
                <Phone size={18} className="text-blue-600 shrink-0" />
                <span className="font-semibold text-slate-700 dark:text-slate-200">
                  +57 316 7950366
                </span>
              </li>

              <li className="flex gap-3 items-center">
                <Mail size={18} className="text-blue-600 shrink-0" />
                <span className="font-semibold text-slate-700 dark:text-slate-200 text-xs md:text-sm">
                  jeyssonsg@quanticotec.com
                </span>
              </li>
            </ul>

            <div className="mt-8">
              <Link
                href="/contacto"
                className="inline-flex items-center gap-2 text-xs font-bold text-blue-600 hover:text-blue-700 dark:text-blue-500 dark:hover:text-blue-400 group transition-all"
              >
                SOLICITAR COTIZACIÓN
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

        {/* Línea inferior */}
        <div className="border-t border-slate-200 dark:border-slate-900 mt-20 pt-8 flex flex-col items-center justify-center text-center gap-2 text-[11px] md:text-xs text-slate-400 dark:text-slate-600 font-medium uppercase tracking-[0.1em]">
          <p>© {currentYear} Quantico Tecnología. Todos los derechos reservados.</p>
          <p className="normal-case font-normal opacity-70">
            Ingeniería de precisión para el sector salud.
          </p>
        </div>
      </div>
    </footer>
  )
}

function FooterLink({ href, children }) {
  return (
    <li>
      <Link
        href={href}
        className="text-sm text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-500 transition-all duration-300 flex items-center group"
      >
        <span className="w-0 group-hover:w-2 h-[1.5px] bg-blue-600 dark:bg-blue-500 mr-0 group-hover:mr-2 transition-all"></span>
        {children}
      </Link>
    </li>
  )
}

function SocialIcon({ icon, href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 flex items-center justify-center rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-400 hover:text-blue-600 hover:border-blue-600 dark:hover:text-white dark:hover:bg-blue-600 transition-all duration-300 shadow-sm"
    >
      {icon}
    </a>
  )
}