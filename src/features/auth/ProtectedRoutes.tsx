import { Navigate } from 'react-router-dom'
import { useAuth } from './useAuth'

export function ProtectedRoutes({ children }: { children: JSX.Element }) {
  const { isAuthenticated } = useAuth()

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />
  }

  return children
}
