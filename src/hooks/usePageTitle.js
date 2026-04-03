import { useMemo } from 'react'
import { useLocation } from 'react-router-dom'
import { NAV_ITEMS } from '../config/navigation'

/**
 * Maps the current URL to the page title shown in the top bar.
 */
export function usePageTitle() {
  const { pathname } = useLocation()

  return useMemo(() => {
    const match = NAV_ITEMS.find((item) =>
      item.end ? pathname === item.to : pathname === item.to,
    )
    return match?.title ?? 'Personal Finance'
  }, [pathname])
}
