import Button from '@/components/dashboard/button/Button'
import Pagination from '@/components/dashboard/pagination/Pagination'
import SearchBar from '@/components/dashboard/search/SearchBar'
import ProductsTable from '@/components/dashboard/tables/ProductsTable'
import { faBoxesPacking } from '@fortawesome/free-solid-svg-icons'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Productos | Paqueteria 5 Estrellas',
  description: 'Dashboard App home page',
}


export default function Products() {
  return (
    <div className="flex flex-col gap-6 p-5">
      <div className="flex w-full justify-between">
        <SearchBar placeholder="Buscar un producto..." />
        <Button text="Agregar producto" icon={faBoxesPacking} />
      </div>
      <div className="flex flex-col">
        <ProductsTable />
        <Pagination />
      </div>
    </div>
  )
}
