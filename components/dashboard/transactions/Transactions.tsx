import { faCreditCard, faMoneyBill, faMoneyBillTransfer } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import React from 'react'

export default function Transactions() {
  return (
    <div className='w-full bg-slate-200 dark:bg-slate-950 rounded-lg p-5'>
      <h2 className='mb-5 font-medium text-gray-500 dark:text-gray-300'>Ultimas Ventas</h2>
      <table className='w-full'>
        <thead className='bg-slate-300 dark:bg-slate-900'>
          <td className='p-2'>
            Cliente
          </td>
          <td className='p-2'>
            Método de Pago
          </td>
          <td className='p-2'>
            Cantidad
          </td>
          <td className='p-2'>
            Fecha
          </td>
        </thead>
        <tbody>
          <tr>
            <td className='flex gap-2 p-2'>
              <Image src="/assets/avatar.png" alt='avatar' width={30} height={30}/>
              John Doe
            </td>
            <td>
              <div className='flex gap-2 items-center'>
                <FontAwesomeIcon icon={faMoneyBill} className='w-5 h-5'/>
                <span>Efectivo</span>
              </div>
            </td>
            <td>$1,430</td>
            <td>05/05/2023</td>
          </tr>
          <tr className='p-5'>
            <td className='flex gap-2 p-2'>
              <Image src="/assets/avatar.png" alt='avatar' width={30} height={30} className='rounded-full'/>
              John Doe
            </td>
            <td>
              <div className='flex gap-2 items-center'>
                <FontAwesomeIcon icon={faMoneyBillTransfer} className='w-5 h-5'/>
                <span>Transferencia</span>
              </div>
            </td>
            <td>$1,430</td>
            <td>07/12/2023</td>
          </tr>
          <tr className='p-5'>
            <td className='flex gap-2 p-2'>
              <Image src="/assets/avatar.png" alt='avatar' width={30} height={30} className='rounded-full'/>
              John Doe
            </td>
            <td>
              <div className='flex gap-2 items-center'>
                <FontAwesomeIcon icon={faMoneyBill} className='w-5 h-5'/>
                <span>Efectivo</span>
              </div>
            </td>
            <td>$1,430</td>
            <td>05/12/2023</td>
          </tr>
          <tr className='p-5'>
            <td className='flex gap-2 p-2'>
              <Image src="/assets/avatar.png" alt='avatar' width={30} height={30}/>
              John Doe
            </td>
            <td>
              <div className='flex gap-2 items-center'>
                <FontAwesomeIcon icon={faCreditCard} className='w-5 h-5'/>
                <span>Tarjeta</span>
              </div>
            </td>
            <td>$1,430</td>
            <td>05/12/2023</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
