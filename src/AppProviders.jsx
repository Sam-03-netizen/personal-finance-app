import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { FinanceProvider } from './context/FinanceProvider'

/**
 * Wraps the app with routing, global finance state, and toasts.
 * Add more providers (theme, auth, etc.) here later.
 */
export default function AppProviders({ children }) {
  return (
    <BrowserRouter>
      <FinanceProvider>
        {children}
        <ToastContainer
          position="top-right"
          autoClose={4000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          pauseOnHover
          draggable
          theme="light"
        />
      </FinanceProvider>
    </BrowserRouter>
  )
}
