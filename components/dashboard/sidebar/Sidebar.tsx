'use client'

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { menuLinks } from "@/app/libs/utils";
import { faMoon, faPersonWalkingArrowRight, faSun } from "@fortawesome/free-solid-svg-icons";
import { SessionProps } from "@/app/libs/definitions";
import { useEffect, useState } from "react";


export default function Sidebar({ closeSession, userSignIn } : {closeSession: () => void , userSignIn: SessionProps  } ) {
  const pathname = usePathname();
  const user  = userSignIn;
  const themePreference = typeof window !== 'undefined' ? localStorage.getItem('dark') : 'false';
  const [theme, setTheme] = useState( themePreference === 'true' ? true : false );
  const [themeName, setThemeName] = useState("Dark");

  const handleTheme = () => {
    const body = document.getElementsByTagName('body');
    body[0].classList.toggle('dark')
    localStorage.setItem("dark", `${!theme}`);
    setTheme(!theme)
  }

  console.log(user);

  useEffect( () => {
    const body = document.getElementsByTagName('body');

    if(themePreference == 'true'){
      body[0].classList.add('dark')
      setThemeName('Light')
    } else {
      body[0].classList.remove('dark')
      setThemeName('Dark')
    }

  },[theme, themePreference, themeName])


  return (
    <div className="flex flex-col w-64 justify-start items-start h-full bg-slate-200 dark:bg-slate-950 dark:text-white shadow-xl">
      {/* User Info */}
      <div className="flex items-center gap-2 p-4 mt-4">
        <Image
          className="w-10 h-10 rounded-full"
          src="/assets/avatar.png"
          alt="User"
          width={38}
          height={38}
        />
        <div className="flex flex-col gap-1">
          <p className="text-sm font-medium">{user.name}</p>
          {/* { user.is_admin ? "Administrador": "Usuario"} */}
          <p className="text-xs">Rol de Usuario Logeado</p>
        </div>
      </div>
      {
        // Menu Principal
        menuLinks.map( (link, index) => (
          <div key={index} className="flex flex-col w-full p-4 gap-2">
            <h4 className="text-sm">{link.title}</h4>
            <ul className="flex flex-col w-full gap-2">
              {
                link.links.map( (option, index) =>{
                  if(option.user !== user.is_admin){
                    return (
                        <li key={index}>
                          <Link
                            href={option.url}
                            className={
                              `flex w-full h-full gap-2 px-3 py-2 rounded-md text-sm font-medium  hover:bg-blue-400/60 dark:hover:bg-yellow-500/90 dark:hover:text-black hover:text-black transition-all duration-300 ease-in-out
                              ${pathname === option.url ? 'bg-blue-500/80 dark:bg-yellow-500 dark:text-black text-white' : 'text-gray-600 dark:text-gray-200'}`
                            }
                          >
                            <FontAwesomeIcon  icon={option.icon} className="w-5 h-5"/>
                            {option.title}
                          </Link>
                        </li>
                      )
                    }else if(option.admin === user.is_admin){
                      return (
                        <li key={index}>
                          <Link
                            href={option.url}
                            className={
                              `flex w-full h-full gap-2 px-3 py-2 rounded-md text-sm font-medium  hover:bg-blue-400/60 dark:hover:bg-yellow-500/90 dark:hover:text-black hover:text-black transition-all duration-300 ease-in-out
                              ${pathname === option.url ? 'bg-blue-500/80 dark:bg-yellow-500 dark:text-black text-white' : 'text-gray-600 dark:text-gray-200'}`
                            }
                          >
                            <FontAwesomeIcon  icon={option.icon} className="w-5 h-5"/>
                            {option.title}
                          </Link>
                        </li>
                      )
                    }
                  }
                )
              }
            </ul>
          </div>
        ))
      }
      {/* menu de sesion y tema */}
      <div className="flex flex-grow w-full items-end p-4">
        <ul className="flex justify-between items-center w-full px-4 gap-4">
          <li className="">
            <button className="flex gap-2 text-sm font-medium text-gray-600 dark:text-gray-200 py-2 px-3 rounded-md hover:bg-slate-900 dark:hover:bg-slate-200 hover:text-white dark:hover:text-black border border-gray-700" onClick={handleTheme}>
              <FontAwesomeIcon  icon={theme ? faSun : faMoon} className="w-5 h-5"/>
              {themeName}
            </button>
          </li>
          <li className="">
            <form action={closeSession}>
              <button className="flex gap-2 text-sm font-medium text-red-600 dark:text-red-400 py-2 px-3 rounded-md hover:bg-red-600  hover:text-white dark:hover:text-white border border-red-600 dark:border-red-400 dark:hover:border-transparent">
                <FontAwesomeIcon  icon={faPersonWalkingArrowRight} className="w-5 h-5"/>
                Salir
              </button>
            </form>
          </li>
        </ul>
      </div>
    </div>
  );
}
