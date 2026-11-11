import { Route, Routes, useLocation } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import SvgDefs from './components/SvgDefs.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Collections from './pages/Collections.jsx'
import Crafting from './pages/Crafting.jsx'
import Services from './pages/Services.jsx'
import Contact from './pages/Contact.jsx'
import NotFound from './pages/NotFound.jsx'

export default function App() {
  const { pathname } = useLocation()

  return (
    <>
      <SvgDefs />
      <ScrollToTop />
      <Header />
      {/* key = pathname -> svaka stranica ulazi sa blagom animacijom */}
      <main className="page" key={pathname}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/o-nama" element={<About />} />
          <Route path="/kolekcije" element={<Collections />} />
          <Route path="/izrada" element={<Crafting />} />
          <Route path="/usluge" element={<Services />} />
          <Route path="/kontakt" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
