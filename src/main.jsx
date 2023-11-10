import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import AuthProvider from './All-JSX/Provider/AuthProvider.jsx'
import { RouterProvider } from 'react-router-dom'
import { MainRoute } from './All-JSX/Route/MainRoute.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={MainRoute}/>
    </AuthProvider>
  </React.StrictMode>,
)
