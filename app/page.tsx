'use client'

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

export default function Home() {
  const themePreference = typeof window !== 'undefined' ? localStorage.getItem('dark') : 'false';

  useEffect( () => {
    const body = document.getElementsByTagName('body');

    if(themePreference == 'true'){
    body[0].classList.add('dark')
    } else {
    body[0].classList.remove('dark')
    }

  },[themePreference])


  return (
    <main className="flex min-h-screen flex-col p-6 dark:bg-slate-800">
      <div className="flex h-20 shrink-0 items-center rounded-lg bg-blue-800 dark:bg-blue-950 p-3 md:h-52 md:pl-8">
        <div className="relative flex w-[150px] h-full md:h-[100px] md:w-[300px]">
          <Image
            src="/assets/logo_foot.png"
            fill={ true}
            alt="logo Paqueteria 5 estrellas"
            priority
          />
        </div>
      </div>
      {/* welcome */}
      <div className="mt-4 flex grow flex-col gap-4 lg:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 dark:bg-gray-900 px-6 py-10 lg:w-2/5 lg:px-20">
          <p className={`text-xl text-gray-800 dark:text-gray-300 md:text-3xl lg:leading-normal`}>
            <strong>Paqueteria 5 Estrellas</strong>
            <br />
            Bienvenid@ para poder comenzar por favor inicia sesion
          </p>
          <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg bg-blue-800 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-500 md:text-base"
          >
            <span>Iniciar Session</span>
          </Link>
        </div>
        {/* image */}
        <div className="flex items-center justify-center p-6 lg:w-3/5 lg:px-28 lg:py-12">
          <Image
            src="/assets/cobertura.png"
            width={800}
            height={600}
            alt='Screenshots of the dashboard project showing desktop and mobile versions'
          />
        </div>
      </div>
    </main>
  )
}