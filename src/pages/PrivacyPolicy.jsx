import PageMeta from '../components/PageMeta.jsx'
import { ORG } from '../data/org.js'

export default function PrivacyPolicy() {
  return (
    <>
      <PageMeta title="Privacy Policy" description={`Privacy policy of ${ORG.name}, EIN ${ORG.ein}, ${ORG.street}, ${ORG.city}, ${ORG.state} ${ORG.zip}.`} path="privacy" />
      <section className="bg-brand-tealLight py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h1 className="font-serif text-4xl font-bold text-brand-tealDark md:text-5xl">Privacy Policy</h1>
          <p className="mt-4 text-gray-700">Effective date: January 1, 2026 · {ORG.name} · EIN {ORG.ein}</p>
        </div>
      </section>
      <section className="legal mx-auto max-w-3xl px-4 py-16">
        <h3>1. Introduction</h3>
        <p>{ORG.name} (“we,” “our”) respects your privacy. This policy explains how we collect, use and protect information when you visit {ORG.domain.replace('https://www.', 'www.')} or interact with us. Our registered address is {ORG.street}, {ORG.city}, {ORG.state} {ORG.zip}, {ORG.country}. You may contact us at <a className="text-brand-teal underline" href={`mailto:${ORG.email}`}>{ORG.email}</a> or {ORG.phone}.</p>
        <h3>2. Information we collect</h3>
        <ul>
          <li><strong>Contact details</strong> you provide voluntarily (name, email address, phone number, mailing address) when you contact us, volunteer, pledge a donation or subscribe to updates.</li>
          <li><strong>Donation information</strong> such as pledge amounts and, for check donations, information printed on your check.</li>
          <li><strong>Basic technical data</strong> such as browser type and pages visited, used only to keep the site secure and functional. We do not use advertising trackers.</li>
        </ul>
        <h3>3. How we use information</h3>
        <ul>
          <li>To respond to your messages and coordinate volunteering, partnerships and deliveries.</li>
          <li>To process and acknowledge donations, and to meet IRS record-keeping requirements for EIN {ORG.ein}.</li>
          <li>To send seasonal updates you have requested. You may unsubscribe at any time.</li>
        </ul>
        <h3>4. Sharing</h3>
        <p>We never sell or rent personal information. Information is shared only with service providers who help us operate (for example, email delivery), with partner hospitals solely as needed to arrange deliveries, or when required by law.</p>
        <h3>5. Security</h3>
        <p>We limit access to personal information to board members and volunteers who need it, and we retain records only as long as legal and operational requirements demand.</p>
        <h3>6. Your rights</h3>
        <p>You may request access to, correction of, or deletion of your personal information at any time by emailing <a className="text-brand-teal underline" href={`mailto:${ORG.email}`}>{ORG.email}</a>. We will respond within a reasonable timeframe.</p>
        <h3>7. Changes</h3>
        <p>We may update this policy; the current version will always be posted on this page. {ORG.name} · EIN {ORG.ein} · {ORG.street}, {ORG.city}, {ORG.state} {ORG.zip}.</p>
      </section>
    </>
  )
}
