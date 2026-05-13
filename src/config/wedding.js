// ─── Edit all your wedding details here ───────────────────────────────────────
export const wedding = {
  groomName: 'Đỗ Đạt Thành',
  brideName: 'Dương Thị Thu Thủy',
  date: '2026-07-26',          // ISO format  YYYY-MM-DD
  dateDisplay: 'Chủ nhật, ngày 26 tháng 07 năm 2026',
  time: '11:00',
  venue: {
    name: 'Trung tâm Hội nghị - Tiệc cưới Diamond Place',
    address: '15A Hồ Văn Huê, Phường, Đức Nhuận, Hồ Chí Minh',
    mapUrl: 'https://maps.app.goo.gl/ffHFJQEdy8szgJbk9',
  },
  // Google Sheets form action URL
  // See: src/components/RSVPForm.jsx for setup instructions
  googleSheetFormUrl: 'https://docs.google.com/forms/d/e/YOUR_FORM_ID/formResponse',
  // Google Sheets field entry IDs (get these from your form's pre-filled link)
  googleSheetFields: {
    name: 'entry.000000001',
    guests: 'entry.000000002',
    message: 'entry.000000003',
  },
}
