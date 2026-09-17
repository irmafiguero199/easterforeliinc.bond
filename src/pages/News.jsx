import PageMeta from '../components/PageMeta.jsx'
import { NEWS } from '../data/org.js'
import { Newspaper } from 'lucide-react'

export default function News() {
  return (
    <>
      <PageMeta title="News" description="Latest news from Easter For Eli Inc — delivery milestones, build events and community stories." path="news" />
      <section className="bg-brand-tealLight py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h1 className="font-serif text-4xl font-bold text-brand-tealDark md:text-5xl">News & Updates</h1>
          <p className="mt-4 text-lg text-gray-700">Milestones, media coverage and seasonal announcements.</p>
        </div>
      </section>
      <section className="mx-auto max-w-4xl px-4 py-16">
        <div className="space-y-6">
          {NEWS.map((n) => (
            <article key={n.title} className="card">
              <div className="flex flex-wrap items-center gap-3 text-xs font-bold uppercase tracking-widest text-brand-amberDark">
                <Newspaper size={14} /> <span>{n.category}</span><span className="text-gray-400">·</span><span>{n.date}</span><span className="text-gray-400">·</span><span className="text-brand-teal">{n.source}</span>
              </div>
              <h2 className="mt-3 text-2xl font-bold text-brand-tealDark">{n.title}</h2>
              <p className="mt-2 leading-relaxed text-gray-600">{n.excerpt}</p>
            </article>
          ))}
        </div>
        <p className="mt-10 text-center text-sm text-gray-500">Media inquiries: <a href="mailto:admin@easterforeliinc.bond" className="text-brand-teal underline">admin@easterforeliinc.bond</a></p>
      </section>
    </>
  )
}
