import PageMeta from '../components/PageMeta.jsx'
import SectionHeader from '../components/SectionHeader.jsx'
import { ORG, TESTIMONIALS } from '../data/org.js'
import { Quote } from 'lucide-react'

export default function Impact() {
  return (
    <>
      <PageMeta title="Impact" description="21+ states, 10,000+ baskets and cinch bags each year, $10,000 in family gift cards — the impact of Easter For Eli Inc (EIN 82-4802188)." path="impact" />
      <section className="bg-brand-tealLight py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h1 className="font-serif text-4xl font-bold text-brand-tealDark md:text-5xl">Our Impact</h1>
          <p className="mt-4 text-lg text-gray-700">Every spring, our volunteers turn donations into joy for children spending Easter in hospitals.</p>
        </div>
      </section>
      <section className="bg-brand-teal py-14">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 text-center md:grid-cols-4">
          {ORG.stats.map((s) => (
            <div key={s.label}>
              <p className="font-serif text-4xl font-bold text-brand-amber">{s.value}</p>
              <p className="mt-1 text-sm text-brand-tealLight">{s.label}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-16">
        <SectionHeader eyebrow="Highlights" title="Recent milestones" />
        <div className="grid gap-6 md:grid-cols-3">
          {[
            ['2,500+ baskets in two weeks', 'In the final two weeks before Easter 2024, volunteers delivered more than 2,500 baskets — the biggest finish in the organization’s history (WJAC, March 2024).'],
            ['10th consecutive delivery year', '2024 marked ten straight years of Easter deliveries to hospitalized children, expanding to 21 states nationwide.'],
            ['10,000+ cinch bags annually', 'Now delivering 10,000+ reusable cinch bags each Easter in addition to $10,000+ in gift cards for families.'],
          ].map(([t, d]) => (
            <div key={t} className="card"><h3 className="text-xl font-bold text-brand-tealDark">{t}</h3><p className="mt-3 text-gray-600">{d}</p></div>
          ))}
        </div>
      </section>
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeader eyebrow="Voices" title="What our community says" />
          <div className="grid gap-6 md:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <figure key={t.name} className="card flex flex-col">
                <Quote size={28} className="text-brand-amber" />
                <blockquote className="mt-3 flex-1 leading-relaxed text-gray-700">“{t.quote}”</blockquote>
                <figcaption className="mt-4">
                  <p className="font-bold text-brand-tealDark">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-16">
        <SectionHeader eyebrow="Partners" title="Community & hospital partners" lead="Our work is powered by schools, churches, businesses and children’s hospitals across the country." />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            'Children’s hospitals in 21+ states',
            'Central High School student volunteers',
            'Blair County churches & civic groups',
            'Local stores hosting donation drives',
            'Tyrone Area Chamber of Commerce',
            'Scout troops & youth groups',
            'Families building bags in Elias’ memory',
            'Individual donors nationwide',
          ].map((p) => (
            <div key={p} className="rounded-xl border border-brand-teal/15 bg-white px-4 py-5 text-center text-sm font-semibold text-brand-tealDark shadow-sm">{p}</div>
          ))}
        </div>
      </section>
    </>
  )
}
