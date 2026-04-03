import { Routes, Route, Navigate } from 'react-router-dom'
import AppLayout from '../components/layout/AppLayout'
import Dashboard from '../pages/Dashboard'
import Transactions from '../pages/Transactions'
import AddTransaction from '../pages/AddTransaction'
import Budget from '../pages/Budget'
import Analytics from '../pages/Analytics'

/**
 * All app URLs live in one place — easy to find and change later.
 */
export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="transactions" element={<Transactions />} />
        <Route path="add-transaction" element={<AddTransaction />} />
        <Route path="budget" element={<Budget />} />
        <Route path="analytics" element={<Analytics />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )
}
