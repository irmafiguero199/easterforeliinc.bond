# Easter For Eli Inc — Website

Complete website for **Easter For Eli Inc** (EIN 82-4802188), a registered 501(c)(3) nonprofit
delivering Easter baskets, cinch bags and gift cards to children battling cancer in hospitals
across 21+ states, in memory of Elias Garrett.

- Domain: https://www.easterforeliinc.bond
- Email: admin@easterforeliinc.bond
- Address: 2522 Dick Lane, Hollidaysburg, PA 16648
- IRS 501(c)(3), tax-exempt since March 2019

## Stack
React 18 · Vite · Tailwind CSS · React Router DOM · React Helmet Async · Lucide React

## Run locally
```bash
npm install
npm run dev      # development
npm run build    # production build → dist/
```

## Deploy
Upload the contents of `dist/` (after `npm run build`) to your hosting for
`www.easterforeliinc.bond`. The site includes `robots.txt`, `sitemap.xml`,
`manifest.webmanifest`, `404.html` and Schema.org NGO JSON-LD with taxID.

## Before submitting to Google for Nonprofits
1. Add your Google Search Console verification meta tag in `index.html`.
2. Publish the site at the exact domain used in the application.
3. Replace gallery photos with your own event photos when available (keep filenames or update `src/data/org.js`).
4. Optionally add board member names/photos in `src/pages/Team.jsx`.
5. Connect the donation form to a real processor (e.g., PayPal Giving Fund, Stripe, Givebutter) when ready.

## Structure
See `src/data/org.js` — every organization fact (EIN, address, phone, email, stats,
programs, timeline, news) is centralized there for easy updates.
