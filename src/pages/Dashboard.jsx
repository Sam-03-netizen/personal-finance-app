import { useContext } from 'react'
import StatCard from '../components/dashboard/StatCard'
import SpendingPieChart from '../components/dashboard/SpendingPieChart'
import { FinanceContext } from '../context/financeContext'
import {
  getCategorySpendingData,
  getNetBalance,
  getTopSpendingCategory,
  getTotalExpenses,
  getTotalIncome,
} from '../utils/analytics'

function formatCurrency(amount) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(Number(amount || 0))
}

export default function Dashboard() {
  const { transactions } = useContext(FinanceContext)

  const totalIncome = getTotalIncome(transactions)
  const totalExpenses = getTotalExpenses(transactions)
  const netBalance = getNetBalance(transactions)
  const topCategory = getTopSpendingCategory(transactions)
  const categorySpendingData = getCategorySpendingData(transactions)

  return (
    <div className="page">
      <div className="page-header">
        <div>
          <p className="page-eyebrow">Financial Overview</p>
          <h1>Dashboard</h1>
          <p className="page-subtitle">
            Get a quick snapshot of your income, expenses, balance, and spending
            habits.
          </p>
        </div>
      </div>

      <div className="stats-grid">
        <StatCard
          label="Total Income"
          value={formatCurrency(totalIncome)}
          accent="green"
        />
        <StatCard
          label="Total Expenses"
          value={formatCurrency(totalExpenses)}
          accent="red"
        />
        <StatCard
          label="Net Balance"
          value={formatCurrency(netBalance)}
          accent="blue"
        />
        <StatCard
          label="Top Spending Category"
          value={topCategory}
          accent="purple"
        />
      </div>
      <SpendingPieChart data={categorySpendingData} />
    </div>
  )
}