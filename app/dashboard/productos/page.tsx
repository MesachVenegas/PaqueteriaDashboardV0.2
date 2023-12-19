import { deleteProduct } from '@/app/libs/actions'
import { getProducts } from '@/app/libs/data'
import { ProductProps } from '@/app/libs/definitions'
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


export default async function Products({ searchParams }: { searchParams: { search: string, page: string }}) {
  const search = searchParams?.search || '';
  const page = searchParams?.page || '1';
  const response = await getProducts(parseInt(page), search);
  const { countProducts, products } = Array.isArray(response) ? { countProducts: 0, products: [] } : response;

  const delProduct = async (id:number) => {
    await deleteProduct(id)
      .catch((err) => console.log(err))
  }


  return (
    <div className="flex flex-col gap-6 p-5">
      <div className="flex w-full justify-between">
        <SearchBar placeholder="Buscar un producto..." />
        <Button text="Agregar producto" icon={faBoxesPacking}  type='link' source='/dashboard/productos/add'/>
      </div>
      <div className="flex flex-col">
        <ProductsTable products={products as ProductProps[]} deleteProd={deleteProduct} />
        <Pagination count={countProducts}  />
      </div>
    </div>
  )
}
