import PageMeta from '../components/PageMeta.jsx'
import SectionHeader from '../components/SectionHeader.jsx'
import { ORG } from '../data/org.js'
import { Users, CalendarClock } from 'lucide-react'

export default function Team() {
  return (
    <>
      <PageMeta title="Our Team" description="Meet the founder, board and volunteers behind Easter For Eli Inc (EIN 82-4802188)." path="team" />
      <section className="bg-brand-tealLight py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h1 className="font-serif text-4xl font-bold text-brand-tealDark md:text-5xl">Our Team</h1>
          <p className="mt-4 text-lg text-gray-700">{ORG.name} is an all-volunteer organization powered by hundreds of helpers each spring.</p>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-16">
        <SectionHeader eyebrow="Leadership" title="Founder & board" />
        <div className="mx-auto max-w-3xl">
          <div className="card flex flex-col items-start gap-5 sm:flex-row">
            <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-full bg-brand-teal font-serif text-3xl font-bold text-white">MG</div>
            <div>
              <h3 className="text-2xl font-bold text-brand-tealDark">{ORG.founder}</h3>
              <p className="font-semibold text-brand-amberDark">Founder & President, Board of Directors</p>
              <p className="mt-3 leading-relaxed text-gray-600">Martin Garrett founded Easter For Eli in memory of his son, Elias Garrett, who lost his battle with cancer. Under his leadership the organization grew from a family remembrance into a 501(c)(3) nonprofit delivering Easter joy to hospitalized children in more than 21 states. Martin regularly represents the organization in the community, including speaking to the Tyrone Area Chamber of Commerce about the mission and its annual goals.</p>
            </div>
          </div>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            ['Treasurer', 'Manages donations, gift-card disbursements and financial reporting for EIN ' + ORG.ein + '.'],
            ['Secretary', 'Keeps board records, meeting minutes and official correspondence for the organization.'],
            ['Volunteer Coordinators', 'Recruit and organize the hundreds of students, families and groups who build bags each spring.'],
          ].map(([t, d]) => (
            <div key={t} className="card text-center">
              <Users size={30} className="mx-auto text-brand-teal" />
              <h3 className="mt-3 text-xl font-bold text-brand-tealDark">{t}</h3>
              <p className="mt-2 text-sm text-gray-600">{d}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 flex items-start gap-4 rounded-2xl bg-brand-tealLight p-6">
          <CalendarClock size={32} className="shrink-0 text-brand-teal" />
          <p className="text-gray-700">The Board of Directors of {ORG.name} meets quarterly at our registered address in {ORG.city}, {ORG.state}. Board member bios are available on request by emailing <a href={`mailto:${ORG.email}`} className="font-semibold text-brand-teal underline">{ORG.email}</a>.</p>
        </div>
      </section>
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeader eyebrow="The Heart of It All" title="Our volunteers" lead="From senior projects to family traditions, volunteers of every age make the deliveries possible." />
          <div className="grid gap-6 md:grid-cols-2">
            <div className="card">
              <h3 className="text-xl font-bold text-brand-tealDark">Students & youth</h3>
              <p className="mt-2 text-gray-600">High school seniors complete service projects building and organizing baskets, and young volunteers like Madison Reed have personally assembled hundreds of bags for hospitalized children.</p>
            </div>
            <div className="card">
              <h3 className="text-xl font-bold text-brand-tealDark">Community groups</h3>
              <p className="mt-2 text-gray-600">Scout troops, church groups, local businesses and civic organizations across Blair County host donation drives and pack bags side by side each March and April.</p>
            </div>
          </div>
          <p className="mt-8 text-center text-gray-600">Want to join a build event? Email <a href={`mailto:${ORG.email}`} className="font-semibold text-brand-teal underline">{ORG.email}</a> or follow <a href={ORG.facebook} target="_blank" rel="noreferrer" className="font-semibold text-brand-teal underline">our Facebook page</a> for event announcements.</p>
        </div>
      </section>
    </>
  )
}
