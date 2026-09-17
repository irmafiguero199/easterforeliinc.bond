import { Link } from 'react-router-dom'
import PageMeta from '../components/PageMeta.jsx'
import { ORG } from '../data/org.js'

export default function NotFound() {
  return (
    <>
      <PageMeta title="Page Not Found" description="The page you are looking for does not exist." />
      <section className="mx-auto max-w-2xl px-4 py-24 text-center">
        <img src="/logo.svg" alt="Easter For Eli Inc logo" className="mx-auto h-24 w-24" />
        <h1 className="mt-6 font-serif text-5xl font-bold text-brand-tealDark">404</h1>
        <p className="mt-4 text-lg text-gray-600">This page hopped away like the Easter Bunny. Let’s get you back to the baskets.</p>
        <Link to="/" className="btn-primary mt-8">Back to Home</Link>
        <p className="mt-6 text-sm text-gray-500">{ORG.name} · EIN {ORG.ein} · {ORG.street}, {ORG.city}, {ORG.state} {ORG.zip}</p>
      </section>
    </>
  )
}
