import { Metadata } from 'next'

import { faBoxesPacking } from '@fortawesome/free-solid-svg-icons'

import { ProductProps } from '@/app/libs/definitions'
import { getProductsBySearch, getProductsCount } from '@/data/products'
import Button from '@/components/dashboard/button/Button'
import SearchBar from '@/components/dashboard/search/SearchBar'
import Pagination from '@/components/Pagination'
import ProductsTable from '@/components/dashboard/tables/ProductsTable'
import AddProductButton from '@/components/add-product-btn'

export const metadata: Metadata = {
  title: 'Productos | Paqueteria 5 Estrellas',
  description: 'Dashboard App home page',
}


export default async function Products({ searchParams }: { searchParams: { search: string, page: string }}) {
  const search = searchParams?.search || '';
  const page = searchParams?.page || '1';
  const products = await getProductsBySearch(parseInt(page), search);
  const count = await getProductsCount();

  return (
    <div className="flex flex-col gap-6 p-5">
      <div className="flex w-full justify-between">
        <SearchBar placeholder="Buscar un producto..." />
        <AddProductButton />
      </div>
      <div className="flex flex-col">
        <ProductsTable products={products as ProductProps[]} count={count}/>
        <Pagination count={count}  />
      </div>
    </div>
  )
}
