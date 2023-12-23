import { valueFormatter } from '@/app/libs/utils'
import { faMoneyBill, faUsers } from '@fortawesome/free-solid-svg-icons'
import { faCalendar } from '@fortawesome/free-solid-svg-icons/faCalendar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const icons = {
  clients: <FontAwesomeIcon icon={faUsers} className='w-5 h-5'/>,
  sales: <FontAwesomeIcon icon={faMoneyBill} className='w-5 h-5'/>,
  monthlySales: <FontAwesomeIcon icon={faCalendar} className='w-5 h-5'/>,
}

export default function Cards({ title, counter, profit, type, } : {
  title: string,
  counter: number,
  profit: number,
  type: 'clients' | 'sales' | 'monthlySales'
}) {
  const Icon = icons[type]

  return (
    <div className='flex bg-slate-200 dark:bg-slate-950 hover:bg-slate-300 w-full rounded-lg gap-2 p-5 cursor-pointer'>
      { Icon ? Icon : null}
      <div className='flex flex-col gap-5'>
        <span>{title}</span>
        <span className='text-4xl font-medium'>
          { type != 'clients' ? `${valueFormatter(counter)}` : `${counter}` }
        </span>
        <span>
          <span className={`text-green-600`}>{profit}% </span>
          mas que la semana pasada
        </span>
      </div>
    </div>
  )
}
