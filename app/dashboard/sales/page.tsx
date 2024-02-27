import { Metadata } from 'next'


import AddClientButton from '@/components/add-client-btn';
import ClientTableToSale from '@/components/client-sale-table';
import SearchBar from '@/components/dashboard/search/SearchBar'
import { getClientBySearch, getClientCount } from '@/data/clients';
import SaleForm from '@/components/sale-addresser-form';
import { getAllProducts } from '@/data/products';

export const metadata: Metadata = {
  title: 'Ventas | Paqueteria 5 Estrellas',
  description: 'Dashboard App home page',
}

export default async function Sales({ searchParams }: { searchParams: { search: string, page: string }}) {
  const search = searchParams?.search || '';
  const page = searchParams?.page || '1';
  const clients = await getClientBySearch(search, parseInt(page));
  const clientCount = await getClientCount();
  const products= await getAllProducts();



  return (
    <div className='flex flex-col gap-4  p-6'>
      <div className='flex w-full justify-between'>
        <SearchBar placeholder='Buscar un Cliente' />
        <AddClientButton />
      </div>
      <div className='flex flex-col 2xl:flex-row gap-4'>
        <ClientTableToSale  clients={clients} count={clientCount}/>
        <SaleForm  products={products}/>
      </div>
    </div>
  )
}
