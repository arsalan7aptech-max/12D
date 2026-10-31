import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import {ToastContainer, Zoom } from 'react-toastify'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <ToastContainer
position="top-center"
autoClose={5000}
limit={2}
hideProgressBar
newestOnTop
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"
transition={Zoom}
/>
    <App />
    </BrowserRouter>
  </StrictMode>
)
