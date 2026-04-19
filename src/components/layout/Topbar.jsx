import { MdMenu } from 'react-icons/md'

export default function Topbar({ menuOpen, onMenuClick }) {
  return (
    <header className="topbar">
      <button
        type="button"
        className="topbar__menu-btn"
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
        aria-controls="app-sidebar"
        onClick={onMenuClick}
      >
        <MdMenu className="topbar__menu-icon" aria-hidden />
      </button>
    </header>
  )
}
