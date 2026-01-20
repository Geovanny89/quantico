import './globals.css'
import Navbar from './components/Nabvar'
import Footer from './components/Footer'
import { ThemeProvider } from './components/ThemeProvider'
import WhatsAppButton from './components/WhatsAppButton'

export const metadata = {
  title: 'Quantico Tecnología | Servicios Biomédicos',
  description: 'Mantenimiento, calibración y venta de equipos biomédicos de alta precisión.',
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({ children }) {
  return (
    <html lang="es" suppressHydrationWarning className="scroll-smooth">
      <body
        className="
          min-h-screen
          bg-white text-slate-900
          dark:bg-slate-950 dark:text-slate-100
          antialiased
          selection:bg-blue-500/30
          transition-colors duration-300
        "
      >
        <ThemeProvider>
          {/* Navbar */}
          <Navbar />

          <div className="flex flex-col min-h-screen">
            <main className="flex-grow">
              {children}
            </main>
            <WhatsAppButton />
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
