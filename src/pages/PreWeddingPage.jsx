import { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { categories } from '../components/Gallery'
import Footer from '../components/Footer'
import LazyImage from '../components/LazyImage'
import '../components/LazyImage.css'
import './GalleryPage.css'

const category = categories.find(c => c.id === 'pre-wedding')
const base = `${import.meta.env.BASE_URL}gallery/pre-wedding/`

export default function PreWeddingPage() {
  const [lightbox, setLightbox] = useState(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleKey = useCallback((e) => {
    if (lightbox === null) return
    if (e.key === 'ArrowRight') setLightbox(i => Math.min(category.photos.length - 1, i + 1))
    if (e.key === 'ArrowLeft')  setLightbox(i => Math.max(0, i - 1))
    if (e.key === 'Escape')     setLightbox(null)
  }, [lightbox])

  useEffect(() => {
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [handleKey])

  useEffect(() => {
    document.body.style.overflow = lightbox !== null ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [lightbox])

  const hasPhotos = category.photos.length > 0

  return (
    <div className="gp">

      {/* ── Hero banner ── */}
      <header className="gp__hero">
        {category.cover && (
          <img className="gp__hero-bg" src={`${base}${category.cover}`} alt="" aria-hidden />
        )}
        <div className="gp__hero-veil" />
        <div className="gp__hero-content">
          <p className="gp__hero-tag">{category.subtitle}</p>
          <h1 className="gp__hero-title">{category.title}</h1>
          <p className="gp__hero-ornament">✦</p>
          {hasPhotos && (
            <p className="gp__hero-count">{category.photos.length} bức ảnh</p>
          )}
        </div>
        <Link to="/" className="gp__back">← Trang chủ</Link>
      </header>

      {/* ── Photo grid ── */}
      <main className="gp__main">
        {hasPhotos ? (
          <div className="gp__grid">
            {category.photos.map((filename, i) => (
              <button
                key={filename}
                className="gp__item"
                onClick={() => setLightbox(i)}
                aria-label={`Xem ảnh ${i + 1}`}
              >
                <LazyImage src={`${base}${filename}`} alt={`${category.title} ${i + 1}`} />
                <span className="gp__item-overlay">
                  <span className="gp__item-zoom">⤢</span>
                </span>
              </button>
            ))}
          </div>
        ) : (
          <div className="gp__empty">
            <div className="gp__empty-grid">
              {Array.from({ length: 9 }).map((_, i) => (
                <div key={i} className="gp__empty-item"><span>✦</span></div>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* ── Bottom nav ── */}
      <div className="gp__nav">
        <Link to="/gallery/pre-wedding" className="gp__nav-item gp__nav-item--active">
          <span className="gp__nav-dot" />Ảnh đám hỏi
        </Link>
        <Link to="/gallery/wedding-day" className="gp__nav-item">
          <span className="gp__nav-dot" />Ảnh cưới
        </Link>
      </div>

      <Footer />

      {/* ── Lightbox ── */}
      {lightbox !== null && (
        <div
          className="gp__lightbox"
          role="dialog"
          aria-modal="true"
          onClick={() => setLightbox(null)}
        >
          <button
            className="gp__lb-btn gp__lb-close"
            onClick={() => setLightbox(null)}
            aria-label="Đóng"
          >✕</button>

          {lightbox > 0 && (
            <button
              className="gp__lb-btn gp__lb-prev"
              onClick={e => { e.stopPropagation(); setLightbox(i => i - 1) }}
              aria-label="Ảnh trước"
            >‹</button>
          )}

          <figure className="gp__lb-figure" onClick={e => e.stopPropagation()}>
            <img
              src={`${base}${category.photos[lightbox]}`}
              alt={`${category.title} ${lightbox + 1}`}
            />
            <figcaption className="gp__lb-caption">
              {lightbox + 1} &nbsp;/&nbsp; {category.photos.length}
            </figcaption>
          </figure>

          {lightbox < category.photos.length - 1 && (
            <button
              className="gp__lb-btn gp__lb-next"
              onClick={e => { e.stopPropagation(); setLightbox(i => i + 1) }}
              aria-label="Ảnh tiếp theo"
            >›</button>
          )}
        </div>
      )}
    </div>
  )
}
