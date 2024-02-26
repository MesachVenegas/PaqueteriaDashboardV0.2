'use client'

import { useEffect } from "react";

import Image from "next/image";

import LoginForm from "@/components/login-form";


export default function Login() {
  const themePreference = typeof window !== 'undefined' ? localStorage.getItem('dark') : 'false';

  useEffect( () => {
    const body = document.getElementsByTagName('body');
    themePreference == 'true' ? body[0].classList.add('dark') : body[0].classList.remove('dark')

  },[themePreference])



  return (
    <div className="flex justify-center dark:bg-slate-800 items-center w-full h-screen">
      <div className="flex flex-col max-w-md w-full h-min gap-4 shadow-xl bg-gray-200 dark:bg-slate-900 rounded-lg p-6 relative">
        <div className="absolute flex justify-center items-center bg-slate-50 dark:bg-slate-100 rounded-full top-[-25%] left-1/3 w-36 h-36 p-2">
          <Image src='/assets/logo_start_blue.png' width={150} height={150} alt="Paqueteria 5 Estrellas" style={{ objectFit: 'cover'}}/>
        </div>
        <h1 className="text-xl text-center text-gray-700 dark:text-gray-100  mt-8">Iniciar Session</h1>
        <LoginForm/>
      </div>
    </div>
  )
}
