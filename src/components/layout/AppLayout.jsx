import { useState, useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Sidebar from './Sidebar'
import Topbar from './Topbar'
import './layout.css'

/**
 * App shell: fixed sidebar (desktop) or drawer (mobile), top bar, and page content.
 * Child routes render inside <Outlet />.
 */
export default function AppLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const id = requestAnimationFrame(() => {
      setSidebarOpen(false)
    })
    return () => cancelAnimationFrame(id)
  }, [location.pathname])

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 767px)')
    if (!sidebarOpen || !mq.matches) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [sidebarOpen])

  return (
    <div className="app-shell">
      <Sidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      {/* Mobile only: tap outside to close drawer (hidden on desktop via CSS) */}
      <button
        type="button"
        className={`sidebar-backdrop${sidebarOpen ? ' sidebar-backdrop--visible' : ''}`}
        aria-label="Close menu"
        tabIndex={sidebarOpen ? 0 : -1}
        onClick={() => setSidebarOpen(false)}
      />

      <div className="app-shell__content">
        <Topbar
          menuOpen={sidebarOpen}
          onMenuClick={() => setSidebarOpen((open) => !open)}
        />
        <div className="app-shell__page">
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            >
              <Outlet />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
