import React from 'react'
import ReactDOM from 'react-dom/client'
import { AppProviders } from '../src/app/providers'
import { RouterProvider } from 'react-router-dom'
import { router } from '../src/app/router'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppProviders>
      <RouterProvider router={router} />
    </AppProviders>
  </React.StrictMode>
)
