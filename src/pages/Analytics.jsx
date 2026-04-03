import { useContext } from 'react'
import InsightsCard from '../components/analytics/InsightsCard'
import IncomeExpenseBarChart from '../components/analytics/IncomeExpenseBarChart'
import { FinanceContext } from '../context/financeContext'
import {
  getAverageExpense,
  getIncomeVsExpenseData,
  getRecurringTransactionsCount,
  getTotalTransactions,
} from '../utils/analytics'

function formatCurrency(amount) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(Number(amount || 0))
}

export default function Analytics() {
  const { transactions } = useContext(FinanceContext)

  const totalTransactions = getTotalTransactions(transactions)
  const recurringTransactions = getRecurringTransactionsCount(transactions)
  const averageExpense = getAverageExpense(transactions)
  const incomeVsExpenseData = getIncomeVsExpenseData(transactions)

  return (
    <div className="page">
      <div className="page-header">
        <div>
          <p className="page-eyebrow">Financial Insights</p>
          <h1>Analytics</h1>
          <p className="page-subtitle">
            Explore deeper patterns in your transactions and financial habits.
          </p>
        </div>
      </div>

      <div className="insights-grid">
        <InsightsCard
          label="Total Transactions"
          value={totalTransactions}
        />
        <InsightsCard
          label="Recurring Transactions"
          value={recurringTransactions}
        />
        <InsightsCard
          label="Average Expense"
          value={formatCurrency(averageExpense)}
        />
      </div>

      <IncomeExpenseBarChart data={incomeVsExpenseData} />
    </div>
  )
}