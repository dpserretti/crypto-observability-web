import { useEffect, useState } from 'react'
import type { ReactNode } from 'react'
import { AuthContext } from '@/features/auth/auth.context'
import { api } from '@/services/api'

type Props = {
  children: ReactNode
}

export function AuthProvider({ children }: Props) {
  const [token, setToken] = useState<string | null>(
    () => localStorage.getItem('access_token')
  )

  const isAuthenticated = Boolean(token)

  function login(accessToken: string) {
    localStorage.setItem('access_token', accessToken)
    setToken(accessToken)
  }

  function logout() {
    localStorage.removeItem('access_token')
    setToken(null)
  }

  useEffect(() => {
    const interceptor = api.interceptors.request.use((config) => {
      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }
      return config
    })

    return () => {
      api.interceptors.request.eject(interceptor)
    }
  }, [token])

  return (
    <AuthContext.Provider
      value={{ token, isAuthenticated, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  )
}
