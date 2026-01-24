import { createBrowserRouter } from 'react-router-dom'
import { ProtectedRoutes } from '@/features/auth/ProtectedRoutes'
import LoginPage from '@/pages/LoginPage'
import { HomePage } from '@/pages/HomePage'

export const router = createBrowserRouter([
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    element: <ProtectedRoutes />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
    ],
  },
])
