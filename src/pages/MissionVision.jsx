import PageMeta from '../components/PageMeta.jsx'
import SectionHeader from '../components/SectionHeader.jsx'
import { ORG } from '../data/org.js'
import { Target, Eye, CheckCircle2 } from 'lucide-react'

export default function MissionVision() {
  return (
    <>
      <PageMeta title="Mission & Vision" description="Mission, vision and strategic goals of Easter For Eli Inc (EIN 82-4802188) for 2026-2030." path="mission" />
      <section className="bg-brand-tealLight py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h1 className="font-serif text-4xl font-bold text-brand-tealDark md:text-5xl">Mission & Vision</h1>
          <p className="mt-4 text-lg text-gray-700">{ORG.missionShort}</p>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="card !bg-brand-teal text-white">
            <Target size={36} className="text-brand-amber" />
            <h2 className="mt-4 font-serif text-2xl font-bold">Our Mission</h2>
            <p className="mt-3 leading-relaxed text-brand-tealLight">To deliver Easter baskets, cinch bags and gift cards to children battling cancer and their families in hospitals across the United States, ensuring that no child spends the Easter season in a hospital without comfort, color and joy — all in loving memory of Elias Garrett.</p>
          </div>
          <div className="card !bg-white">
            <Eye size={36} className="text-brand-teal" />
            <h2 className="mt-4 font-serif text-2xl font-bold text-brand-tealDark">Our Vision</h2>
            <p className="mt-3 leading-relaxed text-gray-600">A future where every hospitalized child experiences the hope and happiness of Easter, and every family facing pediatric cancer feels the support of a nationwide community standing with them.</p>
          </div>
        </div>
      </section>
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeader eyebrow="2026–2030" title="Strategic goals" lead="Concrete objectives that guide our volunteers, board and partners each season." />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              ['Deliver 10,000 bags annually', 'Reach our annual goal of 10,000 Easter baskets and cinch bags for hospitalized children in 21+ states.'],
              ['Distribute $10,000 in gift cards', 'Grow the Family Gift Card Fund to support at least $10,000 in direct family assistance each year.'],
              ['Deepen hospital partnerships', 'Add new children’s hospitals and pediatric units so deliveries reach more children every spring.'],
              ['Mobilize 1,000+ volunteers', 'Engage students, scout troops, churches and businesses in build events across central Pennsylvania.'],
              ['Operate sustainably', 'Complete the transition from baskets to reusable cinch bags and reduce packaging waste year over year.'],
              ['Strengthen transparency', 'Publish annual reports and maintain current Form 990 filings, keeping EIN ' + ORG.ein + ' information accessible to donors.'],
            ].map(([t, d]) => (
              <div key={t} className="card">
                <CheckCircle2 size={28} className="text-brand-amberDark" />
                <h3 className="mt-3 text-lg font-bold text-brand-tealDark">{t}</h3>
                <p className="mt-2 text-sm text-gray-600">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
