import { CalendarCheck, MessagesSquare, Wrench, Send } from 'lucide-react'

const steps = [
  {
    icon: MessagesSquare,
    title: 'Kickoff & Strategie',
    desc: 'Workshop, Zieldefinition und Content-Struktur – die Basis für Ihr Projekt.'
  },
  {
    icon: CalendarCheck,
    title: 'Design & Prototyp',
    desc: 'Wireframes, UI-Design und interaktive Vorschau – schnell greifbar und testbar.'
  },
  {
    icon: Wrench,
    title: 'Entwicklung',
    desc: 'Sauberer Code, CMS/Shop-Setup, Integrationen und QA-Tests.'
  },
  {
    icon: Send,
    title: 'Launch & Betreuung',
    desc: 'Go-Live, Monitoring und kontinuierliche Optimierung & Updates.'
  }
]

export default function Process() {
  return (
    <section id="ablauf" className="relative py-20 bg-slate-950">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Ablauf</h2>
          <p className="mt-3 text-blue-100 max-w-2xl mx-auto">Strukturiert, transparent und effizient – so behalten Sie jederzeit den Überblick.</p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map(({ icon: Icon, title, desc }, idx) => (
            <div key={idx} className="rounded-2xl bg-slate-900/60 ring-1 ring-white/10 p-6">
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
