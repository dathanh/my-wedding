import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import SubmitPage from './pages/SubmitPage'
import './App.css'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/rsvp" element={<SubmitPage />} />
    </Routes>
  )
}
