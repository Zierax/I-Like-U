import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Generator from './pages/Generator.jsx'
import Experience from './pages/Experience.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Generator />} />
        <Route path="/create" element={<Generator />} />
        <Route path="/for/:name" element={<Experience />} />
        <Route path="/for" element={<Navigate to="/for/someone" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
