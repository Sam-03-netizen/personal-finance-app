import { NavLink } from 'react-router-dom'
import { NAV_ITEMS } from '../../config/navigation'

export default function Sidebar({ isOpen, onClose }) {
  return (
    <aside
      id="app-sidebar"
      className={`sidebar ${isOpen ? 'sidebar--open' : ''}`}
      aria-label="Main navigation"
    >
      <div className="sidebar__brand">
        <span className="sidebar__brand-mark" aria-hidden>
          ◆
        </span>
        <div className="sidebar__brand-text">
          <span className="sidebar__brand-name">Personal Finance</span>
          <span className="sidebar__brand-tag">Analytics</span>
        </div>
      </div>

      <nav className="sidebar__nav" aria-label="Primary">
        <ul className="sidebar__list">
          {NAV_ITEMS.map((item) => {
            const { to, label, end, Icon: IconComponent } = item
            return (
              <li key={to}>
                <NavLink
                  to={to}
                  end={end}
                  onClick={onClose}
                  className={({ isActive }) =>
                    `sidebar__link${isActive ? ' sidebar__link--active' : ''}`
                  }
                >
                  <IconComponent className="sidebar__icon" aria-hidden />
                  <span className="sidebar__label">{label}</span>
                </NavLink>
              </li>
            )
          })}
        </ul>
      </nav>
    </aside>
  )
}
