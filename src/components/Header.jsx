import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, Mail, Phone, MapPin, ShieldCheck } from 'lucide-react'
import { ORG, NAV } from '../data/org.js'

export default function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 shadow-md">
      <div className="bg-brand-tealDark text-brand-tealLight">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-6 gap-y-1 px-4 py-1.5 text-xs md:justify-between">
          <span className="inline-flex items-center gap-1.5"><ShieldCheck size={14} className="text-brand-amber" /> Registered 501(c)(3) Nonprofit · EIN {ORG.ein}</span>
          <span className="hidden items-center gap-1.5 md:inline-flex"><MapPin size={14} className="text-brand-amber" /> {ORG.street}, {ORG.city}, {ORG.state} {ORG.zip}</span>
          <span className="flex items-center gap-4">
            <a href={`mailto:${ORG.email}`} className="inline-flex items-center gap-1.5 hover:text-white"><Mail size={14} /> {ORG.email}</a>
            <a href={`tel:${ORG.phoneHref}`} className="inline-flex items-center gap-1.5 hover:text-white"><Phone size={14} /> {ORG.phone}</a>
          </span>
        </div>
      </div>
      <nav className="bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
          <Link to="/" className="flex items-center gap-3">
            <img src="/logo.svg" alt="Easter For Eli Inc logo" className="h-12 w-12" />
            <span>
              <span className="block font-serif text-xl font-bold leading-tight text-brand-tealDark">Easter For Eli Inc</span>
              <span className="block text-xs text-gray-500">In memory of Elias Garrett · Est. {ORG.foundedYear}</span>
            </span>
          </Link>
          <div className="hidden items-center gap-1 lg:flex">
            {NAV.map((n) => (
              <NavLink key={n.to} to={n.to} end={n.to === '/'}
                className={({ isActive }) => `rounded-lg px-3 py-2 text-sm font-semibold transition ${isActive ? 'bg-brand-teal text-white' : 'text-brand-ink hover:bg-brand-tealLight'}`}>
                {n.label}
              </NavLink>
            ))}
          </div>
          <button className="lg:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X size={28} className="text-brand-teal" /> : <Menu size={28} className="text-brand-teal" />}
          </button>
        </div>
        {open && (
          <div className="border-t border-gray-100 bg-white px-4 pb-4 lg:hidden">
            {NAV.map((n) => (
              <NavLink key={n.to} to={n.to} end={n.to === '/'} onClick={() => setOpen(false)}
                className={({ isActive }) => `block rounded-lg px-3 py-2.5 text-sm font-semibold ${isActive ? 'bg-brand-teal text-white' : 'text-brand-ink hover:bg-brand-tealLight'}`}>
                {n.label}
              </NavLink>
            ))}
          </div>
        )}
      </nav>
    </header>
  )
}
