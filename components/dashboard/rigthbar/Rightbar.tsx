'use client'

import Image from "next/image";
import { faEye} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";

export default function Rightbar() {
  const router = useRouter();

  return (
    <div className="flex flex-col gap-6">
      <div className="relative flex flex-col w-full p-6 bg-slate-200 rounded-lg dark:text-gray-100 dark:bg-slate-950">
        <div className="absolute right-4 bottom-1 opacity-80 z-0">
          <Image src='/assets/logo_no_bg.png' width={150} height={150} alt="Logo paqueteria" />
        </div>
        <div className="z-40">
          <div className="flex flex-col gap-2 p-2">
            <span className="flex gap-2 font-medium text-sm">🔥 Disponible Ahora!</span>
            <h3 className="font-semibold text-lg">Seccion de Ventas ya disponible!</h3>
            <small>07/12/2023</small>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet, doloribus nemo temporibus aut nam excepturi iure nesciunt.</p>
          </div>
          <button className="flex w-36 justify-center items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-2 px-3 rounded-lg mt-6" onClick={() => router.push('/dashboard/ventas') }>
            <FontAwesomeIcon icon={faEye} />
            Ver Ahora!
          </button>
        </div>
      </div>
    </div>
  )
}
