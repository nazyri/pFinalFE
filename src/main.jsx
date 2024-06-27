import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Registro from './Registro.jsx'
import Login from './Login.jsx'

const router= createBrowserRouter([
  {
    path:"/",
    element: <Registro/>
  },
  {
    path:"/Login",
    element: <Login/>
  },
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router}/>
  </React.StrictMode>,
)
