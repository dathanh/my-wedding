import { useState, useEffect, useRef } from 'react'

/**
 * Two module-level caches that survive React re-renders and remounts:
 *   requestedCache — src has been handed to an <img> element at least once
 *                    (download started; browser HTTP cache will resume it)
 *   loadedCache    — onLoad has fired; image is fully decoded
 *
 * Using both means:
 *  - Fast-scrolling past a still-downloading image → on remount we skip the
 *    IntersectionObserver and render <img> immediately so the browser continues
 *    the in-flight request (or serves from cache) without restarting.
 *  - Already-finished image → rendered fully visible with no shimmer at all.
 */
const requestedCache = new Set()
const loadedCache    = new Set()

export default function LazyImage({ src, alt, className = '' }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(() => requestedCache.has(src))
  const [loaded,  setLoaded]  = useState(() => loadedCache.has(src))

  useEffect(() => {
    // Already requested before — skip observer, <img> is already in the DOM
    if (requestedCache.has(src)) return

    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          requestedCache.add(src)
          setVisible(true)
          observer.unobserve(el)
        }
      },
      { rootMargin: '200px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [src])

  const handleLoad = () => {
    loadedCache.add(src)
    setLoaded(true)
  }

  return (
    <div ref={ref} className={`lazy-wrap ${className}`} data-loaded={loaded}>
      {visible && (
        <img
          src={src}
          alt={alt}
          onLoad={handleLoad}
          className={`lazy-img${loaded ? ' lazy-img--loaded' : ''}`}
        />
      )}
    </div>
  )
}
