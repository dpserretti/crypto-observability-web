import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { api } from '@/services/api'
import { useAuth } from '@/features/auth/useAuth'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { login } = useAuth()
  const navigate = useNavigate()

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    const response = await api.post('/auth/login', {
      username: email,
      password,
    })

    login(response.data.access_token)
    navigate('/')
  }

  return (
    <>
      <h1 className="mb-6 text-center text-2xl font-bold">
        Sign in
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          className="w-full rounded border px-3 py-2 text-sm"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          className="w-full rounded border px-3 py-2 text-sm"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="submit"
          className="w-full rounded bg-blue-600 py-2 text-white hover:bg-blue-700"
        >
          Login
        </button>
      </form>
    </>
  )
}
