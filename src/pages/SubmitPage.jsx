import { Link } from 'react-router-dom'
import RSVPForm from '../components/RSVPForm'
import Footer from '../components/Footer'
import './SubmitPage.css'

export default function SubmitPage() {
  return (
    <div className="app">
      <div className="submit-page__back">
        <Link to="/" className="submit-page__back-link">← Trở về trang chủ</Link>
      </div>
      <RSVPForm />
      <Footer />
    </div>
  )
}
