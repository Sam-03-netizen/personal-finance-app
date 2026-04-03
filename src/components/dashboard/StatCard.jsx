export default function StatCard({ label, value, accent = 'blue' }) {
  return (
    <div className={`stat-card stat-card--${accent}`}>
      <p className="stat-card__label">{label}</p>
      <h2 className="stat-card__value">{value}</h2>
    </div>
  )
}