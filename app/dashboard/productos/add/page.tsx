'use client'

import { useState } from "react";
import { createNewProduct } from "@/app/libs/actions";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";

export default function AddProduct() {
  const [errorMessage, setErrorMessage] = useState()


  const onSubmit = async (data: Iterable<readonly [PropertyKey, any]>) => {
    await createNewProduct(data)
    .catch(error => {
      setErrorMessage(error.message);
    })
  }

  return (
    <div className="flex justify-center h-[75vh] items-center p-4">
      <form action={onSubmit} className="flex flex-col w-full max-w-2xl justify-center bg-slate-200 rounded-lg gap-4 p-6">
          <h1 className="text-2xl text-slate-800 text-center p-4" >Agregar Nuevo Producto</h1>
          <div>
            <Label>
              Nombre:
              <Input name="name" />
            </Label>
          </div>
          <div>
            <Label>
              Descripcion:
              <Input name="description" />
            </Label>
          </div>
          <div>
            <Label>
              Tipo de Envió:
              <select name='delivery' title="delivery_type" className="w-full max-w-sm p-1 rounded-lg border border-transparent focus:outline-none focus:border-slate-500 dark:text-gray-100 dark:bg-slate-700" >
                <option value="land">Terrestre</option>
                <option value="air">Aéreo</option>
              </select>
            </Label>
          </div>
          <div>
            <Label>
              Costo:
              <Input name="price"/>
            </Label>
          </div>
          <div className="flex justify-around p-4">
            <button className="bg-red-400 py-2 px-3 rounded-md hover:bg-red-500 text-white font-bold" type="reset">
              Cancelar
            </button>
            <button className="bg-blue-400 py-2 px-3 hover:bg-blue-500 text-white font-bold rounded-lg">
              Agregar Producto
            </button>
          </div>
          {
            errorMessage && <div className="bg-red-400 text-white p-2 rounded-lg">{errorMessage}</div>
          }
      </form>
    </div>
  )
}
