import { v4 as uuidv4 } from 'uuid'

/**
 * Realistic starter data used only when localStorage has no transactions yet.
 * Each run assigns fresh UUIDs so IDs stay unique per install.
 */
export function buildSeedTransactions() {
  return [
    {
      id: uuidv4(),
      amount: 4200,
      title: 'Salary deposit',
      description: 'Salary deposit',
      category: 'Income',
      date: '2026-03-01',
      type: 'income',
      notes: '',
      recurring: true,
    },
    {
      id: uuidv4(),
      amount: 124.38,
      title: 'Weekly groceries',
      description: 'Weekly groceries',
      category: 'Food & dining',
      date: '2026-03-05',
      type: 'expense',
      notes: '',
      recurring: false,
    },
    {
      id: uuidv4(),
      amount: 48.0,
      title: 'Mobile & internet',
      description: 'Mobile & internet',
      category: 'Bills & utilities',
      date: '2026-03-06',
      type: 'expense',
      notes: '',
      recurring: true,
    },
    {
      id: uuidv4(),
      amount: 32.5,
      title: 'City transit pass',
      description: 'City transit pass',
      category: 'Transport',
      date: '2026-03-08',
      type: 'expense',
      notes: '',
      recurring: false,
    },
    {
      id: uuidv4(),
      amount: 89.99,
      title: 'Pharmacy & essentials',
      description: 'Pharmacy & essentials',
      category: 'Health',
      date: '2026-03-12',
      type: 'expense',
      notes: 'Vitamins',
      recurring: false,
    },
    {
      id: uuidv4(),
      amount: 150,
      title: 'Freelance invoice',
      description: 'Freelance invoice',
      category: 'Income',
      date: '2026-03-18',
      type: 'income',
      notes: '',
      recurring: false,
    },
    {
      id: uuidv4(),
      amount: 64.2,
      title: 'Coffee & lunch out',
      description: 'Coffee & lunch out',
      category: 'Food & dining',
      date: '2026-03-22',
      type: 'expense',
      notes: '',
      recurring: false,
    },
  ]
}
