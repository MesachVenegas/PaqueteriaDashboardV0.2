'use client'

import { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form';
import { states } from "@/app/libs/utils";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard, faMoneyBillTransfer, faSackDollar } from '@fortawesome/free-solid-svg-icons';

export default function SaleForm({generateNote, setClient}: { generateNote:  SubmitHandler<InvoiceProrpsForm>, setClient: Function}  ) {
  const [paymentMethod, setPaymentMethod] = useState('Efectivo');
  const { register, handleSubmit, formState: { errors } } = useForm();

  const cancelBill = () => {
    setClient(null);
  }

  return (
    <form className="flex flex-col w-full gap-2 p-6" onSubmit={handleSubmit(generateNote)}>
      <div className="flex w-full justify-start items-center gap-2">
        <label className="w-full max-w-[100px]" htmlFor="name">Nombre:</label>
        <input
          id="name"
          className="flex w-full bg-slate-300 dark:bg-slate-800 rounded-lg text-base p-2"
          type='text'
          {...register("name", { required: true })}
        />
      </div>
      <div className="flex w-full justify-start items-center gap-2">
        <label className="w-full max-w-[100px]" htmlFor="name">Teléfono:</label>
        <input
          id="name"
          className="flex w-full bg-slate-300 dark:bg-slate-800 rounded-lg text-base p-2"
          type='text'
          {...register("phone", { required: true })}
        />
      </div>
      {/* Dirección */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <span className="text-center col-span-full" >Dirección</span>
        <div className="flex w-full justify-start items-center col-span-full gap-2">
          <label className="w-full max-w-[100px]" htmlFor="name">Calle:</label>
          <input
            id="name"
            className="flex w-full bg-slate-300 dark:bg-slate-800 rounded-lg text-base p-2"
            type='text'
            {...register("street", { required: true })}
          />
        </div>
        <div className="flex w-full justify-start items-center gap-2">
          <label className="w-full max-w-[100px]" htmlFor="name">Numero:</label>
          <input
            id="name"
            className="flex w-full bg-slate-300 dark:bg-slate-800 rounded-lg text-base p-2"
            type='text'
            {...register("number", { required: true })}
          />
        </div>
        <div className="flex w-full justify-start items-center gap-2">
          <label className="w-full max-w-[100px]" htmlFor="name">Colonia:</label>
          <input
            id="name"
            className="flex w-full bg-slate-300 dark:bg-slate-800 rounded-lg text-base p-2"
            type='text'
            {...register("colony", { required: true })}
          />
        </div>
        <div className="flex w-full justify-start items-center gap-2">
          <label className="w-full max-w-[100px]" htmlFor="name">Municipio:</label>
          <input
            id="name"
            className="flex w-full bg-slate-300 dark:bg-slate-800 rounded-lg text-base p-2"
            type='text'
            {...register("delegation", { required: true })}
          />
        </div>
        <div className="flex w-full justify-start items-center gap-2">
          <label className="w-full max-w-[100px]" htmlFor="name">Codigo Postal:</label>
          <input
            id="name"
            className="flex w-full bg-slate-300 dark:bg-slate-800 rounded-lg text-base p-2"
            type='text'
            {...register("zip_code", { required: true })}
          />
        </div>
      </div>
      <div className="flex w-full justify-start items-center gap-2">
        <label className="w-full max-w-[100px]" htmlFor="name">Estado:</label>
        <select
          id="name"
          className="flex w-full bg-slate-300 dark:bg-slate-800 rounded-lg text-base p-2"
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
            className="flex w-full bg-slate-300 dark:bg-slate-800 rounded-lg text-base p-2"
            {...register("references")}
          />
        </div>
      {/* Datos del envió y el paquete */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        <span className="text-center col-span-full" >Detalles del Paquete</span>
        <div className="flex w-full justify-start items-center gap-2">
          <label className="w-full max-w-[100px]" htmlFor="name">Largo:</label>
          <input
            id="name"
            className="flex w-full bg-slate-300 dark:bg-slate-800 rounded-lg text-base p-2"
            type='text'
            {...register("length", { required: true })}
          />
        </div>
        <div className="flex w-full justify-start items-center gap-2">
          <label className="w-full max-w-[100px]" htmlFor="name">Alto:</label>
          <input
            id="name"
            className="flex w-full bg-slate-300 dark:bg-slate-800 rounded-lg text-base p-2"
            type='text'
            {...register("height", { required: true })}
          />
        </div>
        <div className="flex w-full justify-start items-center gap-2">
          <label className="w-full max-w-[100px]" htmlFor="name">Ancho:</label>
          <input
            id="name"
            className="flex w-full bg-slate-300 dark:bg-slate-800 rounded-lg text-base p-2"
            type='text'
            {...register("width", { required: true })}
          />
        </div>
        <div className="flex w-full justify-start items-center gap-2">
          <label className="w-full max-w-[100px]" htmlFor="name">Peso:</label>
          <input
            id="name"
            className="flex w-full bg-slate-300 dark:bg-slate-800 rounded-lg text-base p-2"
            type='text'
            {...register("weight", { required: true })}
          />
        </div>
      </div>
      <div className="flex w-full justify-start items-center gap-2">
        <label className="w-full max-w-[100px]" htmlFor="name">Envió:</label>
        <select
          id="name"
          className="flex w-full bg-slate-300 dark:bg-slate-800 rounded-lg text-base p-2"
          defaultValue="Terrestre"
          {...register("send", { required: true })}
        >
          <option value="Terrestre">Terrestre</option>
          <option value="Aéreo">Aéreo</option>
        </select>
      </div>
      {/* Metodos de pago */}
      <div className="grid grid-cols-2 place-items-center gap-2 p-2">
        <div className="flex gap-2 w-44">
          <input
            id="cash"
            type="radio"
            value='Efectivo'
            defaultChecked
            onClick={ () => setPaymentMethod('Efectivo')}
            {...register("payment", { required: true })}
          />
          <label htmlFor="cash" className="flex gap-2 justify-center items-center">
            <FontAwesomeIcon icon={faSackDollar} />
            Efectivo
          </label>
        </div>
        <div className="flex gap-2 w-44">
          <input
            id="card"
            type="radio"
            value='Tarjeta'
            onClick={ () => setPaymentMethod('Tarjeta')}
            {...register("payment", { required: true })}
          />
          <label htmlFor="card" className="flex gap-2 justify-center items-center">
            <FontAwesomeIcon icon={faCreditCard} />
            Tarjeta
          </label>
        </div>
        <div className="flex gap-2 w-44">
          <input
            id="transfer"
            type="radio"
            value='Transferencia'
            onClick={ () => setPaymentMethod('Transferencia')}
            {...register("payment", { required: true })}
          />
          <label htmlFor="transfer" className="flex gap-2 justify-center items-center">
            <FontAwesomeIcon icon={faMoneyBillTransfer} />
            Transferencia
          </label>
        </div>
        <div className="flex gap-2 w-44">
          <input
            id="partial"
            type="radio"
            value='Parcial'
            onClick={ () => setPaymentMethod('Parcial')}
            {...register("payment", { required: true })}
          />
          <label htmlFor="partial" className="flex gap-2 justify-center items-center">
            <FontAwesomeIcon icon={faMoneyBillTransfer} />
            Parcial
          </label>
        </div>
      </div>
      {
        paymentMethod === 'Parcial' && (
          <div className="flex flex-col gap-4">
            <div className="flex justify-center items-center gap-2">
              <label htmlFor="">En cuantos pagos:</label>
              <select
                id="payments"
                className="w-12 dark:bg-slate-800 rounded-lg text-base p-2"
                name="payments"
                title="cantidad de pagos a realizar"
              >
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 p-4 justify-center items-center gap-4">
              <div className="flex justify-center items-center gap-2">
                <label className="min-w-fit" htmlFor="">Pago 1</label>
                <input
                  className="w-full bg-slate-300 dark:bg-slate-800 rounded-lg text-base p-2"
                  type="text"
                  title="cantidad a cubrir"
                />
                <select
                  id=""
                  name=""
                  className=" dark:bg-slate-800 rounded-lg text-base p-2"
                  title="tipo de pago"
                >
                  <option value="">Efectivo</option>
                  <option value="">Tarjeta</option>
                  <option value="">Transferencia</option>
                </select>
              </div>
              <div className="flex justify-center items-center gap-2">
                <label className="min-w-fit" htmlFor="">Pago 2</label>
                <input
                  type="text"
                  title="cantidad a cubrir"
                  className="w-full bg-slate-300 dark:bg-slate-800 rounded-lg text-base p-2"
                />
                <select
                  id=""
                  name=""
                  title="tipo de pago"
                  className=" dark:bg-slate-800 rounded-lg text-base p-2"
                >
                  <option value="">Efectivo</option>
                  <option value="">Tarjeta</option>
                  <option value="">Transferencia</option>
                </select>
              </div>
            </div>
          </div>
        )
      }

      <div className="flex justify-end items-center gap-6 text-white font-bold">
        <button type="reset" className="py-2 px-3 rounded-lg bg-red-500 hover:bg-red-700" onClick={cancelBill}>
          Cancelar
        </button>
        <button type="submit" className="py-2 px-3 rounded-lg bg-blue-600 hover:bg-blue-800">
          Generar
        </button>
      </div>
    </form>
  )
}