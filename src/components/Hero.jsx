import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative pt-28 pb-20 sm:pt-32 sm:pb-28 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950" />
        <div className="absolute inset-0">
          <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/60 to-slate-950/90 pointer-events-none" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white"
            >
              PixelForge Webdesign
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="mt-5 text-lg sm:text-xl text-blue-100 max-w-xl"
            >
              Maßgeschneiderte Websites, blitzschnell, sicher und brandaktuell – gebaut ohne Templates, perfekt auf Marke, Zielgruppe und Ziele abgestimmt.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <a href="#kontakt" className="inline-flex items-center rounded-lg bg-white text-slate-900 font-semibold px-5 py-3 hover:bg-blue-50 transition-colors">
                Projekt anfragen
              </a>
              <a href="#portfolio" className="inline-flex items-center rounded-lg bg-slate-800/60 text-white font-semibold px-5 py-3 hover:bg-slate-700/60 ring-1 ring-white/10 transition-colors">
                Projekte ansehen
              </a>
            </motion.div>
            <div className="mt-10 flex items-center gap-6 text-blue-100/80 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>Transparenter Prozess</span>
              </div>
              <div>SEO & Performance</div>
              <div>Wartung & Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
