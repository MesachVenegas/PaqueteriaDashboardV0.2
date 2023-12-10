import { Metadata } from 'next'
import ClientsTable from "@/components/dashboard/tables/ClientsTable";
import Pagination from "@/components/dashboard/pagination/Pagination";
import SearchBar from "@/components/dashboard/search/SearchBar";
import Button from '@/components/dashboard/button/Button';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';


export const metadata: Metadata = {
  title: 'Clientes | Paqueteria 5 Estrellas',
  description: 'Dashboard App home page',
}

export default function Clients() {


  return (
    <div className="flex flex-col gap-6 p-5">
      <div className="flex w-full justify-between">
        <SearchBar placeholder="Buscar un cliente..." />
        <Button type='link' source='/dashboard/clientes/create' text="Agregar Cliente" icon={faUserPlus} />
      </div>
      <div className="flex flex-col">
        <ClientsTable />
        <Pagination />
      </div>
    </div>
  )
}
