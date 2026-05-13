import { Link } from 'react-router-dom'
import { wedding } from '../config/wedding'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__content">
        <p className="hero__label">Trân trọng kính mời</p>
        <div className="hero__divider">
          <span className="hero__divider-line" />
          <span className="hero__divider-diamond" />
          <span className="hero__divider-line" />
        </div>
        <h1 className="hero__names">
          {wedding.groomName}
          <span className="hero__ampersand">&amp;</span>
          {wedding.brideName}
        </h1>
        <div className="hero__meta">
          <p className="hero__date">{wedding.dateDisplay}</p>
          <p className="hero__venue">{wedding.venue.name}</p>
        </div>
        <Link to="/rsvp" className="hero__cta">
          Xác nhận tham dự
          <span className="hero__cta-arrow">→</span>
        </Link>
      </div>
      <div className="hero__scroll">
        <span className="hero__scroll-text">Scroll</span>
        <span className="hero__scroll-line" />
      </div>
    </section>
  )
}
