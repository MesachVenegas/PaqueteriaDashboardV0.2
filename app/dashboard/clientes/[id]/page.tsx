import Image from "next/image";
import Pagination from "@/components/dashboard/pagination/Pagination";
import ClientsHistory from "@/components/dashboard/tables/ClientHistory";
import { faCube, faCubes, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getClient } from "@/app/libs/data";
import { format } from "date-fns";
import { es } from 'date-fns/locale';
import { ClientProps } from "@/app/libs/definitions";
import Button from "@/components/dashboard/button/Button";

export default async function ClientView({ params }: { params: { id: string }}) {
  const clientId = params.id;
  const count = 0
  const client = await getClient(clientId) as ClientProps;

  return (
    <div className="flex flex-col gap-2 p-6">
      <div className="flex w-full bg-slate-200 rounded-lg gap-6 p-6">
        <div>
          <Image src='/assets/default-avatar.png' width={200} height={200} alt="avatar imagen"/>
        </div>
        <div className="flex w-full justify-between">
          <div className="flex flex-col gap-2">
            <h2 className="text-3xl font-semibold">{client?.name} {client?.last_name}</h2>
            <p>
              <span>Correo: </span>
              {client?.email}
            </p>
            <p>
              <span>Teléfono: </span>
              {client?.phone}
            </p>
            <p className="flex flex-col gap-2">
              <span>Dirección: </span>
              {client?.address}
            </p>
          </div>
          <div className="flex flex-col gap-6 justify-start items-end">
            <p className="capitalize">
              <span>Registrado desde: </span>
              {client?.registerAt && format(client?.registerAt, "dd/MMMM/yyyy hh:mm b", { locale: es })}
            </p>
            <p className="flex gap-2 items-end uppercase font-semibold text-xl">
              {
                client?.type === 'wholesaler'
                ? (
                  <>
                    <FontAwesomeIcon icon={faCubes} className="w-7 h-7" />
                    <span>Mayorista</span>
                  </>
                  )
                : (
                  <>
                    <FontAwesomeIcon icon={faCube} className="w-7 h-7" />
                    <span>Minorista</span>
                  </>
                )
              }
            </p>
            <div className="flex gap-6">
              <Button text="Editar" icon={faEdit} type="button"/>
              <Button text="Eliminar" icon={faTrash} type="button" color="red" />
            </div>
          </div>
        </div>
      </div>
      <div>
        <ClientsHistory />
        <Pagination count={count} />
      </div>
    </div>
  )
}
