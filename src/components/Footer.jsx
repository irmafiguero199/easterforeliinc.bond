import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Facebook, ShieldCheck } from 'lucide-react'
import { ORG, NAV } from '../data/org.js'

export default function Footer() {
  return (
    <footer className="bg-brand-ink text-gray-300">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <img src="/logo.svg" alt="Easter For Eli Inc logo" className="h-12 w-12" />
            <span className="font-serif text-lg font-bold text-white">{ORG.name}</span>
          </div>
          <p className="mt-4 text-sm leading-relaxed">{ORG.missionShort}</p>
          <a href={ORG.facebook} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-2 text-sm text-brand-amber hover:text-white">
            <Facebook size={18} /> facebook.com/easterforeli
          </a>
        </div>
        <div>
          <h3 className="mb-4 font-serif text-lg font-bold text-white">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            {NAV.map((n) => (<li key={n.to}><Link to={n.to} className="hover:text-brand-amber">{n.label}</Link></li>))}
            <li><Link to="/registration" className="hover:text-brand-amber">Registration Information</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="mb-4 font-serif text-lg font-bold text-white">Contact</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-2"><MapPin size={16} className="mt-0.5 shrink-0 text-brand-amber" /><span>{ORG.street}, {ORG.city}, {ORG.state} {ORG.zip}, {ORG.country}</span></li>
            <li><a href={`mailto:${ORG.email}`} className="flex gap-2 hover:text-brand-amber"><Mail size={16} className="mt-0.5 shrink-0 text-brand-amber" />{ORG.email}</a></li>
            <li><a href={`tel:${ORG.phoneHref}`} className="flex gap-2 hover:text-brand-amber"><Phone size={16} className="mt-0.5 shrink-0 text-brand-amber" />{ORG.phone}</a></li>
          </ul>
        </div>
        <div>
          <h3 className="mb-4 font-serif text-lg font-bold text-white">Nonprofit Information</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-2"><ShieldCheck size={16} className="mt-0.5 shrink-0 text-brand-amber" /><span>IRS 501(c)(3) public charity, tax-exempt since {ORG.taxExemptSince}</span></li>
            <li><span className="font-semibold text-white">EIN:</span> {ORG.ein}</li>
            <li><span className="font-semibold text-white">Incorporated:</span> {ORG.incorporatedState}</li>
            <li className="flex gap-2"><MapPin size={16} className="mt-0.5 shrink-0 text-brand-amber" /><span>Registered address: {ORG.street}, {ORG.city}, {ORG.state} {ORG.zip}</span></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-center text-xs md:flex-row md:text-left">
          <p>© 2026 {ORG.name}. All rights reserved. · EIN {ORG.ein} · {ORG.street}, {ORG.city}, {ORG.state} {ORG.zip}</p>
          <p className="flex gap-4">
            <Link to="/privacy" className="hover:text-brand-amber">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-brand-amber">Terms of Service</Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
