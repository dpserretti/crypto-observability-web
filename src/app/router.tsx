import { createBrowserRouter } from 'react-router-dom'
import LoginPage from '@/pages/LoginPage'
import { HomePage } from '@/pages/HomePage'
import DashboardPage from '@/pages/DashboardPage'
import { ProtectedRoutes } from '@/features/auth/ProtectedRoutes'
import AppLayout from '@/layouts/AppLayout'
import { AuthLayout } from '@/layouts/AuthLayout'

export const router = createBrowserRouter([
  {
    element: <AuthLayout />,
    children: [
      {
        path: '/login',
        element: <LoginPage />,
      },
    ],
  },
  {
    element: <ProtectedRoutes />,
    children: [
      {
        element: <AppLayout />,
        children: [
          {
            path: '/',
            element: <HomePage />,
          },
          {
            path: '/dashboard',
            element: <DashboardPage />,
          },
        ],
      },
    ],
  },
])
