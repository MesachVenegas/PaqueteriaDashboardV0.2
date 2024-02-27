
export default function CheckOutOrderForm() {
  return (
    <div>CheckOutOrder</div>
  )
}

// const generateNote: SubmitHandler<FormSaleProps> = async (data) => {
//   setPdfData(data);
//   setShowBill(true);
//   console.log(data);
// };

/* {
  showBill &&
  (
      <PreviewBill
        folio=''
        client={client}
        data={pdfData as FormSaleProps}
        volumetric={volumetric}
        subtotal={subTotal}
        confirm={setShowBill}
        cancel={setShowBill}
      />
  )
} */

//               <div className='grid grid-cols-2 gap-4'>
//                 <div className="flex w-full justify-start items-center gap-2">
//                   <label className="w-full max-w-[100px]" htmlFor="name">Método de Pago:</label>
//                   <select
//                     id="payment"
//                     className="flex w-full bg-slate-300 dark:bg-slate-800 rounded-lg text-base p-2 border border-transparent focus:outline-none focus:border-slate-600"
//                     title='Método de pago'
//                     {...register("payment", { required: true })}
//                     onChange={(e) => {
//                       if(e.target.value !== 'partial'){
//                         setCuotas(1)
//                       }
//                       setPaymentMethod(e.target.value)
//                     }}
//                   >
//                     <option value="none">Seleccionar...</option>
//                     <option value="cash">Efectivo</option>
//                     <option value="card">Tarjeta</option>
//                     <option value="transfer">Transferencia</option>
//                     <option value="partial">Parcial</option>
//                   </select>
//                 </div>
//                 {
//                   paymentMethod === 'partial' ? (
//                     <div className="flex w-full justify-start items-center gap-2">
//                       <label className="w-full max-w-[100px]" htmlFor="cuotas">No. Pagos:</label>
//                       <select
//                         id="cuotas"
//                         name='cuotas'
//                         className="flex w-full bg-slate-300 dark:bg-slate-800 rounded-lg text-base p-2 border border-transparent focus:outline-none focus:border-slate-600"
//                         title='Cantidad de cuotas'
//                         onChange={(e) => setCuotas(parseInt(e.target.value))}
//                       >
//                         <option value={1}>1</option>
//                         <option value={2}>2</option>
//                         <option value={3}>3</option>
//                       </select>
//                     </div>
//                   ) : null
//                 }
//               </div>
//               {/* Listar tipo de moneda recibida */}
//               {
//                 paymentMethod === 'cash' ? (
//                 <div className='flex  w-full justify-start gap-2'>

//                   <div className='flex flex-col gap-2'>
//                     <h4 className='text-center font-semibold text-lg'>Billetes</h4>
//                     <div className='flex items-center gap-2'>
//                       <label htmlFor='500' className='flex justify-end w-[200px]'>
//                         500
//                       </label>
//                       <input
//                         id='500'
//                         type="number"
//                         placeholder='0'
//                         defaultValue={0}
//                         className='flex w-full bg-slate-300 dark:bg-slate-800 rounded-lg text-base p-2 border border-transparent focus:outline-none focus:border-slate-600'
//                         {...register('money500')}
//                       />
//                     </div>
//                     <div className='flex items-center gap-2'>
//                       <label htmlFor="200" className='flex justify-end w-[200px]'>
//                         200
//                       </label>
//                       <input
//                         id='200'
//                         type="number"
//                         placeholder='0'
//                         defaultValue={0}
//                         className='flex w-full bg-slate-300 dark:bg-slate-800 rounded-lg text-base p-2 border border-transparent focus:outline-none focus:border-slate-600'
//                         {...register('money200')}
//                       />
//                     </div>
//                     <div className='flex items-center gap-2'>
//                       <label htmlFor="100" className='flex justify-end w-[200px]'>
//                         100
//                       </label>
//                       <input
//                         id='100'
//                         type="number"
//                         placeholder='0'
//                         defaultValue={0}
//                         className='flex w-full bg-slate-300 dark:bg-slate-800 rounded-lg text-base p-2 border border-transparent focus:outline-none focus:border-slate-600'
//                         {...register('money100')}
//                       />
//                     </div>
//                     <div className='flex items-center gap-2'>
//                       <label htmlFor="50" className='flex justify-end w-[200px]'>
//                         50
//                       </label>
//                       <input
//                         id='50'
//                         type="number"
//                         placeholder='0'
//                         defaultValue={0}
//                         className='flex w-full bg-slate-300 dark:bg-slate-800 rounded-lg text-base p-2 border border-transparent focus:outline-none focus:border-slate-600'
//                         {...register('money50')}
//                       />
//                     </div>
//                     <div className='flex items-center gap-2'>
//                       <label htmlFor="20" className='flex justify-end w-[200px]'>
//                         20
//                       </label>
//                       <input
//                         id='20'
//                         type="number"
//                         placeholder='0'
//                         defaultValue={0}
//                         className='flex w-full bg-slate-300 dark:bg-slate-800 rounded-lg text-base p-2 border border-transparent focus:outline-none focus:border-slate-600'
//                         {...register('money20')}
//                       />
//                     </div>
//                   </div>

//                   <div className='flex flex-col gap-2'>
//                     <h4 className='text-center font-semibold text-lg'>Monedas</h4>
//                     <div className='flex items-center gap-2'>
//                       <label htmlFor="coin20" className='flex justify-end w-[200px]'>
//                         20
//                       </label>
//                       <input
//                         id='coin20'
//                         type="number"
//                         placeholder='0'
//                         defaultValue={0}
//                         className='flex w-full bg-slate-300 dark:bg-slate-800 rounded-lg text-base p-2 border border-transparent focus:outline-none focus:border-slate-600'
//                         {...register('coin20')}
//                       />
//                     </div>
//                     <div className='flex items-center gap-2'>
//                       <label htmlFor="10" className='flex justify-end w-[200px]'>
//                         10
//                       </label>
//                       <input
//                         id='10'
//                         type="number"
//                         placeholder='0'
//                         defaultValue={0}
//                         className='flex w-full bg-slate-300 dark:bg-slate-800 rounded-lg text-base p-2 border border-transparent focus:outline-none focus:border-slate-600'
//                         {...register('coin10')}
//                       />
//                     </div>
//                     <div className='flex items-center gap-2'>
//                       <label htmlFor="5" className='flex justify-end w-[200px]'>
//                         5
//                       </label>
//                       <input
//                         id='5'
//                         type="number"
//                         placeholder='0'
//                         defaultValue={0}
//                         className='flex w-full bg-slate-300 dark:bg-slate-800 rounded-lg text-base p-2 border border-transparent focus:outline-none focus:border-slate-600'
//                         {...register('coin5')}
//                       />
//                     </div>
//                     <div className='flex items-center gap-2'>
//                       <label htmlFor="2" className='flex justify-end w-[200px]'>
//                         2
//                       </label>
//                       <input
//                         id='2'
//                         type="number"
//                         placeholder='0'
//                         defaultValue={0}
//                         className='flex w-full bg-slate-300 dark:bg-slate-800 rounded-lg text-base p-2 border border-transparent focus:outline-none focus:border-slate-600'
//                         {...register('coin2')}
//                       />
//                     </div>
//                     <div className='flex items-center gap-2'>
//                       <label htmlFor="1" className='flex justify-end w-[200px]'>
//                         1
//                       </label>
//                       <input
//                         id='1'
//                         type="number"
//                         placeholder='0'
//                         defaultValue={0}
//                         className='flex w-full bg-slate-300 dark:bg-slate-800 rounded-lg text-base p-2 border border-transparent focus:outline-none focus:border-slate-600'
//                         {...register('coin1')}
//                       />
//                     </div>
//                     <div className='flex items-center gap-2'>
//                       <label htmlFor=".50" className='flex justify-end w-[200px]'>
//                         .50
//                       </label>
//                       <input
//                         id='.50'
//                         type="number"
//                         placeholder='0'
//                         defaultValue={0}
//                         className='flex w-full bg-slate-300 dark:bg-slate-800 rounded-lg text-base p-2 border border-transparent focus:outline-none focus:border-slate-600'
//                         {...register('coin50')}
//                       />
//                     </div>
//                   </div>
//                 </div>
//                 ) : null
//               }
//               {
//                 cuotas > 1 ? <PaymentMethod cuotas={cuotas} /> : null
//               }
//             </div>
//           </div>
//         </div>

//         <div className="flex justify-end items-center gap-6 text-white font-bold mt-4">
//           <button type="reset" className="py-2 px-3 rounded-lg bg-red-500 hover:bg-red-700" onClick={cancelBill}>
//             Cancelar
//           </button>
//           <button className="py-2 px-3 rounded-lg bg-blue-600 hover:bg-blue-800">
//             Generar
//           </button>
//         </div>
