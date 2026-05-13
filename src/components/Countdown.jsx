import { useState, useEffect } from 'react'
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
      <div className="section-wrap">
        <div className="section-header">
          <h2>Đếm ngược đến ngày vui</h2>
          <p className="section-ornament">✦</p>
        </div>
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
