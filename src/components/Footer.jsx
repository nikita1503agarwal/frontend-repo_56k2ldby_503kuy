export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-blue-100/80 text-sm">© {new Date().getFullYear()} PixelForge Webdesign. Alle Rechte vorbehalten.</p>
        <div className="text-blue-100/80 text-sm flex items-center gap-6">
          <a href="#portfolio" className="hover:text-white">Portfolio</a>
          <a href="#leistungen" className="hover:text-white">Leistungen</a>
          <a href="#kontakt" className="hover:text-white">Kontakt</a>
        </div>
      </div>
    </footer>
  )
}
