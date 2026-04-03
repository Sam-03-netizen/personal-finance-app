import { TRANSACTION_CATEGORIES } from '../../constants/transactionCategories'
import './transactionForm.css'

/**
 * Reusable transaction form. Parent owns `react-hook-form` methods via `form`.
 * @param {object} props
 * @param {import('react-hook-form').UseFormReturn} props.form
 * @param {(data: object) => void} props.onSubmit — called with validated values
 * @param {boolean} [props.isSubmitting]
 * @param {string} [props.submitLabel]
 */
export default function TransactionForm({
  form,
  onSubmit,
  isSubmitting = false,
  submitLabel = 'Save transaction',
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form

  return (
    <form
      className="transaction-form"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
    >
      <div className="transaction-form__grid transaction-form__grid--2col">
        <div className="transaction-form__field transaction-form__field--full">
          <label className="transaction-form__label" htmlFor="transaction-title">
            Title
          </label>
          <input
            id="transaction-title"
            type="text"
            className="transaction-form__input"
            autoComplete="off"
            placeholder="e.g. Weekly groceries"
            {...register('title')}
            aria-invalid={errors.title ? 'true' : 'false'}
          />
          {errors.title && (
            <span className="transaction-form__error" role="alert">
              {errors.title.message}
            </span>
          )}
        </div>

        <div className="transaction-form__field">
          <label className="transaction-form__label" htmlFor="transaction-amount">
            Amount
          </label>
          <input
            id="transaction-amount"
            type="number"
            step="0.01"
            min="0"
            inputMode="decimal"
            className="transaction-form__input"
            placeholder="0.00"
            {...register('amount')}
            aria-invalid={errors.amount ? 'true' : 'false'}
          />
          {errors.amount && (
            <span className="transaction-form__error" role="alert">
              {errors.amount.message}
            </span>
          )}
        </div>

        <div className="transaction-form__field">
          <label className="transaction-form__label" htmlFor="transaction-date">
            Date
          </label>
          <input
            id="transaction-date"
            type="date"
            className="transaction-form__input"
            {...register('date')}
            aria-invalid={errors.date ? 'true' : 'false'}
          />
          {errors.date && (
            <span className="transaction-form__error" role="alert">
              {errors.date.message}
            </span>
          )}
        </div>

        <div className="transaction-form__field transaction-form__field--full">
          <label className="transaction-form__label" htmlFor="transaction-category">
            Category
          </label>
          <select
            id="transaction-category"
            className="transaction-form__select"
            {...register('category')}
            aria-invalid={errors.category ? 'true' : 'false'}
          >
            <option value="" disabled>
              Select a category
            </option>
            {TRANSACTION_CATEGORIES.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
          {errors.category && (
            <span className="transaction-form__error" role="alert">
              {errors.category.message}
            </span>
          )}
        </div>

        <div className="transaction-form__field transaction-form__field--full">
          <span className="transaction-form__label">Type</span>
          <div className="transaction-form__segment" role="group" aria-label="Transaction type">
            <label>
              <input type="radio" value="expense" {...register('type')} />
              <span className="transaction-form__segment-pill">Expense</span>
            </label>
            <label>
              <input type="radio" value="income" {...register('type')} />
              <span className="transaction-form__segment-pill">Income</span>
            </label>
          </div>
          {errors.type && (
            <span className="transaction-form__error" role="alert">
              {errors.type.message}
            </span>
          )}
        </div>

        <div className="transaction-form__field transaction-form__field--full">
          <label className="transaction-form__label" htmlFor="transaction-notes">
            Notes{' '}
            <span className="transaction-form__optional">(optional)</span>
          </label>
          <textarea
            id="transaction-notes"
            className="transaction-form__textarea"
            rows={3}
            placeholder="Add context for your records…"
            {...register('notes')}
          />
        </div>

        <div className="transaction-form__field transaction-form__field--full">
          <label className="transaction-form__check">
            <input type="checkbox" {...register('recurring')} />
            <span className="transaction-form__check-text">
              Recurring transaction
              <span className="transaction-form__check-hint">
                Mark if this repeats on a schedule (for your reference).
              </span>
            </span>
          </label>
        </div>
      </div>

      <div className="transaction-form__actions">
        <button
          type="submit"
          className="transaction-form__submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Saving…' : submitLabel}
        </button>
      </div>
    </form>
  )
}
