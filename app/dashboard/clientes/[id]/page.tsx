import Image from "next/image";
import Pagination from "@/components/dashboard/pagination/Pagination";
import ClientsHistory from "@/components/dashboard/tables/ClientHistory";
import { faCubes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ClientView() {
  return (
    <div className="flex flex-col gap-2 p-6">
      <div className="flex w-full bg-slate-200 rounded-lg gap-6 p-6">
        <div>
          <Image src='/assets/default-avatar.png' width={200} height={200} alt="avatar imagen"/>
        </div>
        <div className="flex w-full justify-between">
          <div className="flex flex-col gap-2">
            <h2 className="text-3xl font-semibold">Nombre del Cliente</h2>
            <p>
              <span>Correo: </span>
              example@example.com
            </p>
            <p>
              <span>Teléfono: </span>
              123 234 4566
            </p>
            <p className="flex flex-col gap-2">
              <span>Dirección: </span>
              Calle X #123, Colonia Y, Ciudad Z, Estado A, Código Postal 12345
            </p>
          </div>
          <div className="flex flex-col gap-6 justify-start items-end">
            <p>
              <span>Registrado desde: </span>
              12/12/2021
            </p>
            <p className="flex gap-2 items-end uppercase font-semibold text-xl">
              <FontAwesomeIcon icon={faCubes} className="w-7 h-7" />
              Mayorista
            </p>
          </div>
        </div>
      </div>
      <div>
        <ClientsHistory />
        <Pagination />
      </div>
    </div>
  )
}
