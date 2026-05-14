// ─── Add photos per category ──────────────────────────────────────────────────
// Place images in: public/gallery/pre-wedding/ and public/gallery/wedding-day/
export const categories = [
  {
    id: 'pre-wedding',
    title: 'Ảnh dám hỏi',
    subtitle: 'Pre-wedding',
    cover: '1.webp',
    photos: [
      '1.webp',
    ],
  },
  {
    id: 'wedding-day',
    title: 'Ngày trọng đại',
    subtitle: 'Wedding day',
    cover: '4.webp',
    photos: [
      '4.webp',
      'ANV00820.webp',
      'ANV00832.webp',
      'ANV00951.webp',
      'ANV00965.webp',
      'ANV00978.webp',
      'ANV01020.webp',
      'ANV01023.webp',
      'ANV01111.webp',
      'ANV01200.webp',
      'ANV01283.webp',
      'ANV01358.webp',
      'ANV01373.webp',
      'ANV01388.webp',
      'ANV01496.webp',
      'ANV01507.webp',
      'ANV01532.webp',
      'ANV01547.webp',
      'ANV01554.webp',
      'ANV01563.webp',
      'ANV01592 .webp',
      'ANV01610.webp',
      'ANV01680.webp',
      'ANV01688.webp',
      'ANV01702.webp',
      'ANV01710.webp',
      'ANV01723.webp',
      'ANV01733.webp',
      'ANV01782.webp',
      'ANV01818.webp',
      'ANV01897.webp',
    ],
  },
]

import { Link } from 'react-router-dom'
import './Gallery.css'

export default function Gallery({ showCta = false }) {
  return (
    <section className="gallery">
      <div className="section-wrap">

        <div className="section-header">
          <h2>Bộ ảnh cưới</h2>
          <p className="section-ornament">✦</p>
        </div>

        <div className="gallery__categories">
          {categories.map(cat => {
            const base = `${import.meta.env.BASE_URL}gallery/${cat.id}/`
            const hasCover = !!cat.cover
            const hasPhotos = cat.photos.length > 0
            return (
              <Link
                key={cat.id}
                to={`/gallery/${cat.id}`}
                className="gallery__cat-card"
              >
                <div className="gallery__cat-img">
                  {hasCover ? (
                    <img src={`${base}${cat.cover}`} alt={cat.title} />
                  ) : (
                    <div className="gallery__cat-placeholder">
                      <span className="gallery__cat-icon">✦</span>
                    </div>
                  )}
                  <div className="gallery__cat-overlay" />
                </div>
                <div className="gallery__cat-info">
                  <p className="gallery__cat-sub">{cat.subtitle}</p>
                  <h3 className="gallery__cat-title">{cat.title}</h3>
                  {/* <p className="gallery__cat-count">
                    {hasPhotos ? `${cat.photos.length} ảnh` : 'Sắp có ảnh'}
                  </p> */}
                  <span className="gallery__cat-arrow">→</span>
                </div>
              </Link>
            )
          })}
        </div>

        {showCta && (
          <div className="gallery__cta">
            <Link to="/rsvp" className="gallery__cta-btn">
              Xác nhận tham dự <span>→</span>
            </Link>
          </div>
        )}

      </div>
    </section>
  )
}

