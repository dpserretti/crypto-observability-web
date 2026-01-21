import type { ReactNode } from 'react'
import { AuthProvider } from '../features/auth/auth.provider'

type Props = {
  children: ReactNode
}

export function AppProviders({ children }: Props) {
  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  )
}
