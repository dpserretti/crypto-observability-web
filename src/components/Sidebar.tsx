import { NavLink } from 'react-router-dom'
import { useAuth } from '@/features/auth/useAuth'

export function Sidebar() {
  const { logout } = useAuth()

  return (
    <aside className="flex w-64 flex-col border-r bg-white">
      <div className="px-6 py-4 text-xl font-bold">
        CryptoApp
      </div>

      <nav className="flex-1 space-y-1 px-3">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `block rounded px-3 py-2 text-sm font-medium ${
              isActive
                ? 'bg-blue-100 text-blue-700'
                : 'text-gray-700 hover:bg-gray-100'
            }`
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            `block rounded px-3 py-2 text-sm font-medium ${
              isActive
                ? 'bg-blue-100 text-blue-700'
                : 'text-gray-700 hover:bg-gray-100'
            }`
          }
        >
          Dashboard
        </NavLink>
      </nav>

      <div className="border-t p-3">
        <button
          onClick={logout}
          className="w-full rounded bg-red-50 px-3 py-2 text-sm text-red-600 hover:bg-red-100"
        >
          Logout
        </button>
      </div>
    </aside>
  )
}
