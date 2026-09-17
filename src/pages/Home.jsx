import { Link } from 'react-router-dom'
import { ArrowRight, Egg, Gift, Users, HandHeart } from 'lucide-react'
import PageMeta from '../components/PageMeta.jsx'
import Hero from '../components/Hero.jsx'
import SectionHeader from '../components/SectionHeader.jsx'
import Newsletter from '../components/Newsletter.jsx'
import { ORG, PROGRAMS } from '../data/org.js'

export default function Home() {
  return (
    <>
      <PageMeta title="Home" description="Easter For Eli Inc (EIN 82-4802188) is a 501(c)(3) nonprofit delivering Easter baskets, cinch bags and gift cards to children battling cancer in hospitals across 21+ states." />
      <Hero />
      <section className="bg-brand-teal py-12">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 text-center md:grid-cols-4">
          {ORG.stats.map((s) => (
            <div key={s.label}>
              <p className="font-serif text-4xl font-bold text-brand-amber">{s.value}</p>
              <p className="mt-1 text-sm text-brand-tealLight">{s.label}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-20">
        <SectionHeader eyebrow="Who We Are" title="A mission born from love, delivered by volunteers"
          lead={`Founded in memory of ${ORG.foundedInMemoryOf} and led by founder and president ${ORG.founder}, ${ORG.name} has brought Easter to hospital rooms every spring since ${ORG.foundedYear}.`} />
        <div className="grid gap-6 md:grid-cols-3">
          <div className="card"><Egg className="text-brand-teal" size={32} /><h3 className="mt-4 text-xl font-bold text-brand-tealDark">10,000+ bags a year</h3><p className="mt-2 text-gray-600">Our annual goal: 10,000 Easter baskets and cinch bags for hospitalized children, assembled by hundreds of volunteers.</p></div>
          <div className="card"><Gift className="text-brand-teal" size={32} /><h3 className="mt-4 text-xl font-bold text-brand-tealDark">$10,000 in gift cards</h3><p className="mt-2 text-gray-600">We support families with gift cards for meals, travel and daily needs while their child receives treatment.</p></div>
          <div className="card"><Users className="text-brand-teal" size={32} /><h3 className="mt-4 text-xl font-bold text-brand-tealDark">21+ states served</h3><p className="mt-2 text-gray-600">From our home in Blair County, Pennsylvania, deliveries reach children’s hospitals nationwide every Easter.</p></div>
        </div>
      </section>
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeader eyebrow="What We Do" title="Our programs" lead="Four programs, one mission: no child spends Easter in the hospital without a reason to smile." />
          <div className="grid gap-6 md:grid-cols-2">
            {PROGRAMS.map((p) => (
              <div key={p.title} className="card">
                <h3 className="text-xl font-bold text-brand-tealDark">{p.title}</h3>
                <p className="mt-3 text-gray-600">{p.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/programs" className="btn-primary">Explore all programs <ArrowRight size={18} /></Link>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-20">
        <div className="card flex flex-col items-center gap-6 !bg-brand-tealLight md:flex-row md:justify-between">
          <div className="flex items-start gap-4">
            <HandHeart size={40} className="shrink-0 text-brand-teal" />
            <div>
              <h3 className="font-serif text-2xl font-bold text-brand-tealDark">Your gift delivers joy — and it’s tax-deductible</h3>
              <p className="mt-2 text-gray-700">{ORG.name} is a registered 501(c)(3) nonprofit (EIN {ORG.ein}). Every dollar goes toward baskets, cinch bags and family gift cards.</p>
            </div>
          </div>
          <Link to="/donate" className="btn-accent shrink-0">Donate Now</Link>
        </div>
      </section>
      <Newsletter />
    </>
  )
}
