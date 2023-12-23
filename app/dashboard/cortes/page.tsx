import { getDayliSales, getMonthlySales } from '@/app/libs/boxcut/actions'
import Cards from '@/components/dashboard/cards/Cards';
import { Label } from '@/components/ui/Label';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cortes de Caja | Paqueteria 5 Estrellas',
  description: 'Dashboard App home page',
}


export default async function BoxCut() {

  const totalSales = await getDayliSales();
  const totalSalesMonth = await getMonthlySales();

  return (
    <div className='flex flex-col justify-center items-center p-4'>
      <div className='flex justify-around w-full gap-6' >
        <Cards type='sales' counter={totalSales} title='Ventas del Dia' profit={0} />
        <Cards type='monthlySales' counter={totalSalesMonth} title='Ventas del Mes' profit={0} />
      </div>
      <section className='flex justify-between w-full gap-6 mt-6'>
        <article className='flex flex-col items-center w-full border border-slate-400 p-4 rounded-lg'>
          <div className='flex w-full justify-around items-center'>
            <h2 className='font-semibold text-xl'>Generar Nuevo Corte</h2>
            <button className='flex items-center justify-center w-44 h-10 gap-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg' >
              <FontAwesomeIcon icon={faDownload} className='w-5 h-5' />
              Obtener Datos
            </button>
          </div>
          <div>
            
          </div>
        </article>

        <article className='flex flex-col items-center w-full border border-slate-400 p-4 rounded-lg'>
          <h2>Últimos Cortes Realizados</h2>
        </article>
      </section>
    </div>
  )
}
