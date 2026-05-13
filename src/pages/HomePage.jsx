import Hero from '../components/Hero'
import Countdown from '../components/Countdown'
import Gallery from '../components/Gallery'
import Footer from '../components/Footer'

export default function HomePage() {
  return (
    <div className="app">
      <Hero />
      <Countdown />
      <Gallery showCta />
      <Footer />
    </div>
  )
}
