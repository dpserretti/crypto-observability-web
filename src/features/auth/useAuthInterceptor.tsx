import { useEffect } from 'react'
import { api } from '@/services/api'
import { useAuth } from '@/features/auth/useAuth'

export function useAuthInterceptor() {
  const { token } = useAuth()

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
}
