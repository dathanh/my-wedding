import { useRef } from 'react'
import Hero from '../components/Hero'
import Countdown from '../components/Countdown'
import Gallery from '../components/Gallery'
import Footer from '../components/Footer'
import './HomePage.css'

export default function HomePage() {
  const section2 = useRef(null)

  return (
    <div className="fp">

      {/* ── Section 1: Hero + Countdown ── */}
      <div className="fp__section fp__section--intro">
        <Hero />
        <Countdown />
        <button
          className="fp__down"
          onClick={() => section2.current?.scrollIntoView({ behavior: 'smooth' })}
          aria-label="Kéo xuống"
        >
          <span className="fp__down-chevron" />
        </button>
      </div>

      {/* ── Section 2: Gallery + Footer ── */}
      <div className="fp__section fp__section--gallery" ref={section2}>
        <Gallery />
        <Footer />
      </div>

    </div>
  )
}

