import { toast } from 'react-toastify'

/** Use these anywhere in the app instead of importing `toast` directly. */
export function notifySuccess(message) {
  toast.success(message)
}

export function notifyError(message) {
  toast.error(message)
}

export function notifyInfo(message) {
  toast.info(message)
}
