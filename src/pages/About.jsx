import PageMeta from '../components/PageMeta.jsx'
import SectionHeader from '../components/SectionHeader.jsx'
import { ORG, TIMELINE, VALUES } from '../data/org.js'
import { ShieldCheck, MapPin } from 'lucide-react'

export default function About() {
  return (
    <>
      <PageMeta title="About" description="The story of Easter For Eli Inc (EIN 82-4802188), a 501(c)(3) nonprofit founded in memory of Elias Garrett, delivering Easter baskets to children battling cancer since 2015." path="about" />
      <section className="bg-brand-tealLight py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h1 className="font-serif text-4xl font-bold text-brand-tealDark md:text-5xl">About {ORG.name}</h1>
          <p className="mt-4 text-lg text-gray-700">{ORG.missionShort}</p>
        </div>
      </section>
      <section className="mx-auto max-w-4xl px-4 py-16">
        <div className="legal">
          <h3>Our story</h3>
          <p>{ORG.story}</p>
          <h3>Legal & registration information</h3>
          <ul>
            <li><strong>Legal name:</strong> {ORG.name}</li>
            <li><strong>Federal EIN:</strong> {ORG.ein}</li>
            <li><strong>IRS status:</strong> {ORG.irsStatus}, tax-exempt since {ORG.taxExemptSince}</li>
            <li><strong>Incorporated:</strong> {ORG.incorporatedState} ({ORG.county})</li>
            <li><strong>Registered address:</strong> {ORG.street}, {ORG.city}, {ORG.state} {ORG.zip}, {ORG.country}</li>
            <li><strong>Contact:</strong> <a className="text-brand-teal underline" href={`mailto:${ORG.email}`}>{ORG.email}</a> · <a className="text-brand-teal underline" href={`tel:${ORG.phoneHref}`}>{ORG.phone}</a></li>
          </ul>
          <p>Full registration, governance and Form 990 details are available on our <a href="/registration" className="text-brand-teal underline">Registration Information</a> page and on ProPublica Nonprofit Explorer.</p>
        </div>
      </section>
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeader eyebrow="Milestones" title="Our journey" />
          <div className="relative mx-auto max-w-3xl border-l-4 border-brand-amber pl-8">
            {TIMELINE.map((t) => (
              <div key={t.year} className="relative mb-10">
                <span className="absolute -left-[45px] top-1 h-4 w-4 rounded-full border-4 border-brand-amber bg-brand-teal"></span>
                <p className="font-serif text-2xl font-bold text-brand-teal">{t.year}</p>
                <h3 className="mt-1 text-lg font-bold text-brand-tealDark">{t.title}</h3>
                <p className="mt-1 text-gray-600">{t.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-16">
        <SectionHeader eyebrow="What Guides Us" title="Our values" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((v) => (
            <div key={v.title} className="card"><h3 className="text-lg font-bold text-brand-tealDark">{v.title}</h3><p className="mt-2 text-sm text-gray-600">{v.text}</p></div>
          ))}
        </div>
        <div className="mt-12 flex flex-col items-center gap-4 rounded-2xl bg-brand-teal p-8 text-center text-white md:flex-row md:justify-between md:text-left">
          <div className="flex items-center gap-4">
            <ShieldCheck size={40} className="shrink-0 text-brand-amber" />
            <div>
              <p className="font-serif text-xl font-bold">{ORG.name} · EIN {ORG.ein}</p>
              <p className="flex items-center justify-center gap-1 text-sm text-brand-tealLight md:justify-start"><MapPin size={14} /> {ORG.street}, {ORG.city}, {ORG.state} {ORG.zip}</p>
            </div>
          </div>
          <p className="text-sm text-brand-tealLight">Registered 501(c)(3) public charity · All donations tax-deductible</p>
        </div>
      </section>
    </>
  )
}
