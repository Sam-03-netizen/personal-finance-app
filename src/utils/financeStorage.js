import { STORAGE_KEYS } from '../constants/storageKeys'
import { DEFAULT_BUDGET } from '../constants/financeDefaults'
import { buildSeedTransactions } from '../data/seedTransactions'

function readJson(key) {
  if (typeof window === 'undefined') return null
  try {
    const raw = window.localStorage.getItem(key)
    if (raw === null || raw === '') return null
    return JSON.parse(raw)
  } catch {
    return null
  }
}

function writeJson(key, value) {
  if (typeof window === 'undefined') return
  try {
    window.localStorage.setItem(key, JSON.stringify(value))
  } catch {
    // Quota exceeded or private mode — state still works for the session
  }
}

/** @returns {object[] | null} */
export function loadTransactions() {
  const data = readJson(STORAGE_KEYS.TRANSACTIONS)
  if (!Array.isArray(data)) return null
  return data
}

export function saveTransactions(transactions) {
  writeJson(STORAGE_KEYS.TRANSACTIONS, transactions)
}

/** @returns {object | null} */
export function loadBudget() {
  const data = readJson(STORAGE_KEYS.BUDGET)
  if (!data || typeof data !== 'object') return null
  return data
}

export function saveBudget(budget) {
  writeJson(STORAGE_KEYS.BUDGET, budget)
}

/**
 * First app load: no transactions key → seed + persist.
 * @returns {object[]}
 */
export function loadTransactionsOrSeed() {
  const existing = loadTransactions()
  if (existing !== null) return existing
  const seeded = buildSeedTransactions()
  saveTransactions(seeded)
  return seeded
}

/**
 * First app load: no budget key → default + persist.
 * @returns {object}
 */
export function loadBudgetOrDefault() {
  const existing = loadBudget()
  if (existing !== null) return { ...DEFAULT_BUDGET, ...existing }
  const initial = { ...DEFAULT_BUDGET }
  saveBudget(initial)
  return initial
}
