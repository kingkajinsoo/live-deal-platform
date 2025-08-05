import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import LivePage from './pages/LivePage'
import ProductsPage from './pages/ProductsPage'
import SellersPage from './pages/SellersPage'

// 대시보드 페이지 임포트
import BuyerDashboard from './pages/dashboard/buyer/BuyerDashboard'
import LiverDashboard from './pages/dashboard/seller/SellerDashboard'
import PartnersDashboard from './pages/dashboard/supplier/SupplierDashboard'
import AdminDashboard from './pages/dashboard/admin/AdminDashboard'

import './App.css'

function App() {
  return (
    <Routes>
      {/* 메인 페이지 라우트 */}
      <Route path="/" element={<Layout><HomePage /></Layout>} />
      <Route path="/live" element={<Layout><LivePage /></Layout>} />
      <Route path="/products" element={<Layout><ProductsPage /></Layout>} />
      <Route path="/sellers" element={<Layout><SellersPage /></Layout>} />
      
      {/* 대시보드 페이지 라우트 */}
      <Route path="/dashboard/buyer" element={<BuyerDashboard />} />
      <Route path="/dashboard/seller" element={<LiverDashboard />} />
      <Route path="/dashboard/supplier" element={<PartnersDashboard />} />
      <Route path="/dashboard/admin" element={<AdminDashboard />} />
    </Routes>
  )
}

export default App

