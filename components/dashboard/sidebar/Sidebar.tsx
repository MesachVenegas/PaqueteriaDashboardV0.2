'use client'

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { menuLinks } from "@/app/libs/utils";
import { faMoon, faPersonWalkingArrowRight } from "@fortawesome/free-solid-svg-icons";
import { SessionProps } from "@/app/libs/definitions";


export default function Sidebar({ closeSession, userSignIn } : {closeSession: () => void , userSignIn: SessionProps } ) {
  const pathname = usePathname();
  const { user } = userSignIn;

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
          <p className="text-xs">{ user.is_admin ? "Administrador": "Usuario"}</p>
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
            <button className="flex gap-2 text-sm font-medium text-gray-600 dark:text-gray-200 p-2 rounded-md hover:bg-slate-900 dark:hover:bg-slate-200 hover:text-white dark:hover:text-black">
              <FontAwesomeIcon  icon={faMoon} className="w-5 h-5"/>
              Dark
            </button>
          </li>
          <li className="">
            <form action={closeSession}>
              <button className="flex gap-2 text-sm font-medium text-gray-600 dark:text-gray-200 p-2 rounded-md hover:bg-red-600  hover:text-white">
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
