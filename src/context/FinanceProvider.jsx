import { useCallback, useMemo, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { FinanceContext } from './financeContext'
import {
  loadBudgetOrDefault,
  loadTransactionsOrSeed,
  saveBudget,
  saveTransactions,
} from '../utils/financeStorage'

export function FinanceProvider({ children }) {
  const [transactions, setTransactions] = useState(loadTransactionsOrSeed)
  const [budget, setBudgetState] = useState(loadBudgetOrDefault)

  const addTransaction = useCallback((input) => {
    const title = String(input.title ?? input.description ?? '').trim()
    const transaction = {
      id: uuidv4(),
      title,
      amount: typeof input.amount === 'number' ? input.amount : Number(input.amount),
      description: title,
      category: String(input.category ?? '').trim(),
      date: String(input.date ?? ''),
      type: input.type === 'income' ? 'income' : 'expense',
      notes: String(input.notes ?? '').trim(),
      recurring: Boolean(input.recurring),
    }

    setTransactions((prev) => {
      const next = [...prev, transaction]
      saveTransactions(next)
      return next
    })
  }, [])

  const deleteTransaction = useCallback((id) => {
    setTransactions((prev) => {
      const next = prev.filter((t) => t.id !== id)
      saveTransactions(next)
      return next
    })
  }, [])

  const updateTransaction = useCallback((id, updates) => {
    setTransactions((prev) => {
      const next = prev.map((t) => {
        if (t.id !== id) return t
        const merged = { ...t, ...updates, id: t.id }
        if (updates.amount !== undefined) {
          merged.amount =
            typeof updates.amount === 'number'
              ? updates.amount
              : Number(updates.amount)
        }
        if (updates.title !== undefined) {
          merged.title = String(updates.title).trim()
          merged.description = merged.title
        } else if (updates.description !== undefined) {
          merged.description = String(updates.description).trim()
          merged.title = merged.description
        }
        if (updates.notes !== undefined) {
          merged.notes = String(updates.notes).trim()
        }
        if (updates.recurring !== undefined) {
          merged.recurring = Boolean(updates.recurring)
        }
        if (updates.category !== undefined) {
          merged.category = String(updates.category).trim()
        }
        if (updates.date !== undefined) {
          merged.date = String(updates.date)
        }
        if (updates.type !== undefined) {
          merged.type = updates.type === 'income' ? 'income' : 'expense'
        }
        return merged
      })
      saveTransactions(next)
      return next
    })
  }, [])

  const setBudget = useCallback((updates) => {
    setBudgetState((prev) => {
      const next = { ...prev, ...updates }
      if (updates.monthlyLimit !== undefined) {
        next.monthlyLimit =
          typeof updates.monthlyLimit === 'number'
            ? updates.monthlyLimit
            : Number(updates.monthlyLimit)
      }
      saveBudget(next)
      return next
    })
  }, [])

  const value = useMemo(
    () => ({
      transactions,
      budget,
      addTransaction,
      deleteTransaction,
      updateTransaction,
      setBudget,
    }),
    [
      transactions,
      budget,
      addTransaction,
      deleteTransaction,
      updateTransaction,
      setBudget,
    ],
  )

  return (
    <FinanceContext.Provider value={value}>{children}</FinanceContext.Provider>
  )
}
