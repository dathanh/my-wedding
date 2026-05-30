import Hero from '../components/Hero'
import CoupleProfile from '../components/CoupleProfile'
import LoveStory from '../components/LoveStory'
import Countdown from '../components/Countdown'
import Gallery from '../components/Gallery'
import WeddingEvents from '../components/WeddingEvents'
import RSVPForm from '../components/RSVPForm'
import GiftBox from '../components/GiftBox'
import Footer from '../components/Footer'
import './HomePage.css'

export default function HomePage() {
  return (
    <div className="page">
      <Hero />
      <CoupleProfile />
      <LoveStory />
      <Countdown />
      <Gallery />
      <WeddingEvents />
      {/* <RSVPForm /> */}
      {/* <GiftBox /> */}
      <Footer />
    </div>
  )
}

