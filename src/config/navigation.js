import {
  MdSpaceDashboard,
  MdReceiptLong,
  MdAddCircleOutline,
  MdAccountBalanceWallet,
  MdInsights,
} from 'react-icons/md'

/**
 * Single source of truth for sidebar labels, routes, and topbar titles.
 */
export const NAV_ITEMS = [
  {
    to: '/',
    label: 'Dashboard',
    title: 'Dashboard',
    end: true,
    Icon: MdSpaceDashboard,
  },
  {
    to: '/transactions',
    label: 'Transactions',
    title: 'Transactions',
    Icon: MdReceiptLong,
  },
  {
    to: '/add-transaction',
    label: 'Add Transaction',
    title: 'Add Transaction',
    Icon: MdAddCircleOutline,
  },
  {
    to: '/budget',
    label: 'Budget',
    title: 'Budget',
    Icon: MdAccountBalanceWallet,
  },
  {
    to: '/analytics',
    label: 'Analytics',
    title: 'Analytics',
    Icon: MdInsights,
  },
]
