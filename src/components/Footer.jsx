import { wedding } from '../config/wedding'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <p className="footer__names">
          {wedding.groomName}
          <span className="footer__ampersand">&amp;</span>
          {wedding.brideName}
        </p>
        <div className="footer__ornament">
          <span className="footer__ornament-line" />
          <span className="footer__ornament-dot" />
          <span className="footer__ornament-line" />
        </div>
        <p className="footer__date">{wedding.dateDisplay}</p>
        <a href={wedding.venue.mapUrl} target="_blank" rel="noreferrer" className="footer__map">
          📍 {wedding.venue.address}
        </a>
        <p className="footer__ampersand">Made with ♥</p>
      </div>
    </footer>
  )
}
