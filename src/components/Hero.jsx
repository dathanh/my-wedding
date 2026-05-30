import { Link } from 'react-router-dom'
import { wedding } from '../config/wedding'
import './Hero.css'

export default function Hero() {
    return (
        <section className="hero">
            <div className="hero__overlay" />

            <div className="hero__content">
                <p className="hero__save">Save The Date</p>
                <div className="hero__divider">
                    <span className="hero__divider-line" />
                    <span className="hero__divider-heart">♥</span>
                    <span className="hero__divider-line" />
                </div>

                <h1 className="hero__names">
                    <span className="hero__name">{wedding.groomName}</span>
                    <span className="hero__amp">&amp;</span>
                    <span className="hero__name">{wedding.brideName}</span>
                </h1>

                <div className="hero__divider hero__divider--bottom">
                    <span className="hero__divider-line" />
                    <span className="hero__divider-diamond" />
                    <span className="hero__divider-line" />
                </div>

                <p className="hero__date">{wedding.dateDisplay}</p>

                <div className="hero__actions">
                    <Link to="/rsvp" className="hero__cta hero__cta--outline">
                        Xác nhận tham dự
                    </Link>
                </div>
            </div>

            <a
                className="hero__scroll"
                onClick={e => { e.preventDefault(); window.scrollBy({ top: window.innerHeight, behavior: 'smooth' }) }}
                href="#next"
                aria-label="Kéo xuống"
            >
                <span className="hero__scroll-dot" />
            </a>
        </section>
    )
}
