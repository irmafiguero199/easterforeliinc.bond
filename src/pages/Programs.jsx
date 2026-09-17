import PageMeta from '../components/PageMeta.jsx'
import SectionHeader from '../components/SectionHeader.jsx'
import { PROGRAMS, ORG } from '../data/org.js'
import { Link } from 'react-router-dom'

export default function Programs() {
  return (
    <>
      <PageMeta title="Programs" description="Hospital basket and cinch bag deliveries, family gift cards, volunteer build events and partnerships — the programs of Easter For Eli Inc (EIN 82-4802188)." path="programs" />
      <section className="bg-brand-tealLight py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h1 className="font-serif text-4xl font-bold text-brand-tealDark md:text-5xl">Our Programs</h1>
          <p className="mt-4 text-lg text-gray-700">Four programs delivering comfort to hospitalized children and their families every Easter season.</p>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-6 md:grid-cols-2">
          {PROGRAMS.map((p, i) => (
            <div key={p.title} className="card">
              <span className="text-sm font-bold uppercase tracking-widest text-brand-amberDark">Program {String(i + 1).padStart(2, '0')}</span>
              <h2 className="mt-2 text-2xl font-bold text-brand-tealDark">{p.title}</h2>
              <p className="mt-3 leading-relaxed text-gray-600">{p.description}</p>
              <div className="mt-4 rounded-lg bg-brand-tealLight p-4">
                <p className="text-sm"><span className="font-bold text-brand-tealDark">Who it serves: </span>{p.eligibility}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeader eyebrow="Get Involved" title="Upcoming seasonal activities" lead="Build events run each March and April at locations across Blair County, Pennsylvania. Exact dates are announced each winter on our Facebook page and by email." />
          <div className="grid gap-6 md:grid-cols-3">
            {[
              ['January–February', 'Donation drive season', 'Schools, churches and businesses collect toys, crafts, candy and cash donations for the spring build.'],
              ['March–April', 'Community build events', 'Hundreds of volunteers assemble and label baskets and cinch bags for hospital delivery.'],
              ['Easter week', 'National delivery week', 'Volunteers and partner hospitals coordinate deliveries to children in 21+ states.'],
            ].map(([d, t, x]) => (
              <div key={t} className="card text-center">
                <p className="text-sm font-bold uppercase tracking-widest text-brand-amberDark">{d}</p>
                <h3 className="mt-2 text-xl font-bold text-brand-tealDark">{t}</h3>
                <p className="mt-2 text-sm text-gray-600">{x}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <p className="mb-4 text-gray-600">Questions about volunteering or partnerships? Email <a href={`mailto:${ORG.email}`} className="font-semibold text-brand-teal underline">{ORG.email}</a></p>
            <Link to="/contact" className="btn-primary">Contact Us</Link>
          </div>
        </div>
      </section>
    </>
  )
}
