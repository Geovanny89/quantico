'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, ChevronRight, ChevronDown } from 'lucide-react' 
import Logo from '../assets/logo.png'
import ThemeToggle from './ThemeToggle'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : 'unset'
  }, [open])

  const subServices = [
    { name: 'Servicio de Calibración', href: '/servicios/calibracion' },
  ]

  return (
    <>
      {/* ESPACIADOR */}
      <div className="h-[72px] md:h-[88px]" />

      <header
        className={`
          fixed top-0 left-0 w-full z-[100] transition-all duration-300
          ${scrolled 
            ? 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-lg py-2' 
            : 'bg-white dark:bg-slate-900 py-4'}
          border-b border-slate-200 dark:border-slate-800
        `}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6">
          
          {/* LOGO */}
          <Link href="/" className="transition-transform hover:scale-105 active:scale-95">
            <Image
              src={Logo}
              alt="Quantico Tecnología"
              width={120}
              height={40}
              className="object-contain dark:brightness-110"
              priority
            />
          </Link>

          {/* BOTÓN MOBILE */}
          <button
            className="md:hidden p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200"
            onClick={() => setOpen(true)}
          >
            <Menu size={24} />
          </button>

          {/* OVERLAY */}
          <div
            className={`fixed inset-0 bg-slate-950/60 backdrop-blur-sm z-[110] md:hidden transition-all
              ${open ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
            onClick={() => setOpen(false)}
          />

          {/* PANEL MOBILE */}
          <aside
            className={`fixed top-0 right-0 h-[100dvh] w-[280px] bg-white dark:bg-slate-900 z-[120]
              shadow-2xl transition-transform duration-500 md:hidden flex flex-col
              ${open ? 'translate-x-0' : 'translate-x-full'}`}
          >
            <div className="flex items-center justify-between p-6 border-b border-slate-100 dark:border-slate-800">
              <ThemeToggle />
              <button onClick={() => setOpen(false)} className="p-2 rounded-full bg-slate-100 dark:bg-slate-800">
                <X size={20} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4">
              <ul className="space-y-1">
                <MobileLink href="/" onClick={() => setOpen(false)}>Inicio</MobileLink>

                <MobileLink href="/quienes-somos" onClick={() => setOpen(false)}>
                  Quiénes Somos
                </MobileLink>

                <li>
                  <button
                    onClick={() => setServicesOpen(!servicesOpen)}
                    className="flex items-center justify-between w-full p-4 rounded-xl font-semibold
                      text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800"
                  >
                    Servicios
                    <ChevronDown
                      size={18}
                      className={`transition-transform ${servicesOpen ? 'rotate-180' : ''}`}
                    />
                  </button>

                  <div className={`overflow-hidden transition-all ${servicesOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <ul className="pl-6 mt-1 space-y-1 border-l-2 border-slate-100 dark:border-slate-800 ml-4">
                      {subServices.map((s) => (
                        <MobileLink
                          key={s.href}
                          href={s.href}
                          onClick={() => setOpen(false)}
                          isSub
                        >
                          {s.name}
                        </MobileLink>
                      ))}
                    </ul>
                  </div>
                </li>

                
              </ul>
            </div>

            <div className="p-6 border-t border-slate-100 dark:border-slate-800">
              <Link
                href="/contacto"
                onClick={() => setOpen(false)}
                className="block w-full text-center bg-blue-600 text-white py-4 rounded-xl font-bold"
              >
                Contactar Ahora
              </Link>
            </div>
          </aside>

          {/* DESKTOP */}
          <ul className="hidden md:flex items-center gap-2">
            <NavLink href="/">Inicio</NavLink>

            <li className="relative group">
              <button className="flex items-center gap-1 px-4 py-2 rounded-lg text-slate-600 dark:text-slate-300">
                Servicios
                <ChevronDown size={16} className="transition-transform group-hover:rotate-180" />
              </button>

              <div className="absolute top-full left-0 w-64 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <ul className="bg-white dark:bg-slate-800 border rounded-xl shadow-xl p-2">
                  {subServices.map((s) => (
                    <li key={s.href}>
                      <Link
                        href={s.href}
                        className="block px-4 py-3 text-sm hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg"
                      >
                        {s.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>

          
            <NavLink href="/quienes-somos">Quiénes Somos</NavLink>

            <li className="ml-4 flex items-center gap-4 border-l pl-4">
              <ThemeToggle />
              <Link href="/contacto" className="rounded-full bg-blue-600 px-6 py-2.5 text-white font-semibold">
                Contacto
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}

/* ---------- SUBCOMPONENTES ---------- */

function MobileLink({ href, children, onClick, isSub = false }) {
  return (
    <li>
      <Link
        href={href}
        onClick={onClick}
        className={`flex items-center justify-between w-full p-4 rounded-xl font-semibold
          ${isSub ? 'text-slate-500 text-sm' : 'text-slate-700 dark:text-slate-200'}
          hover:bg-blue-50 dark:hover:bg-blue-900/20`}
      >
        {children}
        {!isSub && <ChevronRight size={18} className="text-slate-400" />}
      </Link>
    </li>
  )
}

function NavLink({ href, children }) {
  return (
    <li>
      <Link
        href={href}
        className="px-4 py-2 rounded-lg text-slate-600 dark:text-slate-300
          hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all"
      >
        {children}
      </Link>
    </li>
  )
}
