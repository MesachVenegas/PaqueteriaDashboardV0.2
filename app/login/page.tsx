import Image from "next/image";
import Button from "@/components/dashboard/button/Button";
import { faLockOpen, faRightToBracket, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Login() {
  return (
    <div className="flex justify-center items-center w-full h-screen">
      <div className="flex flex-col max-w-md w-full h-min gap-4 shadow-xl bg-gray-200 rounded-lg p-6 relative">
        <div className="absolute bg-slate-50 rounded-full top-[-30%] left-1/3 w-36 h-36">
          <Image src='/assets/logo_start_blue.png' width={150} height={150} alt="Paqueteria 5 Estrellas"/>
        </div>
        <h1 className="text-xl text-center text-gray-700 mt-8">Iniciar Session</h1>
        <form action="" className="flex flex-col justify-center items-center gap-6 px-12">
          <div className="flex flex-col gap-2 w-full">
            <small>Usuario</small>
            <label className="flex gap-2">
              <FontAwesomeIcon icon={faUser} className="w-5 h-5 text-gray-600"/>
              <input type="text" name="username" placeholder="John Doe" className="w-full p-1 rounded-lg border border-transparent focus:outline-none focus:border-slate-500" required/>
            </label>
          </div>
          <div className="flex flex-col gap-2 w-full">
            <small>Contraseña</small>
            <label className="flex gap-2">
              <FontAwesomeIcon icon={faLockOpen} className="w-5 h-5 text-gray-600"/>
              <input type="password" placeholder="*********" className="w-full p-1 rounded-lg border border-transparent focus:outline-none focus:border-slate-500" required/>
            </label>
          </div>
          <Button type="button" icon={faRightToBracket} text="Iniciar Session"/>
          <small className="italic w-full text-xs underline text-gray-600">Si olvido su contraseña contacte a su administrador</small>
        </form>
        <div className="border border-red-400 rounded-md p-2 bg-red-300">
          Errores
        </div>
      </div>
    </div>
  )
}
