import Button from '@/components/dashboard/button/Button'
import Pagination from '@/components/Pagination'
import SearchBar from '@/components/dashboard/search/SearchBar'
import ProvidersTable from '@/components/dashboard/tables/ProvidersTables'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Proveedores | Paqueteria 5 Estrellas',
  description: 'Dashboard App home page',
}

export default function Providers() {
  return (
    <div className="flex flex-col gap-6 p-5">
      <div className="flex w-full justify-between">
        <SearchBar placeholder="Buscar un provedor..." />
        <Button type='link' source='/dashboard/provedores/create' text="Agregar proveedor" icon={faUserPlus} />
      </div>
      <div className="flex flex-col">
        <ProvidersTable />
        <Pagination  count={0}/>
      </div>
    </div>
  )
}
