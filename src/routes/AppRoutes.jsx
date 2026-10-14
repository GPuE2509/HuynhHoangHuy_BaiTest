import { Routes, Route } from 'react-router-dom'
import { MainLayout } from '../layouts/MainLayout'
import { HomePage } from '../pages/HomePage'
import { DetailPage } from '../pages/DetailPage'

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/detail" element={<DetailPage />} />
        {/* Fallback to HomePage */}
        <Route path="*" element={<HomePage />} />
      </Route>
    </Routes>
  )
}
