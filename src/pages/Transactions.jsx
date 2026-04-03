import { useContext, useMemo, useState } from 'react'
import { toast } from 'react-toastify'
import TransactionCard from '../components/transactions/TransactionCard'
import EmptyTransactions from '../components/transactions/EmptyTransactions'
import SearchBar from '../components/transactions/SearchBar'
import TransactionFilters from '../components/transactions/TransactionFilters'
import { FinanceContext } from '../context/financeContext'

export default function Transactions() {
  const { transactions, deleteTransaction } = useContext(FinanceContext)

  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedType, setSelectedType] = useState('all')

  const categories = useMemo(() => {
    const uniqueCategories = [...new Set(transactions.map((t) => t.category))]
    return uniqueCategories.filter(Boolean)
  }, [transactions])

  const filteredTransactions = useMemo(() => {
    return transactions
      .filter((transaction) => {
        const matchesSearch =
          transaction.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          transaction.notes.toLowerCase().includes(searchQuery.toLowerCase())

        const matchesCategory =
          selectedCategory === 'all' ||
          transaction.category === selectedCategory

        const matchesType =
          selectedType === 'all' || transaction.type === selectedType

        return matchesSearch && matchesCategory && matchesType
      })
      .slice()
      .reverse()
  }, [transactions, searchQuery, selectedCategory, selectedType])

  const handleDelete = (id) => {
    deleteTransaction(id)
    toast.success('Transaction deleted successfully')
  }

  return (
    <div className="page">
      <div className="page-header">
        <div>
          <p className="page-eyebrow">Money Activity</p>
          <h1>Transactions</h1>
          <p className="page-subtitle">
            View, manage, and track all your income and expenses in one place.
          </p>
        </div>
      </div>

      <SearchBar value={searchQuery} onChange={setSearchQuery} />

      <TransactionFilters
        selectedCategory={selectedCategory}
        selectedType={selectedType}
        onCategoryChange={setSelectedCategory}
        onTypeChange={setSelectedType}
        categories={categories}
      />

      {filteredTransactions.length === 0 ? (
        <EmptyTransactions />
      ) : (
        <div className="transactions-grid">
          {filteredTransactions.map((transaction) => (
            <TransactionCard
              key={transaction.id}
              transaction={transaction}
              onDelete={handleDelete}
            />
          ))}
        </div>
      )}
    </div>
  )
}