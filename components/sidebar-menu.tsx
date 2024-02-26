'use client'

import { useEffect, useState } from "react";

import Link from "next/link";
import { signOut } from "next-auth/react";
import { usePathname } from "next/navigation";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartBar, faGear, faLifeRing, faMoon, faPersonWalkingArrowRight, faSun } from "@fortawesome/free-solid-svg-icons";

import { menuLinks } from "@/lib/constants";
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger
} from '@/components/ui/menubar';
import { useCurrentUser } from "@/hooks/useCurrentUser";


export default function Sidebar() {
  const pathname = usePathname();
  const user = useCurrentUser();
  const themePreference = typeof window !== 'undefined' ? localStorage.getItem('dark') : 'false';
  const [theme, setTheme] = useState( themePreference === 'true' ? true : false );
  const [themeName, setThemeName] = useState("Dark");

  const handleTheme = () => {
    const body = document.getElementsByTagName('body');
    body[0].classList.toggle('dark')
    localStorage.setItem("dark", `${!theme}`);
    setTheme( prev => !prev)
  }



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
    <>
      {/* Desktop navigation menu */}
      <div className="hidden lg:flex flex-col w-64 justify-start items-start h-full bg-slate-200 dark:bg-slate-950 dark:text-white shadow-xl sticky top-0 left-0">
        <div className="flex items-center gap-2 p-4 mt-4">
          <Avatar className="w-12 h-12">
            {
              user?.image ? (
                <AvatarImage src={user?.image} alt="avatar image" />
              ) : (
                <AvatarFallback>
                  {`${user?.name?.split(' ')[0][0]}${user?.name?.split(' ')[1][0]}`}
                </AvatarFallback>
              )
            }
          </Avatar>
          <div className="flex flex-col gap-1">
            <p className="text-sm font-medium capitalize">{user?.name}</p>
            <p className="text-xs">{user?.role === 'admin' ? 'Administrador' : 'Usuario'}</p>
          </div>
        </div>

        {
          menuLinks.map( (link, index) => (
            <div key={index} className="flex flex-col w-full p-4 gap-2">
              <h4 className="text-sm capitalize font-bold">{link.title}</h4>
              <ul className="flex flex-col w-full gap-2">
                {
                  link.links.map( (option, index) => (
                    <li key={index}>
                      <Link
                        href={option.url}
                        className={
                          `flex w-full h-full gap-2 px-3 py-2 rounded-md text-sm font-medium  hover:bg-blue-400/60 dark:hover:bg-yellow-500/90 dark:hover:text-black hover:text-black transition-all duration-300 ease-in-out group
                          ${pathname === option.url ? 'active-menu' : 'inactive-menu'}`
                        }
                      >
                        <FontAwesomeIcon
                          icon={option.icon}
                          className={`w-5 h-5 ${option.title === 'ajustes' || option.title ===  'ayuda' ? 'group-hover:animate-spin' : 'group-hover:animate-bounce'}`}
                        />
                        <span className="capitalize">{option.title}</span>
                      </Link>
                    </li>
                  ))
                }
              </ul>
            </div>
          ))
        }
        {/* Cambio de tema y cierre de session */}
        <div className="flex flex-grow w-full items-end p-4">
          <ul className="flex justify-between items-center w-full px-4 gap-4">
            <li className="">
              <button type="button" className="flex gap-2 text-sm font-medium text-gray-600 dark:text-gray-200 py-2 px-3 rounded-md hover:bg-slate-900 dark:hover:bg-slate-200 hover:text-white dark:hover:text-black border border-gray-700" onClick={handleTheme}>
                <FontAwesomeIcon  icon={theme ? faSun : faMoon} className="w-5 h-5"/>
                {themeName}
              </button>
            </li>
            <li>
                <button
                  type="button"
                  className="flex gap-2 text-sm font-medium text-red-600 dark:text-red-400 py-2 px-3 rounded-md hover:bg-red-600  hover:text-white dark:hover:text-white border border-red-600 dark:border-red-400 dark:hover:border-transparent"
                  onClick={ () => signOut({
                    callbackUrl: '/'
                  })}
                >
                  <FontAwesomeIcon  icon={faPersonWalkingArrowRight} className="w-5 h-5"/>
                  Salir
                </button>
            </li>
          </ul>
        </div>
      </div>

      {/* Mobile menu navigation */}
      <div className="flex lg:hidden items-center justify-between w-full h-20 bg-slate-200/80 dark:bg-slate-950/50 backdrop-blur-md p-4 ">
        <div className="flex flex-row items-center">
        {
          menuLinks.map( menu => (
            <div key={menu.title} className="flex gap-2">
              {
                menu.title === 'principal' ? (
                  menu.links.map( link => (
                    // Enlaces principales
                    <Link href={link.url} key={link.title}
                      className={`flex w-full h-full min-w-[48px] min-h-[48px]  items-center justify-center gap-2 px-3 py-2 rounded-md text-sm font-medium  hover:bg-blue-400/60 dark:hover:bg-yellow-500/90 dark:hover:text-black hover:text-black transition-all duration-300 ease-in-out border ${pathname === link.url ? 'active-menu' : 'inactive-menu'}`}
                      title={link.title}
                    >
                      <FontAwesomeIcon icon={link.icon} className="w-5 h-5" />
                      <span className="hidden md:flex capitalize">{link.title}</span>
                    </Link>
                  ))
                ) : (
                  // Menu de Analítica
                  <Menubar className="flex w-full h-full bg-transparent border-none">
                      {
                        menu.title !== 'principal' && menu.title !== 'usuario' ? (
                          <MenubarMenu>
                            <MenubarTrigger className="flex w-full h-full min-w-[48px] min-h-[48px] items-center gap-2 px-3 py-2 rounded-md text-sm font-medium  capitalize hover:bg-blue-400/60 dark:hover:bg-yellow-500/90 dark:hover:text-black hover:text-black transition-all duration-300 ease-in-out border cursor-pointer" title='reportes' >
                              <FontAwesomeIcon icon={faChartBar} className="w-5 h-5" />
                            </MenubarTrigger>
                            <MenubarContent>
                              {
                                menu.links.map( link => (
                                  <Link key={link.title} href={link.url} className="flex items-center min-h-[32px]  gap-2" >
                                    <MenubarItem key={link.title} className="menu-item" >
                                      <FontAwesomeIcon icon={link.icon} className="w-4 h-4" />
                                      {link.title}
                                    </MenubarItem>
                                  </Link>
                                ))
                              }
                            </MenubarContent>
                          </MenubarMenu>
                        ) : null
                      }
                  </Menubar>
                )
              }
            </div>
          ))
        }
        </div>

        {/* Menu desplegable de ajustes y cierre de session */}
        <Menubar className="bg-transparent border-none">
          <MenubarMenu>
            <MenubarTrigger className="flex justify-center items-center w-12 h-12 rounded-full bg-transparent cursor-pointer">
              <Avatar className="w-12 h-12">
                {
                  user?.image ? (
                    <AvatarImage src={user?.image} alt="avatar image" />
                  ) : (
                    <AvatarFallback>
                      {`${user?.name?.split(' ')[0][0]}${user?.name?.split(' ')[1][0]}`}
                    </AvatarFallback>
                  )
                }
              </Avatar>
            </MenubarTrigger>
            <MenubarContent>
              <div className="px-4 py-2">
                <ul className="flex text-sm w-full flex-col items-end capitalize">
                  <li>{user?.name}</li>
                  <li>{user?.role === 'admin' ? 'Administrador' : 'Usuario'}</li>
                </ul>
              </div>
              <MenubarSeparator className="mb-4" />
              <Link href='/dashboard/settings' className="flex w-full" >
                <MenubarItem className="menu-item">
                    <FontAwesomeIcon  icon={faGear} className="w-5 h-5"/>
                    ajustes
                </MenubarItem>
              </Link>
              <Link href='/dashboard/help' className="flex w-full">
                <MenubarItem className="menu-item">
                    <FontAwesomeIcon  icon={faLifeRing} className="w-5 h-5"/>
                    ayuda
                </MenubarItem>
              </Link>
              <MenubarItem
                className="flex w-full min-h-[28px] items-center gap-2 capitalize hover:bg-gray-900 dark:hover:bg-yellow-500/90 focus:hover:bg-gray-900 focus:hover:text-white focus:text-white dark:focus:hover:text-black dark:focus:text-black  rounded-sm p-2"
                onClick={handleTheme}
              >
                <FontAwesomeIcon  icon={theme ? faSun : faMoon} className="w-5 h-5"/>
                {themeName}
              </MenubarItem>
              <MenubarItem
                className="flex w-full min-h-[28px] items-center gap-2 capitalize hover:bg-red-600 dark:hover:bg-red-700 focus:hover:bg-red-700 focus:text-white rounded-sm p-2"
                onClick={ () => signOut({ callbackUrl: '/'})}
              >
                <FontAwesomeIcon  icon={faPersonWalkingArrowRight} className="w-5 h-5"/>
                salir
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </div>
    </>
  );
}
