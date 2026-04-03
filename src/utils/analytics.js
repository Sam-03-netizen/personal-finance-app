export function getTotalIncome(transactions) {
  return transactions
    .filter((t) => t.type === 'income')
    .reduce((sum, t) => sum + Number(t.amount || 0), 0)
}

export function getTotalExpenses(transactions) {
  return transactions
    .filter((t) => t.type === 'expense')
    .reduce((sum, t) => sum + Number(t.amount || 0), 0)
}

export function getNetBalance(transactions) {
  return getTotalIncome(transactions) - getTotalExpenses(transactions)
}

export function getTopSpendingCategory(transactions) {
  const expenses = transactions.filter((t) => t.type === 'expense')

  if (expenses.length === 0) return 'No expenses yet'

  const categoryTotals = expenses.reduce((acc, transaction) => {
    const category = transaction.category || 'Other'
    acc[category] = (acc[category] || 0) + Number(transaction.amount || 0)
    return acc
  }, {})

  const topCategory = Object.entries(categoryTotals).sort(
    (a, b) => b[1] - a[1]
  )[0]

  return topCategory ? topCategory[0] : 'No expenses yet'
}
export function getCategorySpendingData(transactions) {
  const expenses = transactions.filter((t) => t.type === 'expense')

  const categoryTotals = expenses.reduce((acc, transaction) => {
    const category = transaction.category || 'Other'
    acc[category] = (acc[category] || 0) + Number(transaction.amount || 0)
    return acc
  }, {})

  return Object.entries(categoryTotals).map(([name, value]) => ({
    name,
    value,
  }))
}
export function getTotalTransactions(transactions) {
  return transactions.length
}

export function getRecurringTransactionsCount(transactions) {
  return transactions.filter((t) => t.recurring).length
}

export function getAverageExpense(transactions) {
  const expenses = transactions.filter((t) => t.type === 'expense')

  if (expenses.length === 0) return 0

  const totalExpenses = expenses.reduce(
    (sum, transaction) => sum + Number(transaction.amount || 0),
    0
  )

  return totalExpenses / expenses.length
}

export function getIncomeVsExpenseData(transactions) {
  const income = getTotalIncome(transactions)
  const expense = getTotalExpenses(transactions)

  return [
    { name: 'Income', value: income },
    { name: 'Expense', value: expense },
  ]
}