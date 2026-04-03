export default function InsightsCard({ label, value }) {
  return (
    <div className="insight-card">
      <p className="insight-card__label">{label}</p>
      <h3 className="insight-card__value">{value}</h3>
    </div>
  )
}