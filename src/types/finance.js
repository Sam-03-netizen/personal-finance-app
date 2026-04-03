/**
 * Shared data shapes (documentation — your runtime code uses plain objects).
 *
 * @typedef {'income' | 'expense'} TransactionType
 *
 * @typedef {Object} Transaction
 * @property {string} id
 * @property {number} amount  Positive number; `type` tells income vs expense.
 * @property {string} [title]  Primary label (older rows may only have `description`).
 * @property {string} description  Legacy mirror of title for older data.
 * @property {string} category
 * @property {string} date  ISO date string (YYYY-MM-DD).
 * @property {TransactionType} type
 * @property {string} [notes]
 * @property {boolean} [recurring]
 *
 * @typedef {Object} Budget
 * @property {number} monthlyLimit
 */

export {}
