import { Helmet } from 'react-helmet-async'
import { ORG } from '../data/org.js'

export default function PageMeta({ title, description, path = '' }) {
  const canonical = ORG.domain + '/' + path
  return (
    <Helmet>
      <title>{title} | {ORG.name}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
    </Helmet>
  )
}
