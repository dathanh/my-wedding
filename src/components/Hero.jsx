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
                    <span className="hero__name">{wedding.groomName}</span>
                    <span className="hero__ampersand">&amp;</span>
                    <span className="hero__name">{wedding.brideName}</span>
                </h1>
                <div className="hero__meta">
                    <p className="hero__date">{wedding.dateDisplay}</p>
                    <a href={wedding.venue.mapUrl} target="_blank" rel="noreferrer">
                        <p className="hero__venue">{wedding.venue.name}</p>
                    </a>
                </div>
                <Link to="/rsvp" className="hero__cta">
                    Xác nhận tham dự
                    <span className="hero__cta-arrow">→</span>
                </Link>
            </div>
        </section>
    )
}
