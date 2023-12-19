'use client'

import { Suspense, useEffect, useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form';
import { states, valueFormatter } from "@/app/libs/utils";
import { ClientProps, FormSaleProps, ProductProps } from '@/app/libs/definitions';
import PaymentMethod from '../payment/PaymentMethod';
import PreviewBill from '../preview/PreviewBill';

export default function SaleForm({setClient, client, prices }: { setClient: Function, client: ClientProps, prices: ProductProps[]}  ) {
  const [paymentMethod, setPaymentMethod] = useState('Efectivo');
  const [length, setLength] = useState(0)
  const [height, setHeight] = useState(0)
  const [width, setWidth] = useState(0)
  const [cuotas, setCuotas] = useState(1)
  const [subTotal, setSubTotal] = useState(0)
  const [delivery, setDelivery] = useState('land')
  const [showBill, setShowBill] = useState<boolean>(false);
  const [pdfData, setPdfData] = useState<FormSaleProps>()
  const [volumetric, setVolumetric] = useState<number>(0);
  const { register, handleSubmit, formState: { errors } } = useForm<FormSaleProps>();

  const cancelBill = () => {
    setClient(null);
    setVolumetric(0)
  }

  const generateNote: SubmitHandler<FormSaleProps> = async (data) => {
    setPdfData(data)
    setShowBill(true)
  };

  useEffect( () => {
    const calVolumetric = width * length * height / 5000;
    setVolumetric(calVolumetric)
  },[height, width, length])

  return (
    <>
      <form
        className="flex bg-white rounded-lg border border-slate-200 flex-col w-full gap-2 p-6 dark:text-gray-100 dark:bg-slate-900 dark:border-slate-800"
        onSubmit={handleSubmit(generateNote)}
      >
        <div className='flex gap-4 w-full justify-between'>
          <div className='flex flex-col max-w-3xl w-full gap-2'>
            <h2 className="text-center col-span-full border border-slate-400 rounded-lg" >Cliente</h2>
            <div className="flex w-full justify-start items-center gap-2">
              <label className="w-full max-w-[100px]" htmlFor="name">Nombre:</label>
              <input
                id="name"
                className="flex w-full bg-slate-300 dark:bg-slate-800 rounded-lg text-base p-2 border border-transparent focus:outline-none focus:border-slate-600"
                type='text'
                autoFocus
                {...register("name", { required: true })}
              />
            </div>
            <div className="flex w-full justify-start items-center gap-2">
              <label className="w-full max-w-[100px]" htmlFor="name">Teléfono:</label>
              <input
                id="phone"
                className="flex w-full bg-slate-300 dark:bg-slate-800 rounded-lg text-base p-2 border border-transparent focus:outline-none focus:border-slate-600"
                type='text'
                {...register("phone", { required: true })}
              />
            </div>
            {/* Dirección */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <h2 className="text-center col-span-full border border-slate-400 rounded-lg" >Dirección</h2>
              <div className="flex w-full justify-start items-center col-span-full gap-2">
                <label className="w-full max-w-[100px]" htmlFor="name">Calle:</label>
                <input
                  id="street"
                  className="flex w-full bg-slate-300 dark:bg-slate-800 rounded-lg text-base p-2 border border-transparent focus:outline-none focus:border-slate-600"
                  type='text'
                  {...register("street", { required: true })}
                />
              </div>
              <div className="flex w-full justify-start items-center gap-2">
                <label className="w-full max-w-[100px]" htmlFor="name">Numero:</label>
                <input
                  id="name"
                  className="flex w-full bg-slate-300 dark:bg-slate-800 rounded-lg text-base p-2 border border-transparent focus:outline-none focus:border-slate-600"
                  type='text'
                  {...register("number", { required: true })}
                />
              </div>
              <div className="flex w-full justify-start items-center gap-2">
                <label className="w-full max-w-[100px]" htmlFor="name">Colonia:</label>
                <input
                  id="name"
                  className="flex w-full bg-slate-300 dark:bg-slate-800 rounded-lg text-base p-2 border border-transparent focus:outline-none focus:border-slate-600"
                  type='text'
                  {...register("colony", { required: true })}
                />
              </div>
              <div className="flex w-full justify-start items-center gap-2">
                <label className="w-full max-w-[100px]" htmlFor="name">Municipio:</label>
                <input
                  id="name"
                  className="flex w-full bg-slate-300 dark:bg-slate-800 rounded-lg text-base p-2 border border-transparent focus:outline-none focus:border-slate-600"
                  type='text'
                  {...register("delegation", { required: true })}
                />
              </div>
              <div className="flex w-full justify-start items-center gap-2">
                <label className="w-full max-w-[100px]" htmlFor="name">Codigo Postal:</label>
                <input
                  id="name"
                  className="flex w-full bg-slate-300 dark:bg-slate-800 rounded-lg text-base p-2 border border-transparent focus:outline-none focus:border-slate-600"
                  type='text'
                  {...register("zip_code", { required: true })}
                />
              </div>
            </div>
            <div className="flex w-full justify-start items-center gap-2">
              <label className="w-full max-w-[100px]" htmlFor="name">Estado:</label>
              <select
                id="name"
                className="flex w-full bg-slate-300 dark:bg-slate-800 rounded-lg text-base p-2 border border-transparent focus:outline-none focus:border-slate-600"
                {...register("state", { required: true })}
              >
                {
                  states.map( (state, index) => (
                    <option key={state} value={state}>{state}</option>
                  ))
                }
              </select>
            </div>
            <div className="flex w-full justify-start items-center gap-2">
                <label className="w-full max-w-[100px]" htmlFor="name">Referencias:</label>
                <textarea
                  id="name"
                  rows={3}
                  maxLength={300}
                  className="flex w-full bg-slate-300 dark:bg-slate-800 rounded-lg text-base p-2 border border-transparent focus:outline-none focus:border-slate-600"
                  {...register("references")}
                />
              </div>
            {/* Datos del envió y el paquete */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 ">
              <h2 className="text-center col-span-full border border-slate-400 rounded-lg" >Detalles del Paquete</h2>
              <div className="flex w-full justify-start items-center gap-2 ">
                <label className="w-full max-w-[100px]" htmlFor="name">Largo:</label>
                <input
                  id="length"
                  className="flex w-full bg-slate-300 dark:bg-slate-800 rounded-lg text-base p-2 border border-transparent focus:outline-none focus:border-slate-600"
                  type='text'
                  placeholder='0'
                  {...register("length", { required: true })}
                  onChange={(e) => setLength(parseInt(e.target.value))}
                />
                <span>cms</span>
              </div>
              <div className="flex w-full justify-start items-center gap-2">
                <label className="w-full max-w-[100px]" htmlFor="name">Alto:</label>
                <input
                  id="height"
                  className="flex w-full bg-slate-300 dark:bg-slate-800 rounded-lg text-base p-2 border border-transparent focus:outline-none focus:border-slate-600"
                  type='text'
                  placeholder='0'
                  {...register("height", { required: true })}
                  onChange={(e) => setHeight(parseInt(e.target.value))}
                />
                <span>cms</span>
              </div>
              <div className="flex w-full justify-start items-center gap-2">
                <label className="w-full max-w-[100px]" htmlFor="name">Ancho:</label>
                <input
                  id="width"
                  className="flex w-full bg-slate-300 dark:bg-slate-800 rounded-lg text-base p-2 border border-transparent focus:outline-none focus:border-slate-600"
                  type='text'
                  placeholder='0'
                  {...register("width", { required: true })}
                  onChange={(e) => setWidth(parseInt(e.target.value))}
                />
                <span>cms</span>
              </div>
              <div className="flex w-full justify-start items-center gap-2">
                <label className="w-full max-w-[100px]" htmlFor="name">Peso:</label>
                <input
                  id="name"
                  className="flex w-full bg-slate-300 dark:bg-slate-800 rounded-lg text-base p-2 border border-transparent focus:outline-none focus:border-slate-600"
                  type='text'
                  {...register("weight", { required: true })}
                />
                <span>kgs</span>
              </div>
            </div>
            <div className="flex w-full justify-start items-center gap-2">
              <label className="w-full max-w-[100px]" htmlFor="name">Envió:</label>
              <select
                id="name"
                className="flex w-full bg-slate-300 dark:bg-slate-800 rounded-lg text-base p-2 border border-transparent focus:outline-none focus:border-slate-600"
                defaultValue="land"
                {...register("send", { required: true })}
                onChange={(e) => setDelivery(e.target.value)}
              >
                <option value="land">Terrestre</option>
                <option value="air">Aéreo</option>
              </select>
            </div>
          </div>
          {/* TODO Metodos de pago */}
          <div className='flex flex-col gap-6  items-center w-full max-w-xl'>
            <div>
              <h2 className='font-bold text-2xl'>
                {client?.name} {client?.last_name}
              </h2>
            </div>
            <div className='flex flex-col w-full gap-6'>
              <p className='flex justify-between text-gray-600 text-2xl font-semibold border border-slate-400 dark:border-slate-600 dark:text-gray-300 rounded-lg p-4'>
                Peso Volumétrico:
                <span>{`${volumetric.toFixed(1)}`} kgs</span>
              </p>
              <div className="flex w-full justify-start items-center gap-2">
                <label className="w-full max-w-[230px]" htmlFor="name">Seleccione el Peso de cobro:</label>
                <select
                  id="product"
                  name='product'
                  className="flex w-full bg-slate-300 dark:bg-slate-800 rounded-lg text-base p-2 border border-transparent focus:outline-none focus:border-slate-600"
                  title='Producto Elegido'
                  onChange={(e) => setSubTotal(parseInt(e.target.value))}
                >
                  <option value={0}>Seleccione un paquete</option>
                  {
                    prices.map( (price, index) => {
                      if(delivery === price.delivery){
                        return(
                          <option key={price.id} value={price.price}>{price.description}</option>
                        )
                      }
                    })
                  }
                </select>
                <span>kgs</span>
              </div>
              <div>
                <p className='flex justify-between items-end font-semibold text-2xl text-gray-600 border border-slate-400 dark:border-slate-600 dark:text-gray-300 rounded-lg p-4'>
                  SubTotal: <span className='text-4xl'>{valueFormatter(subTotal)}</span>
                </p>
              </div>
              <div className='grid grid-cols-2 gap-4'>
                <div className="flex w-full justify-start items-center gap-2">
                  <label className="w-full max-w-[100px]" htmlFor="name">Método de Pago:</label>
                  <select
                    id="payment"
                    className="flex w-full bg-slate-300 dark:bg-slate-800 rounded-lg text-base p-2 border border-transparent focus:outline-none focus:border-slate-600"
                    title='Método de pago'
                    {...register("payment", { required: true })}
                    onChange={(e) => {
                      if(e.target.value !== 'partial'){
                        setCuotas(1)
                      }
                      setPaymentMethod(e.target.value)
                    }}
                  >
                    <option value="cash">Efectivo</option>
                    <option value="card">Tarjeta</option>
                    <option value="transfer">Transferencia</option>
                    <option value="partial">Parcial</option>
                  </select>
                </div>
                {
                  paymentMethod === 'partial' ? (
                    <div className="flex w-full justify-start items-center gap-2">
                      <label className="w-full max-w-[100px]" htmlFor="cuotas">No. Pagos:</label>
                      <select
                        id="cuotas"
                        name='cuotas'
                        className="flex w-full bg-slate-300 dark:bg-slate-800 rounded-lg text-base p-2 border border-transparent focus:outline-none focus:border-slate-600"
                        title='Cantidad de cuotas'
                        onChange={(e) => setCuotas(parseInt(e.target.value))}
                      >
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                      </select>
                    </div>
                  ) : null
                }
              </div>
              {
                cuotas > 1 ? <PaymentMethod cuotas={cuotas} /> : null
              }
            </div>
          </div>
        </div>

        <div className="flex justify-end items-center gap-6 text-white font-bold mt-4">
          <button type="reset" className="py-2 px-3 rounded-lg bg-red-500 hover:bg-red-700" onClick={cancelBill}>
            Cancelar
          </button>
          <button className="py-2 px-3 rounded-lg bg-blue-600 hover:bg-blue-800">
            Generar
          </button>
        </div>
      </form>
      {
        showBill &&
        (
          <Suspense fallback={<span>Cargando ...</span>}>
            <PreviewBill
              folio=''
              client={client}
              data={pdfData || {}}
              volumetric={volumetric}
              subtotal={subTotal}
              cancel={setShowBill}
            />
          </Suspense>
        )
      }
    </>
  )
}