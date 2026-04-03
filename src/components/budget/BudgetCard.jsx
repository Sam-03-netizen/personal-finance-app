function formatCurrency(amount) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(Number(amount || 0))
}

export default function BudgetCard({
  monthlyLimit,
  totalSpent,
  remainingBudget,
  usagePercent,
}) {
  const isOverBudget = remainingBudget < 0

  return (
    <div className="budget-card">
      <div className="budget-card__top">
        <div>
          <p className="budget-card__label">Monthly Budget</p>
          <h2 className="budget-card__amount">
            {formatCurrency(monthlyLimit)}
          </h2>
        </div>

        <div className="budget-card__summary">
          <div>
            <span>Spent</span>
            <strong>{formatCurrency(totalSpent)}</strong>
          </div>
          <div>
            <span>Remaining</span>
            <strong
              className={
                isOverBudget
                  ? 'budget-card__remaining budget-card__remaining--danger'
                  : 'budget-card__remaining'
              }
            >
              {formatCurrency(remainingBudget)}
            </strong>
          </div>
        </div>
      </div>

      <div className="budget-progress">
        <div
          className={`budget-progress__fill ${
            isOverBudget ? 'budget-progress__fill--danger' : ''
          }`}
          style={{ width: `${usagePercent}%` }}
        />
      </div>

      <p className="budget-card__usage">
        {usagePercent.toFixed(0)}% of your monthly budget used
      </p>

      {isOverBudget && (
        <p className="budget-card__warning">
          ⚠ You have exceeded your monthly budget.
        </p>
      )}
    </div>
  )
}