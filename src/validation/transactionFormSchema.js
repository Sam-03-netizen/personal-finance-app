import * as yup from 'yup'

function parseAmount(value, originalValue) {
  if (originalValue === '' || originalValue === null || originalValue === undefined) {
    return undefined
  }
  const n = typeof originalValue === 'number' ? originalValue : parseFloat(String(originalValue))
  return Number.isNaN(n) ? undefined : n
}

export const transactionFormSchema = yup.object({
  title: yup.string().trim().required('Title is required'),
  amount: yup
    .number()
    .transform(parseAmount)
    .typeError('Enter a valid amount')
    .positive('Amount must be greater than zero')
    .required('Amount is required'),
  category: yup.string().trim().required('Category is required'),
  date: yup.string().required('Date is required'),
  type: yup
    .string()
    .oneOf(['income', 'expense'], 'Choose income or expense')
    .required('Transaction type is required'),
  notes: yup.string().trim().default(''),
  recurring: yup.boolean().default(false),
})
