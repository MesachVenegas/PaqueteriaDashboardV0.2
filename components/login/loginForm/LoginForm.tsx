'use client'

import Button from "@/components/dashboard/button/Button";
import { faLockOpen, faRightToBracket, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function LoginForm({handleLogin} : {handleLogin: (data: Iterable<readonly [PropertyKey, any]>) => void} ) {

  return (
    <>
      <form action={handleLogin} className="flex flex-col justify-center items-center gap-6 px-12">
        <div className="flex flex-col gap-2 w-full">
          <small className="dark:text-gray-100 " >Usuario</small>
          <label className="flex items-center gap-2">
            <FontAwesomeIcon icon={faUser} className="w-5 h-5 text-gray-600 dark:text-gray-100 "/>
            <input
              type="text"
              name="username"
              placeholder="Nombre de Usuario"
              className="w-full p-1 rounded-lg border border-transparent focus:outline-none focus:border-slate-500 dark:text-gray-100 dark:bg-slate-700"
              required
            />
          </label>
        </div>
        <div className="flex flex-col gap-2 w-full">
          <small className="dark:text-gray-100 ">Contraseña</small>
          <label className="flex items-center gap-2">
            <FontAwesomeIcon icon={faLockOpen} className="w-5 h-5 text-gray-600 dark:text-gray-100 "/>
            <input
              type="password"
              name="password"
              placeholder="*********"
              className="w-full p-1 rounded-lg border border-transparent focus:outline-none focus:border-slate-500 dark:text-gray-100 dark:bg-slate-700"
              required
            />
          </label>
        </div>
        <Button type="button" icon={faRightToBracket} text="Iniciar Session"/>
        <small className="italic w-full text-xs underline text-gray-600 dark:text-gray-100 ">Si olvido su contraseña contacte a su administrador</small>
      </form>
    </>
  )
}
