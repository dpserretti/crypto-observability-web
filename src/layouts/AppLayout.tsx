import { NavLink, Outlet } from 'react-router-dom'
import { useAuth } from '@/features/auth/useAuth'

export default function AppLayout() {
  const { logout } = useAuth()

  return (
    <div className="flex h-screen bg-zinc-900 text-zinc-100">
      {/* Sidebar */}
      <aside className="w-64 bg-zinc-800 border-r border-zinc-700 flex flex-col">
        <div className="px-6 py-5 text-xl font-bold border-b border-zinc-700">
          CryptoApp
        </div>

        <nav className="flex-1 px-4 py-6 space-y-2">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `block rounded px-3 py-2 text-sm font-medium ${
                isActive
                  ? 'bg-zinc-700 text-white'
                  : 'text-zinc-300 hover:bg-zinc-700'
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
                  ? 'bg-zinc-700 text-white'
                  : 'text-zinc-300 hover:bg-zinc-700'
              }`
            }
          >
            Dashboard
          </NavLink>
        </nav>

        <div className="p-4 border-t border-zinc-700">
          <button
            onClick={logout}
            className="w-full rounded bg-red-600 px-3 py-2 text-sm font-medium hover:bg-red-700 transition"
          >
            Logout
          </button>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-y-auto p-8">
        <Outlet />
      </main>
    </div>
  )
}
