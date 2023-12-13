import { Metadata } from 'next'
import { getClients, getProducts } from '@/app/libs/data';
import { ClientProps } from '@/app/libs/definitions';
import Button from '@/components/dashboard/button/Button';
import ClientSalePoint from '@/components/dashboard/sales/clientSale/ClientSalePoint';
import SearchBar from '@/components/dashboard/search/SearchBar'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';

export const metadata: Metadata = {
  title: 'Ventas | Paqueteria 5 Estrellas',
  description: 'Dashboard App home page',
}

export default async function Sales({ searchParams }: { searchParams: { search: string, page: string }}) {
  const search = searchParams?.search || '';
  const page = searchParams?.page || '1';
  const response = await getClients(search, parseInt(page));
  const { count, clients } = Array.isArray(response) ? { count: 0, clients: [] } : response;
  const responseProducts = await getProducts(parseInt(page), search);
  const { products, countProducts } = Array.isArray(responseProducts) ? { countProducts: 0, products: [] } : responseProducts;


  return (
    <div className='flex flex-col gap-4  p-6'>
      <div className='flex w-full justify-between'>
        <SearchBar placeholder='Buscar un Cliente' />
        <Button text='Agregar Cliente' icon={faUserPlus} type='button' />
      </div>
      <div className='flex flex-col xl:flex-row gap-4'>
        <ClientSalePoint clients={clients as ClientProps[]} count={count} prices={products} />
      </div>
    </div>
  )
}
