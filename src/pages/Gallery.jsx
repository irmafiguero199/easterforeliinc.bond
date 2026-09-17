import { useState } from 'react'
import PageMeta from '../components/PageMeta.jsx'
import { GALLERY } from '../data/org.js'

const CATS = ['All', 'Baskets', 'Volunteers', 'Build Events', 'Delivery']

export default function Gallery() {
  const [cat, setCat] = useState('All')
  const items = cat === 'All' ? GALLERY : GALLERY.filter((g) => g.cat === cat)
  return (
    <>
      <PageMeta title="Gallery" description="Photos from Easter For Eli Inc build events and deliveries — Easter baskets and cinch bags for hospitalized children." path="gallery" />
      <section className="bg-brand-tealLight py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h1 className="font-serif text-4xl font-bold text-brand-tealDark md:text-5xl">Gallery</h1>
          <p className="mt-4 text-lg text-gray-700">Build days, baskets and the people who make the deliveries possible.</p>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="mb-10 flex flex-wrap justify-center gap-3">
          {CATS.map((c) => (
            <button key={c} onClick={() => setCat(c)}
              className={`rounded-full px-5 py-2 text-sm font-bold transition ${cat === c ? 'bg-brand-teal text-white' : 'bg-white text-brand-tealDark shadow-sm hover:bg-brand-tealLight'}`}>{c}</button>
          ))}
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((g) => (
            <figure key={g.src} className="overflow-hidden rounded-2xl bg-white shadow-md">
              <img src={g.src} alt={g.caption} className="h-64 w-full object-cover transition hover:scale-105" loading="lazy" />
              <figcaption className="p-4"><span className="text-xs font-bold uppercase tracking-widest text-brand-amberDark">{g.cat}</span><p className="mt-1 text-sm text-gray-600">{g.caption}</p></figcaption>
            </figure>
          ))}
        </div>
      </section>
    </>
  )
}
