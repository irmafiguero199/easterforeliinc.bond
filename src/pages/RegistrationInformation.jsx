import PageMeta from '../components/PageMeta.jsx'
import { ORG } from '../data/org.js'
import { ShieldCheck, FileText, MapPin, Building2 } from 'lucide-react'

export default function RegistrationInformation() {
  return (
    <>
      <PageMeta title="Registration Information" description={`Official registration details for ${ORG.name}: EIN ${ORG.ein}, IRS 501(c)(3) tax-exempt since ${ORG.taxExemptSince}, ${ORG.street}, ${ORG.city}, ${ORG.state} ${ORG.zip}.`} path="registration" />
      <section className="bg-brand-tealLight py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h1 className="font-serif text-4xl font-bold text-brand-tealDark md:text-5xl">Registration Information</h1>
          <p className="mt-4 text-lg text-gray-700">Official legal and tax registration details for {ORG.name}.</p>
        </div>
      </section>
      <section className="mx-auto max-w-5xl space-y-8 px-4 py-16">
        <div className="card !border-l-8 !border-l-brand-amber">
          <div className="flex items-center gap-3"><ShieldCheck size={30} className="text-brand-teal" /><h2 className="font-serif text-2xl font-bold text-brand-tealDark">Federal Tax Information</h2></div>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-xl bg-brand-tealLight p-5"><p className="text-sm text-gray-500">Employer Identification Number (EIN)</p><p className="font-serif text-3xl font-bold text-brand-tealDark">{ORG.ein}</p></div>
            <div className="rounded-xl bg-brand-tealLight p-5"><p className="text-sm text-gray-500">IRS status</p><p className="text-lg font-bold text-brand-tealDark">501(c)(3) Public Charity — tax-exempt since {ORG.taxExemptSince}</p></div>
          </div>
          <ul className="mt-5 space-y-2 text-gray-700">
            <li><strong>Legal name:</strong> {ORG.legalName}</li>
            <li><strong>IRS ruling:</strong> Tax-exempt under IRC Section 501(c)(3); determination letter dated March 2019. A copy of the determination letter is available upon request.</li>
            <li><strong>Deductibility:</strong> All donations to {ORG.name} are tax-deductible to the extent permitted by law. No goods or services are provided in exchange for donations unless stated.</li>
            <li><strong>Public filings:</strong> Annual Form 990 filings are publicly available via the <a href="https://projects.propublica.org/nonprofits/organizations/824802188" target="_blank" rel="noreferrer" className="font-semibold text-brand-teal underline">ProPublica Nonprofit Explorer</a> and the IRS Tax Exempt Organization Search.</li>
          </ul>
        </div>
        <div className="card">
          <div className="flex items-center gap-3"><Building2 size={30} className="text-brand-teal" /><h2 className="font-serif text-2xl font-bold text-brand-tealDark">State Registration</h2></div>
          <ul className="mt-5 space-y-2 text-gray-700">
            <li><strong>State of incorporation:</strong> {ORG.incorporatedState}</li>
            <li><strong>County:</strong> {ORG.county}</li>
            <li><strong>Registered / principal address:</strong> {ORG.street}, {ORG.city}, {ORG.state} {ORG.zip}, {ORG.country}</li>
            <li><strong>Year first deliveries made:</strong> {ORG.foundedYear}</li>
            <li><strong>Registration documents:</strong> Articles of incorporation and annual registration statements are on file with the Commonwealth of Pennsylvania and available upon request.</li>
          </ul>
        </div>
        <div className="card">
          <div className="flex items-center gap-3"><FileText size={30} className="text-brand-teal" /><h2 className="font-serif text-2xl font-bold text-brand-tealDark">Governance & Annual Reports</h2></div>
          <ul className="mt-5 space-y-2 text-gray-700">
            <li><strong>President & Founder:</strong> {ORG.founder}</li>
            <li><strong>Board of Directors:</strong> All-volunteer board; quarterly meetings held at the registered address in {ORG.city}, {ORG.state}.</li>
            <li><strong>Financial reporting:</strong> The organization files IRS Form 990 annually. Filings for EIN {ORG.ein} can be viewed on <a href="https://projects.propublica.org/nonprofits/organizations/824802188" target="_blank" rel="noreferrer" className="font-semibold text-brand-teal underline">ProPublica Nonprofit Explorer</a>.</li>
            <li><strong>Records requests:</strong> For copies of the IRS determination letter, articles of incorporation, or annual reports, email <a href={`mailto:${ORG.email}`} className="font-semibold text-brand-teal underline">{ORG.email}</a> or call <a href={`tel:${ORG.phoneHref}`} className="font-semibold text-brand-teal underline">{ORG.phone}</a>.</li>
          </ul>
        </div>
        <div className="flex items-start gap-3 rounded-2xl bg-brand-tealDark p-6 text-white">
          <MapPin size={28} className="shrink-0 text-brand-amber" />
          <p className="text-sm leading-relaxed text-brand-tealLight"><strong className="text-white">Registered address:</strong> {ORG.name} · {ORG.street}, {ORG.city}, {ORG.state} {ORG.zip}, {ORG.country} · EIN {ORG.ein} · {ORG.email} · {ORG.phone}</p>
        </div>
      </section>
    </>
  )
}
