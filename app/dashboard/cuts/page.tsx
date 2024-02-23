import { Suspense } from 'react';
import { Metadata } from 'next'
import { getDayliSales, getMonthlySales, getOrdersByDay } from '@/app/libs/boxcut/actions'
import BillData from '@/components/BoxCut/BillData';
import Cards from '@/components/dashboard/cards/Cards';
import { BoxCutProps } from '@/app/libs/definitions';

export const metadata: Metadata = {
  title: 'Cortes de Caja | Paqueteria 5 Estrellas',
  description: 'Dashboard App home page',
}


export default async function BoxCut() {
  const totalSales = await getDayliSales();
  const totalSalesMonth = await getMonthlySales();
  const data = await getOrdersByDay();

  console.log(data);

  return (
    <div className='flex flex-col justify-center items-center p-4'>
      <div className='flex justify-around w-full gap-6' >
        <Cards type='sales' counter={totalSales} title='Ventas del Dia' profit={0} />
        <Cards type='monthlySales' counter={totalSalesMonth} title='Ventas del Mes' profit={0} />
      </div>
      <section className='flex justify-between w-full gap-6 mt-6'>
        <article className='flex flex-col items-center w-full rounded-lg dark:bg-slate-950 p-4 gap-6'>
          <div className='flex w-full justify-around items-center'>
            <h2 className='font-semibold text-xl'>Generar Nuevo Corte</h2>
          </div>
          <Suspense>
            <BillData data={data as BoxCutProps} />
          </Suspense>
        </article>

        <article className='flex flex-col items-center w-full rounded-lg dark:bg-slate-950 p-4'>
          <h2>Últimos Cortes Realizados</h2>
        </article>
      </section>
    </div>
  )
}
