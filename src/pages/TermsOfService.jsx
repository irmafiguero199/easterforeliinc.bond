import PageMeta from '../components/PageMeta.jsx'
import { ORG } from '../data/org.js'

export default function TermsOfService() {
  return (
    <>
      <PageMeta title="Terms of Service" description={`Terms of service for ${ORG.name}, EIN ${ORG.ein}, ${ORG.street}, ${ORG.city}, ${ORG.state} ${ORG.zip}.`} path="terms" />
      <section className="bg-brand-tealLight py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h1 className="font-serif text-4xl font-bold text-brand-tealDark md:text-5xl">Terms of Service</h1>
          <p className="mt-4 text-gray-700">Effective date: January 1, 2026 · {ORG.name} · EIN {ORG.ein}</p>
        </div>
      </section>
      <section className="legal mx-auto max-w-3xl px-4 py-16">
        <h3>1. Agreement</h3>
        <p>By using {ORG.domain.replace('https://www.', 'www.')} you agree to these terms. If you do not agree, please do not use the site. Questions: <a className="text-brand-teal underline" href={`mailto:${ORG.email}`}>{ORG.email}</a>.</p>
        <h3>2. About our organization</h3>
        <p>{ORG.name} is a nonprofit corporation organized under the laws of the Commonwealth of Pennsylvania and recognized by the IRS as a 501(c)(3) public charity, EIN {ORG.ein}, tax-exempt since {ORG.taxExemptSince}. Our registered address is {ORG.street}, {ORG.city}, {ORG.state} {ORG.zip}, {ORG.country}.</p>
        <h3>3. Use of this website</h3>
        <p>You agree to use this site lawfully and not to interfere with its operation, misrepresent your identity, or submit harmful content through our forms.</p>
        <h3>4. Donations</h3>
        <p>Donation pledges submitted through this site are requests; our team confirms each pledge by email before any gift is processed. {ORG.name} (EIN {ORG.ein}) provides donation acknowledgments for tax purposes, and all donations are tax-deductible to the extent allowed by law. In-kind donations are accepted as described on our Donate page and may be declined if unsuitable for hospitalized children.</p>
        <h3>5. Intellectual property</h3>
        <p>The “Easter For Eli” name, logo and site content are property of {ORG.name}, used in memory of {ORG.foundedInMemoryOf}. You may share our mission and link to this site; commercial use of our name or logo requires written permission.</p>
        <h3>6. No warranties</h3>
        <p>This site is provided “as is.” While we work to keep information accurate and current, we make no warranties of any kind. Event dates and delivery totals are announced seasonally and may change.</p>
        <h3>7. Governing law</h3>
        <p>These terms are governed by the laws of the Commonwealth of Pennsylvania, without regard to conflict-of-law principles. Disputes will be resolved in the courts of {ORG.county}, Pennsylvania.</p>
        <h3>8. Contact</h3>
        <p>{ORG.name} · {ORG.street}, {ORG.city}, {ORG.state} {ORG.zip} · <a className="text-brand-teal underline" href={`mailto:${ORG.email}`}>{ORG.email}</a> · <a className="text-brand-teal underline" href={`tel:${ORG.phoneHref}`}>{ORG.phone}</a> · EIN {ORG.ein}.</p>
      </section>
    </>
  )
}
