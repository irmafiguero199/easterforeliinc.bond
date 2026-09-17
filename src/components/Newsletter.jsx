import { useState } from 'react'
import { ORG } from '../data/org.js'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const subscribe = (e) => {
    e.preventDefault()
    window.location.href = `mailto:${ORG.email}?subject=Newsletter Signup&body=Please add ${email} to the Easter For Eli newsletter.`
  }
  return (
    <section className="bg-brand-tealDark py-14">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-4 text-center">
        <div>
          <h2 className="font-serif text-3xl font-bold text-white">Stay in the loop</h2>
          <p className="mt-2 text-brand-tealLight">Get build-event dates, delivery totals and ways to help — straight to your inbox each season.</p>
        </div>
        <form onSubmit={subscribe} className="flex w-full max-w-md flex-col gap-3 sm:flex-row">
          <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com" className="w-full rounded-lg px-4 py-3 text-brand-ink focus:outline-none focus:ring-2 focus:ring-brand-amber" />
          <button type="submit" className="btn-accent whitespace-nowrap">Subscribe</button>
        </form>
        <p className="text-xs text-brand-tealLight">Easter For Eli Inc · EIN {ORG.ein} · {ORG.city}, {ORG.state}</p>
      </div>
    </section>
  )
}
