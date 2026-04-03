export function getTotalSpent(transactions) {
  return transactions
    .filter((t) => t.type === 'expense')
    .reduce((sum, t) => sum + Number(t.amount || 0), 0)
}

export function getRemainingBudget(monthlyLimit, totalSpent) {
  return Number(monthlyLimit || 0) - Number(totalSpent || 0)
}

export function getBudgetUsagePercent(monthlyLimit, totalSpent) {
  if (!monthlyLimit || Number(monthlyLimit) <= 0) return 0

  const percent = (Number(totalSpent || 0) / Number(monthlyLimit)) * 100
  return Math.min(percent, 100)
}