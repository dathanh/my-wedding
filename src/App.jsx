import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import SubmitPage from './pages/SubmitPage'
import PreWeddingPage from './pages/PreWeddingPage'
import WeddingDayPage from './pages/WeddingDayPage'
import './App.css'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/rsvp" element={<SubmitPage />} />
      <Route path="/gallery/pre-wedding" element={<PreWeddingPage />} />
      <Route path="/gallery/wedding-day" element={<WeddingDayPage />} />
    </Routes>
  )
}
