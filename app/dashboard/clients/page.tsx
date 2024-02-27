import { Suspense } from 'react';
import { Metadata } from 'next'
import Pagination from "@/components/Pagination";
import SearchBar from "@/components/dashboard/search/SearchBar";
import ClientsTable from '@/components/clients-table';
import { getClientBySearch, getClientCount } from '@/data/clients';
import AddClientButton from '@/components/add-client-btn';


export const metadata: Metadata = {
  title: 'Clientes | Paqueteria 5 Estrellas',
  description: 'Dashboard App home page',
}

export default async function Clients({ searchParams }: { searchParams: { search: string, page: string }}) {
  const search = searchParams?.search || '';
  const page = searchParams?.page || '1';
  const clients = await getClientBySearch(search, parseInt(page));
  const count = await getClientCount();

  return (
    <div className="flex flex-col gap-6 p-5">
      <div className="flex w-full justify-between">
        <SearchBar placeholder="Buscar un cliente..." />
        <AddClientButton />
      </div>
      <div className="flex flex-col">
        <Suspense fallback={<span>Cargando...</span>}>
          <ClientsTable clients={clients} />
          <Pagination count={count}/>
        </Suspense>
      </div>
    </div>
  )
}
