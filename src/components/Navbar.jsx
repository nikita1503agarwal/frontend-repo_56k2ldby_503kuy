import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Leistungen', href: '#leistungen' },
    { label: 'Ablauf', href: '#ablauf' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Kontakt', href: '#kontakt' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-slate-900/60 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 ring-1 ring-white/20 shadow-lg" />
          <span className="text-white font-semibold tracking-tight">PixelForge</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm text-blue-100 hover:text-white transition-colors">
              {item.label}
            </a>
          ))}
          <a href="#kontakt" className="inline-flex items-center rounded-lg bg-white text-slate-900 text-sm font-semibold px-4 py-2 hover:bg-blue-50 transition-colors">
            Projekt anfragen
          </a>
        </nav>

        <button className="md:hidden p-2 text-white" onClick={() => setOpen((v) => !v)} aria-label="Menü">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-slate-900/80">
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="block text-blue-100 hover:text-white">
                {item.label}
              </a>
            ))}
            <a href="#kontakt" className="block mt-2 w-full text-center rounded-lg bg-white text-slate-900 text-sm font-semibold px-4 py-2">
              Projekt anfragen
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
