'use client'

import { Bounce, ToastContainer } from "react-toastify";
import 'react-toastify/ReactToastify.css';


export default function ToastNotification() {


  return (
    <>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={true}
        rtl={false}
        theme= 'colored'
        transition={Bounce}
      />
    </>
  )
}
