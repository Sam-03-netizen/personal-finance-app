import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { format } from 'date-fns'
import { useNavigate } from 'react-router-dom'
import TransactionForm from '../components/transactions/TransactionForm'
import { useFinance } from '../hooks/useFinance'
import { notifySuccess } from '../utils/toastHelpers'
import { transactionFormSchema } from '../validation/transactionFormSchema'

export default function AddTransaction() {
  const navigate = useNavigate()
  const { addTransaction } = useFinance()

  const form = useForm({
    resolver: yupResolver(transactionFormSchema),
    defaultValues: {
      title: '',
      amount: '',
      category: '',
      date: format(new Date(), 'yyyy-MM-dd'),
      type: 'expense',
      notes: '',
      recurring: false,
    },
  })

  const {
    formState: { isSubmitting },
  } = form

  function onSubmit(data) {
    addTransaction({
      title: data.title,
      amount: data.amount,
      category: data.category,
      date: data.date,
      type: data.type,
      notes: data.notes || '',
      recurring: data.recurring,
    })
    notifySuccess('Transaction saved successfully.')
    navigate('/transactions', { replace: true })
  }

  return (
    <div className="page add-transaction-page">
      <div className="add-transaction-page__intro">
        <h1>Add transaction</h1>
        <p>Record income or spending. Fields marked required must be filled in.</p>
      </div>
      <TransactionForm
        form={form}
        onSubmit={onSubmit}
        isSubmitting={isSubmitting}
        submitLabel="Add transaction"
      />
    </div>
  )
}
