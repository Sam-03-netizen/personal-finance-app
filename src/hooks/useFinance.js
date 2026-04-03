import { useContext } from 'react'
import { FinanceContext } from '../context/financeContext'

/**
 * Access global finance state (transactions, budget, and actions).
 * Must be used inside <FinanceProvider>.
 */
export function useFinance() {
  const value = useContext(FinanceContext)
  if (value === null) {
    throw new Error('useFinance must be used within a FinanceProvider')
  }
  return value
}
