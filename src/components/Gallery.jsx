// ─── Add your photo filenames to this array ───────────────────────────────────
// Place images in: public/gallery/
// Example: 'photo1.jpg', 'photo2.jpg', ...
export const photos = [
  // 'photo1.jpg',
  // 'photo2.jpg',
]

import { Link } from 'react-router-dom'
import './Gallery.css'

export default function Gallery({ showCta = false }) {
  const hasPhotos = photos.length > 0

  return (
    <section className="gallery">
      <div className="section-wrap">
        <div className="section-header">
          <h2>Bộ ảnh cưới</h2>
          <p className="section-ornament">✦</p>
        </div>

        {hasPhotos ? (
          <div className="gallery__grid" id="gallery">
            {photos.map((filename, i) => (
              <div key={i} className="gallery__item">
                <img
                  src={`${import.meta.env.BASE_URL}gallery/${filename}`}
                  alt={`Wedding photo ${i + 1}`}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="gallery__placeholder">
            <div className="gallery__placeholder-grid">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="gallery__placeholder-item"><span>✦</span></div>
              ))}
            </div>
            <p className="gallery__placeholder-hint">
              Thêm ảnh vào <code>public/gallery/</code> và đăng ký trong <code>Gallery.jsx</code>
            </p>
          </div>
        )}

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
