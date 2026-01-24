import { useAuth } from '@/features/auth/useAuth'

export function HomePage() {
  const { logout } = useAuth()

    return (
      <>
        <button onClick={logout}>Logout</button>
        <h1>Home</h1>
        <p>Welcome to Crypto Observability</p>
      </>
    )
  }
