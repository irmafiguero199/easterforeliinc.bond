import { ORG } from '../data/org.js'

export default function OrganizationSchema() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'NGO',
    name: ORG.name,
    legalName: ORG.legalName,
    url: ORG.domain,
    logo: ORG.domain + '/images/logo.png',
    description: ORG.missionLong,
    taxID: ORG.ein,
    nonprofitStatus: 'NonprofitType',
    email: ORG.email,
    telephone: ORG.phone,
    foundingDate: ORG.foundedYear,
    sameAs: [ORG.facebook],
    address: {
      '@type': 'PostalAddress',
      streetAddress: ORG.street,
      addressLocality: ORG.city,
      addressRegion: ORG.state,
      postalCode: ORG.zip,
      addressCountry: 'US',
    },
    areaServed: 'United States',
    knowsAbout: ['Pediatric cancer support', 'Easter baskets', 'Hospital donations', 'Family gift cards'],
  }
  return <script type="application/ld+json">{JSON.stringify(data)}</script>
}
