// ─── Wedding config ────────────────────────────────────────────────────────────
const wedding = {
  groomName: 'Đỗ Đạt Thành',
  brideName: 'Dương Thị Thu Thuỷ',
  date: '2026-07-21',
  dateDisplay: 'Thứ ba, ngày 21 tháng 07 năm 2026',
  time: '11:00',
  venue: {
    name: 'Trung tâm Hội nghị - Tiệc cưới Diamond Place',
    address: 'Sảnh Diamond 1',
    mapUrl: 'https://maps.app.goo.gl/ffHFJQEdy8szgJbk9',
  },
  groomPhoto: 'my-wedding/groom.jpg',
  bridePhoto: 'my-wedding/bride.jpg',
  groomBio: 'Là một người hiền lành, chân thành và luôn hết lòng vì gia đình. Thích tận hưởng những khoảnh khắc bình yên bên người thân.',
  brideBio: 'Là một người dịu dàng, hay cười và sống hết mình vì những người mình yêu thương. Thích du lịch, khám phá những miền đất mới, nấu ăn, chụp ảnh và lưu giữ từng kỷ niệm đẹp của cuộc đời.',
  groomParents: { father: 'Ông Đỗ Văn Tươi', mother: 'Bà Phan Thị Kim Yến', address: 'Tân Sơn, TP. Hồ Chí Minh' },
  brideParents: { father: 'Ông Dương Văn Đại', mother: 'Bà Võ Thị Hoa', address: 'Xuân Quế, Thành phố Đồng Nai' },
  loveStory: 'Thật vui vì được gặp và đón tiếp các bạn trong một dịp đặc biệt – Ngày cưới của chúng mình. Chúng mình muốn gửi đến bạn những lời cảm ơn sâu sắc nhất và để bạn biết rằng chúng mình rất hạnh phúc khi thấy bạn ở đó. Cảm ơn các bạn rất nhiều vì sự hiện diện cùng những lời chúc tốt đẹp mà bạn đã dành cho chúng mình nhé!',
  events: [
    { name: 'LỄ VU QUY', side: 'Nhà Gái', time: '09:00', date: 'Chủ Nhật, 19/07/2026', lunarDate: '06/06/2026 (Bính Ngọ)', venue: 'Tư Gia', address: 'Xuân Quế, Thành phố Đồng Nai', mapUrl: '' },
    { name: 'TIỆC CƯỚI', side: 'Nhà Gái', time: '11:00', date: 'Chủ Nhật, 19/07/2026', lunarDate: '06/06/2026 (Bính Ngọ)', venue: 'Tư Gia', address: 'Xuân Quế, Thành phố Đồng Nai', mapUrl: '' },
    { name: 'LỄ THÀNH HÔN', side: 'Nhà Trai', time: '10:00', date: 'Thứ Ba, 21/07/2026', lunarDate: '08/06/2026 (Bính Ngọ)', venue: 'Tư Gia', address: 'Tân Sơn, TP. Hồ Chí Minh', mapUrl: '' },
    { name: 'TIỆC CƯỚI', side: 'Nhà Trai', time: '11:00', date: 'Chủ Nhật, 26/07/2026', lunarDate: '13/06/2026 (Bính Ngọ)', diningTime: '12:00', venue: 'Trung tâm Hội nghị - Tiệc cưới Diamond Place', address: 'Sảnh Diamond 1', mapUrl: 'https://maps.app.goo.gl/ffHFJQEdy8szgJbk9' },
  ],
  gift: {
    groom: { bank: 'Vietcombank', name: 'Đỗ Đạt Thành', account: '1234567890', qrImage: 'my-wedding/qr-groom.jpg' },
    bride: { bank: 'MB Bank', name: 'Dương Thị Thu Thuỷ', account: '0987654321', qrImage: 'my-wedding/qr-bride.jpg' },
    note: 'Nếu có thể, bạn hãy tới tham dự đám cưới, chung vui và mừng cưới trực tiếp cho chúng mình nhé. Cảm ơn bạn rất nhiều!',
  },
  googleSheetFormUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSeOzPldfpqFOhCEBI3LO0M6_4xWYzu5Z42sKcPXJgcev0N4lQ/formResponse',
  googleSheetFields: { name: 'entry.1953424694', event: 'entry.1108819352', guests: 'entry.2058527704', message: 'entry.1602018169' },
}

// ─── Gallery categories ────────────────────────────────────────────────────────
const categories = [
  {
    id: 'pre-wedding',
    title: 'Ảnh đính hôn',
    subtitle: 'Engagement',
    cover: '_DSC9041.webp',
    href: 'gallery/pre-wedding.html',
    photos: [
      '_DSC8875.webp', '_DSC8876.webp', '_DSC8885.webp', '_DSC8889.webp', '_DSC8894.webp',
      '_DSC8902.webp', '_DSC8903.webp', '_DSC8906.webp', '_DSC8910.webp', '_DSC8912.webp',
      '_DSC8913.webp', '_DSC8915.webp', '_DSC8933.webp', '_DSC8942.webp', '_DSC8945.webp',
      '_DSC8951.webp', '_DSC8955.webp', '_DSC8965.webp', '_DSC8979.webp', '_DSC8988.webp',
      '_DSC8990.webp', '_DSC8999.webp', '_DSC9014.webp', '_DSC9018.webp', '_DSC9026.webp',
      '_DSC9041.webp', '_DSC9043.webp', '_DSC9050.webp',
    ],
  },
  {
    id: 'wedding-day',
    title: 'Ảnh cưới',
    subtitle: 'Wedding',
    cover: '4.webp',
    href: 'gallery/wedding-day.html',
    photos: [
      'ANV00832.webp', 'ANV00965.webp', 'ANV00978.webp', 'ANV01020.webp', 'ANV01023.webp',
      'ANV01111.webp', 'ANV01200.webp', 'ANV01283.webp', 'ANV01496.webp', 'ANV01507.webp',
      'ANV01532.webp', 'ANV01547.webp', 'ANV01554.webp', 'ANV01563.webp', 'ANV01592.webp',
      'ANV01610.webp', 'ANV01680.webp', 'ANV01688.webp', 'ANV01702.webp', 'ANV01723.webp',
    ],
  },
]

// ─── Utility ───────────────────────────────────────────────────────────────────
function pad(n) { return String(n).padStart(2, '0') }

// ─── Countdown ────────────────────────────────────────────────────────────────
function initCountdown() {
  const grid = document.getElementById('countdown-grid')
  if (!grid) return

  const target = new Date(wedding.date + 'T' + wedding.time).getTime()

  function calc() {
    const diff = target - Date.now()
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 }
    return {
      days: Math.floor(diff / 86400000),
      hours: Math.floor((diff % 86400000) / 3600000),
      minutes: Math.floor((diff % 3600000) / 60000),
      seconds: Math.floor((diff % 60000) / 1000),
    }
  }

  const units = [['days', 'Ngày'], ['hours', 'Giờ'], ['minutes', 'Phút'], ['seconds', 'Giây']]

  units.forEach(([k, label]) => {
    const div = document.createElement('div')
    div.className = 'countdown__unit'
    div.innerHTML = `<span class="countdown__number" id="cd-${k}">00</span><span class="countdown__label">${label}</span>`
    grid.appendChild(div)
  })

  function update() {
    const t = calc()
    units.forEach(([k]) => {
      const el = document.getElementById('cd-' + k)
      if (el) el.textContent = pad(t[k])
    })
  }

  update()
  setInterval(update, 1000)
}

// ─── Lazy Image ───────────────────────────────────────────────────────────────
const requestedCache = new Set()
const loadedCache = new Set()

function createLazyImage(src, alt) {
  const wrap = document.createElement('div')
  wrap.className = 'lazy-wrap'
  wrap.dataset.loaded = 'false'

  if (requestedCache.has(src)) {
    const img = document.createElement('img')
    img.className = 'lazy-img' + (loadedCache.has(src) ? ' lazy-img--loaded' : '')
    img.alt = alt
    img.src = src
    if (!loadedCache.has(src)) {
      img.addEventListener('load', () => {
        loadedCache.add(src)
        img.classList.add('lazy-img--loaded')
        wrap.dataset.loaded = 'true'
      })
    } else {
      wrap.dataset.loaded = 'true'
    }
    wrap.appendChild(img)
  } else {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        requestedCache.add(src)
        const img = document.createElement('img')
        img.className = 'lazy-img'
        img.alt = alt
        img.addEventListener('load', () => {
          loadedCache.add(src)
          img.classList.add('lazy-img--loaded')
          wrap.dataset.loaded = 'true'
        })
        img.src = src
        wrap.appendChild(img)
        observer.disconnect()
      }
    }, { rootMargin: '200px' })
    observer.observe(wrap)
  }

  return wrap
}

// ─── Gallery Page ─────────────────────────────────────────────────────────────
function initGalleryPage() {
  if (!document.getElementById('gp-hero-tag')) return
  const params = new URLSearchParams(location.search)
  const categoryId = params.get('id') || 'pre-wedding'
  const category = categories.find(c => c.id === categoryId)
  if (!category) { location.href = 'index.html'; return }

  const base = 'gallery/' + categoryId + '/'

  // Hero
  const heroBg = document.getElementById('gp-hero-bg')
  if (heroBg && category.cover) heroBg.src = base + category.cover

  document.getElementById('gp-hero-tag').textContent = category.subtitle
  document.getElementById('gp-hero-title').textContent = category.title
  const countEl = document.getElementById('gp-hero-count')
  if (category.photos.length > 0) countEl.textContent = category.photos.length + ' bức ảnh'
  else countEl.textContent = ''

  // Nav
  const nav = document.getElementById('gp-nav')
  categories.forEach(cat => {
    const a = document.createElement('a')
    a.href = 'gallery.html?id=' + cat.id
    a.className = 'gp__nav-item' + (cat.id === categoryId ? ' gp__nav-item--active' : '')
    a.innerHTML = '<span class="gp__nav-dot"></span>' + cat.title
    nav.appendChild(a)
  })

  // Grid
  const main = document.getElementById('gp-main')
  let lightboxIndex = null

  if (category.photos.length > 0) {
    const grid = document.createElement('div')
    grid.className = 'gp__grid'

    category.photos.forEach((filename, i) => {
      const btn = document.createElement('button')
      btn.className = 'gp__item'
      btn.setAttribute('aria-label', 'Xem ảnh ' + (i + 1))

      const lazyImg = createLazyImage(base + filename, category.title + ' ' + (i + 1))
      const overlay = document.createElement('span')
      overlay.className = 'gp__item-overlay'
      overlay.innerHTML = '<span class="gp__item-zoom">⤢</span>'

      btn.appendChild(lazyImg)
      btn.appendChild(overlay)
      btn.addEventListener('click', () => openLightbox(i))
      grid.appendChild(btn)
    })

    main.appendChild(grid)
  } else {
    const empty = document.createElement('div')
    empty.className = 'gp__empty'
    empty.innerHTML = '<div class="gp__empty-grid">' +
      Array.from({ length: 9 }).map(() => '<div class="gp__empty-item"><span>✦</span></div>').join('') +
      '</div>'
    main.appendChild(empty)
  }

  // Lightbox
  const lightbox = document.getElementById('gp-lightbox')

  function openLightbox(i) {
    lightboxIndex = i
    renderLightbox()
    lightbox.style.display = 'flex'
    document.body.style.overflow = 'hidden'
  }

  function closeLightbox() {
    lightboxIndex = null
    lightbox.style.display = 'none'
    document.body.style.overflow = ''
  }

  function renderLightbox() {
    const img = lightbox.querySelector('.gp__lb-figure img')
    const caption = lightbox.querySelector('.gp__lb-caption')
    const prev = document.getElementById('gp-lb-prev')
    const next = document.getElementById('gp-lb-next')

    img.src = base + category.photos[lightboxIndex]
    img.alt = category.title + ' ' + (lightboxIndex + 1)
    caption.textContent = (lightboxIndex + 1) + ' / ' + category.photos.length
    prev.style.display = lightboxIndex > 0 ? 'flex' : 'none'
    next.style.display = lightboxIndex < category.photos.length - 1 ? 'flex' : 'none'
  }

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox()
  })
  document.getElementById('gp-lb-close').addEventListener('click', closeLightbox)
  document.getElementById('gp-lb-prev').addEventListener('click', (e) => {
    e.stopPropagation()
    if (lightboxIndex > 0) { lightboxIndex--; renderLightbox() }
  })
  document.getElementById('gp-lb-next').addEventListener('click', (e) => {
    e.stopPropagation()
    if (lightboxIndex < category.photos.length - 1) { lightboxIndex++; renderLightbox() }
  })

  document.addEventListener('keydown', (e) => {
    if (lightboxIndex === null) return
    if (e.key === 'ArrowRight' && lightboxIndex < category.photos.length - 1) { lightboxIndex++; renderLightbox() }
    if (e.key === 'ArrowLeft' && lightboxIndex > 0) { lightboxIndex--; renderLightbox() }
    if (e.key === 'Escape') closeLightbox()
  })
}

// ─── Home page: Gallery cards ─────────────────────────────────────────────────
function initHomeGallery() {
  const container = document.getElementById('gallery-categories')
  if (!container) return

  categories.forEach(cat => {
    const base = 'gallery/' + cat.id + '/'
    const a = document.createElement('a')
    a.href = cat.href
    a.className = 'gallery__cat-card'

    const imgDiv = document.createElement('div')
    imgDiv.className = 'gallery__cat-img'

    if (cat.cover) {
      const img = document.createElement('img')
      img.src = base + cat.cover
      img.alt = cat.title
      imgDiv.appendChild(img)
    } else {
      imgDiv.innerHTML = '<div class="gallery__cat-placeholder"><span class="gallery__cat-icon">✦</span></div>'
    }

    a.innerHTML = `
      <div class="gallery__cat-overlay"></div>
      <div class="gallery__cat-info">
        <p class="gallery__cat-sub">${cat.subtitle}</p>
        <h3 class="gallery__cat-title">${cat.title}</h3>
        <span class="gallery__cat-arrow">→</span>
      </div>
    `
    a.insertBefore(imgDiv, a.firstChild)
    container.appendChild(a)
  })
}

// ─── Wedding Events ───────────────────────────────────────────────────────────
function addToCalendar(ev) {
  const [hh, mm] = ev.time.split(':').map(Number)
  const parts = ev.date.split(' ').pop().split('/')
  const d = new Date(Number(parts[2]), Number(parts[1]) - 1, Number(parts[0]), hh, mm)
  const fmt = dt => dt.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z'
  const end = new Date(d.getTime() + 2 * 60 * 60 * 1000)
  const url = `https://calendar.google.com/calendar/render?action=TEMPLATE` +
    `&text=${encodeURIComponent(ev.name + ' - ' + wedding.groomName + ' & ' + wedding.brideName)}` +
    `&dates=${fmt(d)}/${fmt(end)}` +
    `&location=${encodeURIComponent(ev.address)}` +
    `&details=${encodeURIComponent(ev.venue)}`
  window.open(url, '_blank', 'noopener,noreferrer')
}

function initWeddingEvents() {
  const list = document.getElementById('events-list')
  if (!list) return
  wedding.events.forEach((ev, i) => {
    const card = document.createElement('div')
    card.className = 'events__card'
    const venueHtml = ev.mapUrl
      ? `<a href="${ev.mapUrl}" target="_blank" rel="noreferrer" class="events__card-venue">📍 ${ev.venue} — ${ev.address}</a>`
      : `<span class="events__card-venue">📍 ${ev.venue} — ${ev.address}</span>`
    card.innerHTML = `
      <div class="events__card-icon"><span class="events__card-num">${String(i + 1).padStart(2, '0')}</span></div>
      <div class="events__card-body">
        ${ev.side ? `<span class="events__card-side">${ev.side}</span>` : ''}
        <h3 class="events__card-name">${ev.name}</h3>
        <div class="events__card-meta">
          <span class="events__card-time">⏰ ${ev.time} — ${ev.date}</span>
          ${ev.lunarDate ? `<span class="events__card-lunar">🌙 Âm lịch: ${ev.lunarDate}</span>` : ''}
          ${ev.diningTime ? `<span class="events__card-dining">🍽️ Khai tiệc: ${ev.diningTime}</span>` : ''}
          ${venueHtml}
        </div>
        <button class="events__card-cal" type="button">+ Thêm vào lịch</button>
      </div>
    `
    card.querySelector('.events__card-cal').addEventListener('click', () => addToCalendar(ev))
    list.appendChild(card)
  })
}

// ─── Gift Box ─────────────────────────────────────────────────────────────────
function initGiftBox() {
  const container = document.getElementById('gift-cards')
  if (!container) return
  const pairs = [['chú rể', wedding.gift.groom], ['cô dâu', wedding.gift.bride]]
  pairs.forEach(([label, info]) => {
    const qrHtml = info.qrImage
      ? `<div class="gift__qr"><img src="${info.qrImage}" alt="QR ${info.name}" /></div>`
      : `<div class="gift__qr gift__qr--placeholder"><span>QR</span></div>`
    const card = document.createElement('div')
    card.className = 'gift__card'
    card.innerHTML = `
      <p class="gift__card-label">Mừng cưới đến ${label}</p>
      <div class="gift__card-body">
        ${qrHtml}
        <div class="gift__info">
          <p class="gift__bank">${info.bank}</p>
          <p class="gift__name">${info.name}</p>
          <p class="gift__account">${info.account}</p>
        </div>
      </div>
    `
    container.appendChild(card)
  })
}

// ─── RSVP Form ────────────────────────────────────────────────────────────────
function initRSVP() {
  const form = document.getElementById('rsvp-form')
  if (!form) return

  const successMsg = document.getElementById('rsvp-success')
  const errorMsg = document.getElementById('rsvp-error')
  const btn = document.getElementById('rsvp-btn')

  form.addEventListener('submit', async (e) => {
    e.preventDefault()
    btn.disabled = true
    btn.textContent = 'Đang gửi...'
    if (errorMsg) errorMsg.style.display = 'none'

    const body = new URLSearchParams({
      [wedding.googleSheetFields.name]: form.querySelector('#name').value,
      [wedding.googleSheetFields.event]: form.querySelector('#event').value,
      [wedding.googleSheetFields.guests]: form.querySelector('#guests').value,
      [wedding.googleSheetFields.message]: form.querySelector('#message').value,
    })

    try {
      await fetch(wedding.googleSheetFormUrl, { method: 'POST', mode: 'no-cors', body })
      form.style.display = 'none'
      if (successMsg) successMsg.style.display = 'block'
    } catch {
      btn.disabled = false
      btn.textContent = 'Gửi xác nhận'
      if (errorMsg) errorMsg.style.display = 'block'
    }
  })
}

// ─── Couple Profile ───────────────────────────────────────────────────────────
function initCoupleProfile() {
  const section = document.querySelector('.couple-profile')
  if (!section) return

  const profiles = [
    { side: 'left', role: 'THE GROOM', name: wedding.groomName, photo: wedding.groomPhoto, bio: wedding.groomBio },
    { side: 'right', role: 'THE BRIDE', name: wedding.brideName, photo: wedding.bridePhoto, bio: wedding.brideBio },
  ]

  profiles.forEach(p => {
    const div = document.createElement('div')
    div.className = `profile profile--${p.side}`
    div.innerHTML = `
      <div class="profile__photo-wrap">
        <img src="${p.photo}" alt="${p.name}" class="profile__photo" loading="lazy" />
      </div>
      <div class="profile__info">
        <p class="profile__role">${p.role}</p>
        <h3 class="profile__name">${p.name}</h3>
        <div class="profile__ornament">
          <span class="profile__ornament-line"></span>
          <span class="profile__ornament-heart">♥</span>
          <span class="profile__ornament-line"></span>
        </div>
        <p class="profile__bio">${p.bio}</p>
      </div>
    `
    section.appendChild(div)
  })
}

// ─── Envelope Hero ───────────────────────────────────────────────────────────
function initEnvelopeHero() {
  const openBtn = document.getElementById('env-open-btn')
  if (!openBtn) return

  const env        = document.getElementById('env')
  const envScene   = document.getElementById('env-scene')
  const inviteCard = document.getElementById('invite-card')
  const heroScroll = document.getElementById('hero-scroll')

  // Lock scroll while envelope is showing
  document.body.style.overflow = 'hidden'

  function doOpen() {
    if (openBtn.disabled) return
    // Remove scroll-trigger listeners
    window.removeEventListener('wheel',     onScrollGesture)
    window.removeEventListener('touchmove', onScrollGesture)
    window.removeEventListener('keydown',   onScrollGesture)

    // Phase 1: open the flap
    env.classList.add('env--open')
    openBtn.disabled = true

    // Phase 2: fade out scene, reveal invitation card
    setTimeout(() => {
      envScene.classList.add('env-scene--hidden')
      inviteCard.classList.add('invite-card--visible')
      inviteCard.removeAttribute('aria-hidden')
      // Unlock scroll once card is visible
      document.body.style.overflow = ''
    }, 550)

    // Phase 3: show scroll arrow
    setTimeout(() => {
      if (heroScroll) heroScroll.style.display = 'flex'
    }, 1300)
  }

  // Trigger open on any scroll gesture (wheel, touch swipe down, keyboard scroll keys)
  function onScrollGesture(e) {
    const scrollKeys = ['ArrowDown', 'ArrowUp', 'PageDown', 'PageUp', ' ']
    if (e.type === 'keydown' && !scrollKeys.includes(e.key)) return
    e.preventDefault()
    doOpen()
  }

  window.addEventListener('wheel',     onScrollGesture, { passive: false })
  window.addEventListener('touchmove', onScrollGesture, { passive: false })
  window.addEventListener('keydown',   onScrollGesture)

  openBtn.addEventListener('click', doOpen)
}

// ─── Init ────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initEnvelopeHero()
  initCountdown()
  initCoupleProfile()
  initHomeGallery()
  initWeddingEvents()
  initGiftBox()
  initRSVP()
  initGalleryPage()
})
