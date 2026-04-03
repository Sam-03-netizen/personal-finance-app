import { useContext, useState } from 'react'
import { toast } from 'react-toastify'
import BudgetCard from '../components/budget/BudgetCard'
import { FinanceContext } from '../context/financeContext'
import {
  getBudgetUsagePercent,
  getRemainingBudget,
  getTotalSpent,
} from '../utils/budget'

export default function Budget() {
  const { transactions, budget, setBudget } = useContext(FinanceContext)
  const [monthlyLimit, setMonthlyLimit] = useState(budget.monthlyLimit || '')

  const totalSpent = getTotalSpent(transactions)
  const remainingBudget = getRemainingBudget(monthlyLimit, totalSpent)
  const usagePercent = getBudgetUsagePercent(monthlyLimit, totalSpent)

  const handleSaveBudget = (e) => {
    e.preventDefault()

    if (!monthlyLimit || Number(monthlyLimit) <= 0) {
      toast.error('Please enter a valid monthly budget')
      return
    }

    setBudget({ monthlyLimit: Number(monthlyLimit) })
    toast.success('Monthly budget updated successfully')
  }

  return (
    <div className="page">
      <div className="page-header">
        <div>
          <p className="page-eyebrow">Budget Planning</p>
          <h1>Budget</h1>
          <p className="page-subtitle">
            Set your monthly budget and keep track of your spending progress.
          </p>
        </div>
      </div>

      <form className="budget-form" onSubmit={handleSaveBudget}>
        <div className="budget-form__group">
          <label htmlFor="monthlyLimit" className="budget-form__label">
            Monthly Budget
          </label>
          <input
            id="monthlyLimit"
            type="number"
            min="0"
            placeholder="Enter monthly budget"
            value={monthlyLimit}
            onChange={(e) => setMonthlyLimit(e.target.value)}
            className="budget-form__input"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Save Budget
        </button>
      </form>

      <BudgetCard
        monthlyLimit={monthlyLimit}
        totalSpent={totalSpent}
        remainingBudget={remainingBudget}
        usagePercent={usagePercent}
      />
    </div>
  )
}