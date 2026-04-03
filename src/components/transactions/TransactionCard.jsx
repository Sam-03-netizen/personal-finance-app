import { format } from 'date-fns'
import { FiEdit2, FiRepeat, FiTag, FiTrash2 } from 'react-icons/fi'

function formatAmount(amount, type) {
  const formatted = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(Number(amount || 0))

  return type === 'income' ? `+ ${formatted}` : `- ${formatted}`
}

export default function TransactionCard({ transaction, onDelete }) {
  const {
    title,
    amount,
    category,
    date,
    type,
    recurring,
    notes,
  } = transaction

  const safeDate = date ? format(new Date(date), 'dd MMM yyyy') : 'No date'

  return (
    <div className="transaction-card">
      <div className="transaction-card__top">
        <div>
          <h3 className="transaction-card__title">{title}</h3>

          <div className="transaction-card__meta">
            <span className="transaction-chip transaction-chip--category">
              <FiTag size={14} />
              {category}
            </span>

            <span
              className={`transaction-chip ${
                type === 'income'
                  ? 'transaction-chip--income'
                  : 'transaction-chip--expense'
              }`}
            >
              {type}
            </span>

            {recurring && (
              <span className="transaction-chip transaction-chip--recurring">
                <FiRepeat size={14} />
                Recurring
              </span>
            )}
          </div>
        </div>

        <div className="transaction-card__amount-block">
          <p
            className={`transaction-card__amount ${
              type === 'income'
                ? 'transaction-card__amount--income'
                : 'transaction-card__amount--expense'
            }`}
          >
            {formatAmount(amount, type)}
          </p>
          <span className="transaction-card__date">{safeDate}</span>
        </div>
      </div>

      {notes && <p className="transaction-card__notes">{notes}</p>}

      <div className="transaction-card__actions">
        <button className="btn btn-secondary" type="button" disabled>
          <FiEdit2 size={16} />
          Edit
        </button>

        <button
          className="btn btn-danger"
          type="button"
          onClick={() => onDelete(transaction.id)}
        >
          <FiTrash2 size={16} />
          Delete
        </button>
      </div>
    </div>
  )
}