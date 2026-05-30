import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { wedding } from '../config/wedding'
import './Countdown.css'

function pad(n) { return String(n).padStart(2, '0') }

export default function Countdown() {
  const target = new Date(wedding.date + 'T' + wedding.time).getTime()

  const calc = () => {
    const diff = target - Date.now()
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 }
    return {
      days:    Math.floor(diff / 86400000),
      hours:   Math.floor((diff % 86400000) / 3600000),
      minutes: Math.floor((diff % 3600000) / 60000),
      seconds: Math.floor((diff % 60000) / 1000),
    }
  }

  const [time, setTime] = useState(calc)

  useEffect(() => {
    const id = setInterval(() => setTime(calc()), 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="countdown">
      <div className="countdown__inner">
        <p className="countdown__subtitle">The Big Day!</p>
        <div className="countdown__divider">
          <span className="countdown__divider-line" />
          <span className="countdown__divider-leaf">✦</span>
          <span className="countdown__divider-line" />
        </div>
        <h2 className="countdown__names">
          {wedding.groomName}
          <span className="countdown__amp">&amp;</span>
          {wedding.brideName}
        </h2>
        <p className="countdown__hint">
          Một lời chúc của bạn chắc chắn sẽ làm cho đám cưới của chúng mình có thêm một niềm hạnh phúc!
        </p>
        <div className="countdown__actions">
          <Link to="/rsvp" className="countdown__btn countdown__btn--solid">
            Xác nhận tham dự
          </Link>
        </div>
        <p className="countdown__date-badge">{wedding.dateDisplay}</p>
        <div className="countdown__grid">
          {[['days','Ngày'],['hours','Giờ'],['minutes','Phút'],['seconds','Giây']].map(([k, label]) => (
            <div key={k} className="countdown__unit">
              <span className="countdown__number">{pad(time[k])}</span>
              <span className="countdown__label">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

