import { useState } from 'react'
import type { ReactNode } from 'react'
import { AuthContext } from './auth.context'

type Props = {
  children: ReactNode
}

export function AuthProvider({ children }: Props) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const login = (email: string, password: string) => {
    setIsAuthenticated(Boolean(email.trim() && password.trim()))
  }

  const logout = () => setIsAuthenticated(false)

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
