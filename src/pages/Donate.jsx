import { useState } from 'react'
import PageMeta from '../components/PageMeta.jsx'
import { ORG } from '../data/org.js'
import { ShieldCheck, Check, Landmark, Repeat, Gift } from 'lucide-react'

const AMOUNTS = [25, 50, 100, 250, 500]

export default function Donate() {
  const [amount, setAmount] = useState(50)
  const [custom, setCustom] = useState('')
  const finalAmount = custom ? Number(custom) : amount
  const pledge = (e) => {
    e.preventDefault()
    const body = `I would like to make a donation of $${finalAmount} to ${ORG.name}.\nName: \nAddress: \nPlease send me instructions to complete my donation.`
    window.location.href = `mailto:${ORG.email}?subject=Donation Pledge $${finalAmount}&body=${encodeURIComponent(body)}`
  }
  return (
    <>
      <PageMeta title="Donate" description={`Donate to Easter For Eli Inc, a 501(c)(3) nonprofit, EIN ${ORG.ein}. Your gift delivers Easter baskets and gift cards to children battling cancer.`} path="donate" />
      <section className="bg-brand-tealLight py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h1 className="font-serif text-4xl font-bold text-brand-tealDark md:text-5xl">Donate</h1>
          <p className="mt-4 text-lg text-gray-700">Your gift puts a basket in a hospital room and a gift card in a parent’s hand.</p>
          <p className="mt-3 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-brand-tealDark shadow">
            <ShieldCheck size={16} className="text-brand-teal" /> 501(c)(3) Nonprofit · EIN {ORG.ein} · Tax-deductible
          </p>
        </div>
      </section>
      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-16 lg:grid-cols-2">
        <div className="card">
          <h2 className="font-serif text-2xl font-bold text-brand-tealDark">Make a donation pledge</h2>
          <form onSubmit={pledge} className="mt-6 space-y-5">
            <div className="grid grid-cols-3 gap-3">
              {AMOUNTS.map((a) => (
                <button type="button" key={a} onClick={() => { setAmount(a); setCustom('') }}
                  className={`rounded-lg border-2 py-3 font-bold transition ${!custom && amount === a ? 'border-brand-teal bg-brand-teal text-white' : 'border-brand-teal/30 text-brand-tealDark hover:border-brand-teal'}`}>
                  ${a}
                </button>
              ))}
            </div>
            <input type="number" min="1" placeholder="Custom amount ($)" className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-brand-teal focus:outline-none"
              value={custom} onChange={(e) => setCustom(e.target.value)} />
            <button type="submit" className="btn-accent w-full justify-center"><Check size={18} /> Pledge ${finalAmount || 0}</button>
            <p className="text-xs text-gray-500">Submitting opens your email app with a pledge addressed to {ORG.email}. Our team will reply with secure completion instructions. {ORG.name} (EIN {ORG.ein}) — all donations are tax-deductible as allowed by law.</p>
          </form>
        </div>
        <div className="space-y-5">
          <div className="card"><Landmark className="text-brand-teal" size={28} /><h3 className="mt-3 text-xl font-bold text-brand-tealDark">Give by check</h3><p className="mt-2 text-gray-600">Mail checks payable to <strong>Easter For Eli Inc</strong> to:<br />{ORG.street}<br />{ORG.city}, {ORG.state} {ORG.zip}</p></div>
          <div className="card"><Repeat className="text-brand-teal" size={28} /><h3 className="mt-3 text-xl font-bold text-brand-tealDark">Employer matching</h3><p className="mt-2 text-gray-600">Ask your employer to match your gift — search {ORG.name} (EIN {ORG.ein}) in your company’s matching-gifts portal.</p></div>
          <div className="card"><Gift className="text-brand-teal" size={28} /><h3 className="mt-3 text-xl font-bold text-brand-tealDark">In-kind gifts</h3><p className="mt-2 text-gray-600">We welcome toys, crafts, coloring books and individually wrapped treats for our spring builds. Email <a href={`mailto:${ORG.email}`} className="text-brand-teal underline">{ORG.email}</a> to arrange drop-off.</p></div>
        </div>
      </section>
      <section className="bg-brand-tealDark py-12">
        <div className="mx-auto max-w-4xl px-4 text-center text-white">
          <p className="font-serif text-2xl font-bold">Where your money goes</p>
          <p className="mt-3 text-brand-tealLight">$25 fills a cinch bag · $50 sponsors a family gift card · $100 delivers joy to a hospital wing · $500 supports an entire build event. {ORG.name}, EIN {ORG.ein}, Blair County, Pennsylvania.</p>
        </div>
      </section>
    </>
  )
}
