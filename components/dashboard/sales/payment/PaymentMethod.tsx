import React from 'react'

export default function PaymentMethod({ cuotas } : {cuotas: number}) {

  const payments = new Array(cuotas).fill('payment');

  return payments.map((payment, index) => (
      <div key={index} className='flex gap-4'>
        <div className='flex w-full justify-start items-center gap-2'>
          <label htmlFor="qty">Monto:</label>
          <input
            type="number"
            name={`payment_${index}`}
            title='payment_qty'
            min={0}
            className='flex w-full bg-slate-300 dark:bg-slate-800 rounded-lg text-base p-2 border border-transparent focus:outline-none focus:border-slate-600'
          />
        </div>
        <div className="flex w-full justify-start items-center gap-2">
          <label className="w-full max-w-[100px]" htmlFor="name">Método:</label>
          <select
            id="payment"
            name={`payment_method_${index}`}
            className="flex w-full bg-slate-300 dark:bg-slate-800 rounded-lg text-base p-2 border border-transparent focus:outline-none focus:border-slate-600"
            title='Método de pago'
          >
            <option value="cash">Efectivo</option>
            <option value="card">Tarjeta</option>
            <option value="transfer">Transferencia</option>
            <option value="partial">Parcial</option>
          </select>
        </div>
      </div>
    )
  )
}
