'use client'

import { faBell, faComment, faEarthAmerica, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { usePathname } from "next/navigation"

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="flex justify-between items-center bg-slate-200 dark:bg-slate-950 rounded-lg p-5">
      <div className="font-bold text-3xl">
        Bienvenid@! Hoy es {format(new Date(), 'PPPP', { locale: es })}
      </div>
      {/* Busqueda & Notificaciones */}
      <div className="flex justify-center items-center gap-4">
        <div className="flex bg-slate-300/50 dark:bg-slate-600 gap-2 p-2 rounded-lg">
          <FontAwesomeIcon icon={faSearch} className="w-5 h-5" />
          <input type="search" name="search" placeholder="Buscar..." className="bg-transparent focus:border-none focus:outline-none"/>
        </div>

        <div className="flex gap-2">
          <span>
            <FontAwesomeIcon icon={faComment} className="w-5 h-5" />
          </span>
          <span>
            <FontAwesomeIcon icon={faBell} className="w-5 h-5" />
          </span>
          <span>
            <FontAwesomeIcon icon={faEarthAmerica} className="w-5 h-5" />
          </span>
        </div>
      </div>
    </nav>
  )
}
