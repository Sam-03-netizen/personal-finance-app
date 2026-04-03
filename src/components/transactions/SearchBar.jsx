import { FiSearch } from 'react-icons/fi'

export default function SearchBar({ value, onChange }) {
  return (
    <div className="search-bar">
      <FiSearch className="search-bar__icon" size={18} />
      <input
        type="text"
        placeholder="Search by title or notes..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="search-bar__input"
      />
    </div>
  )
}