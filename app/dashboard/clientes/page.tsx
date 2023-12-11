import { Suspense } from 'react';
import { Metadata } from 'next'
import ClientsTable from "@/components/dashboard/tables/ClientsTable";
import Pagination from "@/components/dashboard/pagination/Pagination";
import SearchBar from "@/components/dashboard/search/SearchBar";
import Button from '@/components/dashboard/button/Button';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { getClients } from '@/app/libs/data';
import { ClientProps } from '@/app/libs/definitions';


export const metadata: Metadata = {
  title: 'Clientes | Paqueteria 5 Estrellas',
  description: 'Dashboard App home page',
}

export default async function Clients({ searchParams }: { searchParams: { search: string, page: string }}) {
  const search = searchParams?.search || '';
  const page = searchParams?.page || '1';
  const response = await getClients(search, parseInt(page));
  const { count, clients } = Array.isArray(response) ? { count: 0, clients: [] } : response;

  return (
    <div className="flex flex-col gap-6 p-5">
      <div className="flex w-full justify-between">
        <SearchBar placeholder="Buscar un cliente..." />
        <Button type='link' source='/dashboard/clientes/create' text="Agregar Cliente" icon={faUserPlus} />
      </div>
      <div className="flex flex-col">
        <Suspense fallback={<span>Cargando...</span>}>
          <ClientsTable data={clients as ClientProps[]} />
        </Suspense>
        <Pagination count={count}/>
      </div>
    </div>
  )
}
