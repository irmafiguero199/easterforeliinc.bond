import { Link } from 'react-router-dom'
import { ShieldCheck, ArrowRight } from 'lucide-react'
import { ORG } from '../data/org.js'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <img src="/images/gallery/gallery-2.jpg" alt="Volunteers with Easter baskets" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-tealDark/95 via-brand-tealDark/80 to-brand-tealDark/40"></div>
      <div className="relative mx-auto max-w-7xl px-4 py-24 md:py-32">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-amber px-4 py-1.5 text-sm font-bold text-brand-ink">
            <ShieldCheck size={16} /> Registered 501(c)(3) Nonprofit · EIN {ORG.ein}
          </span>
          <h1 className="mt-6 font-serif text-4xl font-bold leading-tight text-white md:text-6xl">
            Bringing Easter joy to children battling cancer
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-brand-tealLight">{ORG.missionLong}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link to="/programs" className="inline-flex items-center gap-2 rounded-lg border-2 border-white/60 px-5 py-3 font-semibold text-white transition hover:bg-white/10">
              Our Programs <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
