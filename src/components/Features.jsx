import { Code2, Palette, Gauge, Lock, Rocket, ShoppingCart } from 'lucide-react'

const features = [
  {
    icon: Palette,
    title: 'Individuelles Design',
    desc: 'Keine Templates – jedes Projekt entsteht von Grund auf passend zur Marke.'
  },
  {
    icon: Gauge,
    title: 'Performance',
    desc: 'Technische Basis für schnelle Ladezeiten, sauberen Code und bessere Rankings.'
  },
  {
    icon: Lock,
    title: 'Sicherheit',
    desc: 'Aktuelle Best Practices, saubere Deployments und fortlaufende Updates.'
  },
  {
    icon: ShoppingCart,
    title: 'E-Commerce',
    desc: 'Moderne Shop-Lösungen mit nahtloser User Experience und Skalierbarkeit.'
  },
  {
    icon: Code2,
    title: 'Integrationen',
    desc: 'Buchungssysteme, Chatbots, Newsletter, Analytics und mehr.'
  },
  {
    icon: Rocket,
    title: 'Wachstum',
    desc: 'SEO, Content-Strategie und datengetriebene Optimierung für mehr Leads.'
  }
]

export default function Features() {
  return (
    <section id="leistungen" className="relative py-20 bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(600px_200px_at_10%_0%,rgba(56,189,248,0.08),transparent),radial-gradient(600px_200px_at_90%_0%,rgba(59,130,246,0.08),transparent)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Leistungen</h2>
          <p className="mt-3 text-blue-100 max-w-2xl mx-auto">Alles für einen starken Online-Auftritt – flexible Module, die zu Ihren Zielen passen.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl bg-slate-900/60 ring-1 ring-white/10 p-6 hover:ring-blue-400/40 transition-all">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-white shadow-lg">
                <Icon size={24} />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-white">{title}</h3>
              <p className="mt-2 text-blue-100/90">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
