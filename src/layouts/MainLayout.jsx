import { Outlet } from 'react-router-dom'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import ScrollToTop from '../components/ScrollToTop.jsx'
import OrganizationSchema from '../seo/OrganizationSchema.jsx'

export default function MainLayout() {
  return (
    <>
      <OrganizationSchema />
      <ScrollToTop />
      <Header />
      <main><Outlet /></main>
      <Footer />
    </>
  )
}
