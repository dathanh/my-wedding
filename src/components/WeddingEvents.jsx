import { wedding } from '../config/wedding'
import './WeddingEvents.css'

function addToCalendar(event) {
  const [hh, mm] = event.time.split(':').map(Number)
  // Parse date from "dd/MM/yyyy" format
  const parts = event.date.split(' ').pop().split('/')
  const d = new Date(Number(parts[2]), Number(parts[1]) - 1, Number(parts[0]), hh, mm)
  const fmt = (dt) => dt.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z'
  const end = new Date(d.getTime() + 2 * 60 * 60 * 1000) // +2h

  const url = `https://calendar.google.com/calendar/render?action=TEMPLATE` +
    `&text=${encodeURIComponent(event.name + ' - ' + wedding.groomName + ' & ' + wedding.brideName)}` +
    `&dates=${fmt(d)}/${fmt(end)}` +
    `&location=${encodeURIComponent(event.address)}` +
    `&details=${encodeURIComponent(event.venue)}`

  window.open(url, '_blank', 'noopener,noreferrer')
}

export default function WeddingEvents() {
  return (
    <section className="events">
      <div className="section-wrap">
        <div className="section-header">
          <h2>Sự Kiện Cưới</h2>
          <p className="section-ornament">✦</p>
          <p className="events__tagline">
            Tình yêu đích thực đứng về phía nhau trong những ngày tốt đẹp và sát cánh hơn trong những ngày tồi tệ.
          </p>
        </div>

        <div className="events__list">
          {wedding.events.map((ev, i) => (
            <div key={i} className="events__card">
              <div className="events__card-icon">
                <span className="events__card-num">{String(i + 1).padStart(2, '0')}</span>
              </div>
              <div className="events__card-body">
                {ev.side && <span className="events__card-side">{ev.side}</span>}
                <h3 className="events__card-name">{ev.name}</h3>
                <div className="events__card-meta">
                  <span className="events__card-time">⏰ {ev.time} — {ev.date}</span>
                  {ev.lunarDate && (
                    <span className="events__card-lunar">🌙 Âm lịch: {ev.lunarDate}</span>
                  )}
                  {ev.diningTime && (
                    <span className="events__card-dining">🍽️ Khai tiệc: {ev.diningTime}</span>
                  )}
                  {ev.mapUrl ? (
                    <a
                      href={ev.mapUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="events__card-venue"
                    >
                      📍 {ev.venue} — {ev.address}
                    </a>
                  ) : (
                    <span className="events__card-venue">📍 {ev.venue} — {ev.address}</span>
                  )}
                </div>
                <button
                  className="events__card-cal"
                  onClick={() => addToCalendar(ev)}
                  type="button"
                >
                  + Thêm vào lịch
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
