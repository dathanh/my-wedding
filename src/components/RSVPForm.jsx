import { useState } from 'react'
import { wedding } from '../config/wedding'
import './RSVPForm.css'

/**
 * Google Sheets RSVP Setup:
 * 1. Create a Google Form with fields: name, number of guests, message
 * 2. In the form, click ⋮ → "Get pre-filled link" → fill dummy values → copy link
 * 3. From the URL extract "entry.XXXXXXXXX" IDs for each field
 * 4. In Google Form settings → Responses → Link to Sheets
 * 5. Paste the form action URL and entry IDs into src/config/wedding.js
 */

const STATUS = { idle: 'idle', sending: 'sending', done: 'done', error: 'error' }

export default function RSVPForm() {
  const [form, setForm] = useState({ name: '', guests: '1', message: '' })
  const [status, setStatus] = useState(STATUS.idle)

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus(STATUS.sending)

    const body = new URLSearchParams({
      [wedding.googleSheetFields.name]:    form.name,
      [wedding.googleSheetFields.guests]:  form.guests,
      [wedding.googleSheetFields.message]: form.message,
    })

    try {
      await fetch(wedding.googleSheetFormUrl, { method: 'POST', mode: 'no-cors', body })
      setStatus(STATUS.done)
      setForm({ name: '', guests: '1', message: '' })
    } catch {
      setStatus(STATUS.error)
    }
  }

  return (
    <section className="rsvp">
      <div className="section-wrap">
        <div className="section-header">
          <h2>Xác nhận tham dự</h2>
          <p className="section-ornament">✦</p>
        </div>

        <div className="rsvp__card">
          {status === STATUS.done ? (
            <p className="rsvp__success">
              Cảm ơn bạn đã xác nhận!<br />Chúng tôi rất vui được đón tiếp bạn. 🤍
            </p>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="rsvp__field">
                <label htmlFor="name">Họ và tên *</label>
                <input
                  id="name" name="name" type="text" required
                  value={form.name} onChange={handleChange}
                  placeholder="Nguyễn Văn A"
                />
              </div>
              <div className="rsvp__field">
                <label htmlFor="guests">Số người tham dự *</label>
                <select id="guests" name="guests" value={form.guests} onChange={handleChange}>
                  {[1,2,3,4].map(n => <option key={n} value={n}>{n} người</option>)}
                </select>
              </div>
              <div className="rsvp__field">
                <label htmlFor="message">Lời chúc mừng</label>
                <textarea
                  id="message" name="message" rows={4}
                  value={form.message} onChange={handleChange}
                  placeholder="Chúc mừng hạnh phúc..."
                />
              </div>
              {status === STATUS.error && (
                <p className="rsvp__error">Có lỗi xảy ra, vui lòng thử lại.</p>
              )}
              <button type="submit" disabled={status === STATUS.sending} className="rsvp__btn">
                {status === STATUS.sending ? 'Đang gửi...' : 'Gửi xác nhận'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
