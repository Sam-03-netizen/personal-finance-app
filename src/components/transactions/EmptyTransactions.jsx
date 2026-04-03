import { FiInbox } from 'react-icons/fi'
import { Link } from 'react-router-dom'

export default function EmptyTransactions() {
  return (
    <div className="empty-state">
      <div className="empty-state__icon">
        <FiInbox size={40} />
      </div>

      <h2>No transactions yet</h2>
      <p>
        Start tracking your money by adding your first income or expense.
      </p>

      <Link to="/add-transaction" className="btn btn-primary">
        Add Transaction
      </Link>
    </div>
  )
}