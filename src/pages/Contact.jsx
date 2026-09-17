import { useState } from 'react'
import PageMeta from '../components/PageMeta.jsx'
import { ORG } from '../data/org.js'
import { Mail, Phone, MapPin, Clock, ShieldCheck } from 'lucide-react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: 'General question', message: '' })
  const submit = (e) => {
    e.preventDefault()
    const body = `Name: ${form.name}\nEmail: ${form.email}\nSubject: ${form.subject}\n\n${form.message}`
    window.location.href = `mailto:${ORG.email}?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(body)}`
  }
  const input = 'w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-brand-teal focus:outline-none focus:ring-2 focus:ring-brand-teal/30'
  return (
    <>
      <PageMeta title="Contact" description={`Contact Easter For Eli Inc, 2522 Dick Lane, Hollidaysburg, PA 16648. EIN ${ORG.ein}. Email ${ORG.email}, phone ${ORG.phone}.`} path="contact" />
      <section className="bg-brand-tealLight py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h1 className="font-serif text-4xl font-bold text-brand-tealDark md:text-5xl">Contact Us</h1>
          <p className="mt-4 text-lg text-gray-700">We would love to hear from you — whether you want to volunteer, partner, donate or request information.</p>
        </div>
      </section>
      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-16 lg:grid-cols-2">
        <div>
          <h2 className="font-serif text-2xl font-bold text-brand-tealDark">Get in touch</h2>
          <ul className="mt-6 space-y-5">
            <li className="flex gap-3"><MapPin className="mt-1 shrink-0 text-brand-teal" size={22} /><div><p className="font-bold text-brand-ink">Registered address</p><p className="text-gray-600">{ORG.street}, {ORG.city}, {ORG.state} {ORG.zip}, {ORG.country}</p></div></li>
            <li className="flex gap-3"><Mail className="mt-1 shrink-0 text-brand-teal" size={22} /><div><p className="font-bold text-brand-ink">Email</p><a href={`mailto:${ORG.email}`} className="text-brand-teal underline">{ORG.email}</a></div></li>
            <li className="flex gap-3"><Phone className="mt-1 shrink-0 text-brand-teal" size={22} /><div><p className="font-bold text-brand-ink">Phone</p><a href={`tel:${ORG.phoneHref}`} className="text-brand-teal underline">{ORG.phone}</a></div></li>
            <li className="flex gap-3"><Clock className="mt-1 shrink-0 text-brand-teal" size={22} /><div><p className="font-bold text-brand-ink">Response hours</p><p className="text-gray-600">{ORG.name} is an all-volunteer organization. Email is the fastest way to reach us; build events are announced seasonally on Facebook.</p></div></li>
          </ul>
          <div className="mt-8 rounded-2xl bg-brand-tealDark p-6 text-white">
            <div className="flex items-center gap-2 font-bold"><ShieldCheck size={20} className="text-brand-amber" /> Nonprofit Information</div>
            <ul className="mt-3 space-y-1 text-sm text-brand-tealLight">
              <li><span className="font-semibold text-white">Legal name:</span> {ORG.name}</li>
              <li><span className="font-semibold text-white">EIN:</span> {ORG.ein}</li>
              <li><span className="font-semibold text-white">Status:</span> IRS 501(c)(3), tax-exempt since {ORG.taxExemptSince}</li>
              <li><span className="font-semibold text-white">Incorporated:</span> {ORG.incorporatedState}</li>
              <li><span className="font-semibold text-white">Registered agent address:</span> {ORG.street}, {ORG.city}, {ORG.state} {ORG.zip}</li>
            </ul>
          </div>
        </div>
        <div className="card">
          <h2 className="font-serif text-2xl font-bold text-brand-tealDark">Send a message</h2>
          <form onSubmit={submit} className="mt-6 space-y-4">
            <input required placeholder="Your name" className={input} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
            <input required type="email" placeholder="Your email" className={input} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
            <select className={input} value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })}>
              <option>General question</option><option>Volunteering</option><option>Donations</option><option>Hospital partnership</option><option>Media inquiry</option>
            </select>
            <textarea required rows={5} placeholder="Your message" className={input} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}></textarea>
            <button type="submit" className="btn-primary w-full justify-center">Send Message</button>
            <p className="text-center text-xs text-gray-500">This opens your email app addressed to {ORG.email}</p>
          </form>
        </div>
      </section>
    </>
  )
}
