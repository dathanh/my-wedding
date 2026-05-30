// ─── Edit all your wedding details here ───────────────────────────────────────
export const wedding = {
  groomName: 'Đỗ Đạt Thành',
  brideName: 'Dương Thị Thu Thuỷ',
  date: '2026-07-26',          // ISO format  YYYY-MM-DD  (ngày tiệc nhà trai)
  dateDisplay: 'Chủ nhật, ngày 26 tháng 07 năm 2026',
  time: '11:00',
  venue: {
    name: 'Trung tâm Hội nghị - Tiệc cưới Diamond Place',
    address: 'Sảnh Diamond 1',
    mapUrl: 'https://maps.app.goo.gl/ffHFJQEdy8szgJbk9',
  },

  // ─── Couple profiles ────────────────────────────────────────────────────────
  groomPhoto: '/my-wedding/groom.jpg',   // place photo in public/
  bridePhoto: '/my-wedding/bride.jpg',
  groomBio: 'Là một người hiền lành, chân thành và luôn hết lòng vì gia đình. Thích du lịch, khám phá những miền đất mới và tận hưởng những khoảnh khắc bình yên bên người thân.',
  brideBio: 'Là một người dịu dàng, hay cười và sống hết mình vì những người mình yêu thương. Thích nấu ăn, chụp ảnh và lưu giữ từng kỷ niệm đẹp của cuộc đời.',
  groomParents: {
    father: 'Ông Đỗ Văn Tươi',
    mother: 'Bà Phan Thị Kim Yến',
    address: 'Tân Sơn, TP. Hồ Chí Minh',
  },
  brideParents: {
    father: 'Ông Dương Văn Đại',
    mother: 'Bà Võ Thị Hoa',
    address: 'Xuân Quế, Thành phố Đồng Nai',
  },

  // ─── Love story ─────────────────────────────────────────────────────────────
  loveStory: 'Thật vui vì được gặp và đón tiếp các bạn trong một dịp đặc biệt – Ngày cưới của chúng mình. Chúng mình muốn gửi đến bạn những lời cảm ơn sâu sắc nhất và để bạn biết rằng chúng mình rất hạnh phúc khi thấy bạn ở đó. Cảm ơn các bạn rất nhiều vì sự hiện diện cùng những lời chúc tốt đẹp mà bạn đã dành cho chúng mình nhé!',

  // ─── Wedding events ──────────────────────────────────────────────────────────
  events: [
    // ── Nhà Trai ──
    {
      name: 'LỄ THÀNH HÔN',
      side: 'Nhà Trai',
      time: '10:00',
      date: 'Thứ Ba, 21/07/2026',
      lunarDate: '08/06/2026 (Bính Ngọ)',
      venue: 'Tư Gia',
      address: 'Tân Sơn, TP. Hồ Chí Minh',
      mapUrl: '',
    },
    {
      name: 'TIỆC CƯỚI',
      side: 'Nhà Trai',
      time: '11:00',        // đón khách
      diningTime: '12:00',  // khai tiệc
      date: 'Chủ Nhật, 26/07/2026',
      lunarDate: '13/06/2026 (Bính Ngọ)',
      venue: 'Trung tâm Hội nghị - Tiệc cưới Diamond Place',
      address: 'Sảnh Diamond 1',
      mapUrl: 'https://maps.app.goo.gl/ffHFJQEdy8szgJbk9',
    },
    // ── Nhà Gái ──
    {
      name: 'LỄ VU QUY',
      side: 'Nhà Gái',
      time: '09:00',
      date: 'Chủ Nhật, 19/07/2026',
      lunarDate: '06/06/2026 (Bính Ngọ)',
      venue: 'Tư Gia',
      address: 'Xuân Quế, Thành phố Đồng Nai',
      mapUrl: '',
    },
    {
      name: 'TIỆC CƯỚI',
      side: 'Nhà Gái',
      time: '11:00',        // đón khách
      date: 'Chủ Nhật, 19/07/2026',
      lunarDate: '06/06/2026 (Bính Ngọ)',
      venue: 'Tư Gia',
      address: 'Xuân Quế, Thành phố Đồng Nai',
      mapUrl: '',
    },
  ],

  // ─── Gift / bank info ────────────────────────────────────────────────────────
  gift: {
    groom: {
      bank: 'Vietcombank',
      name: 'Đỗ Đạt Thành',
      account: '1234567890',
      qrImage: '/my-wedding/qr-groom.jpg',  // optional
    },
    bride: {
      bank: 'MB Bank',
      name: 'Dương Thị Thu Thủy',
      account: '0987654321',
      qrImage: '/my-wedding/qr-bride.jpg',  // optional
    },
    note: 'Nếu có thể, bạn hãy tới tham dự đám cưới, chung vui và mừng cưới trực tiếp cho chúng mình nhé. Cảm ơn bạn rất nhiều!',
  },

  // ─── Google Sheets RSVP ──────────────────────────────────────────────────────
  // See: src/components/RSVPForm.jsx for setup instructions
  googleSheetFormUrl: 'https://docs.google.com/forms/d/e/YOUR_FORM_ID/formResponse',
  // Google Sheets field entry IDs (get these from your form's pre-filled link)
  googleSheetFields: {
    name: 'entry.000000001',
    guests: 'entry.000000002',
    message: 'entry.000000003',
  },
}
