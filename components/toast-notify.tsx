'use client'

import { ToastContainer, Bounce } from 'react-toastify';
import 'react-toastify/ReactToastify.css';


export default function ToastNotify() {
  return (
    <ToastContainer
      position='bottom-right'
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      pauseOnFocusLoss
      pauseOnHover
      theme='colored'
      transition={Bounce}
    />
  )
}
