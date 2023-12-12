import { getClients } from '@/app/libs/data';
import { ClientProps } from '@/app/libs/definitions';
import Button from '@/components/dashboard/button/Button';
import Pagination from '@/components/dashboard/pagination/Pagination';
import ClientSaleTable from '@/components/dashboard/sales/ClientSaleTable'
import SaleForm from '@/components/dashboard/sales/SaleFomr';
import SearchBar from '@/components/dashboard/search/SearchBar'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ventas | Paqueteria 5 Estrellas',
  description: 'Dashboard App home page',
}

export default async function Sales({ searchParams }: { searchParams: { search: string, page: string }}) {
  const search = searchParams?.search || '';
  const page = searchParams?.page || '1';
  const response = await getClients(search, parseInt(page));
  const { count, clients } = Array.isArray(response) ? { count: 0, clients: [] } : response;

  return (
    <div className='flex flex-col gap-4  p-6'>
      <div className='flex w-full justify-between'>
        <SearchBar placeholder='Buscar un Cliente' />
        <Button text='Agregar Cliente' icon={faUserPlus} type='button' />
      </div>
      <div className='flex gap-4'>
        <div className='flex flex-col gap-4 max-w-md w-full'>
          <ClientSaleTable data={clients as ClientProps[]}/>
          <Pagination count={count} />
        </div>
        <div>
          <SaleForm />
        </div>
      </div>
    </div>
  )
}
