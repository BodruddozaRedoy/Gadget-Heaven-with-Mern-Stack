import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routes.jsx'
import { ToastContainer } from 'react-toastify'
import CartContextProvider from './context/CartContext.jsx'

createRoot(document.getElementById('root')).render(
    <CartContextProvider>
        <RouterProvider router={router}/>
        <ToastContainer/>
    </CartContextProvider>
)
