import Image from "next/image"
import { Metadata } from 'next'
import { createNewClient } from "@/app/libs/actions"
import { redirect } from "next/navigation"
import { revalidatePath } from "next/cache"
import Button from "@/components/dashboard/button/Button"


export const metadata: Metadata = {
  title: 'Registrar Cliente | Paqueteria 5 Estrellas',
  description: 'Dashboard App home page',
}


export default function CreateClient() {

  const handleForm = async (dataForm: Iterable<readonly [PropertyKey, any]>) => {
    'use server'
    const result = await createNewClient(dataForm);
    if(result) {
      revalidatePath('/dashboard/clientes');
      redirect('/dashboard/clientes')
    }
  }

  return (
    <div className='flex w-full max-w-7xl justify-center items-center p-6 m-auto'>
      <div className='flex flex-col bg-slate-300 w-full p-6 rounded-lg shadow-xl'>
        <h2 className='font-semibold text-center text-xl'>Registrar Nuevo Cliente</h2>
        <form action={handleForm} className='grid grid-cols-2 w-full h-full p-6'>
          <div className='flex flex-col justify-start items-center gap-6'>
            <Image src='/assets/default-avatar.png' width={200} height={200} alt='default avatar'/>
            <input type="file" placeholder='elige una imagen' className='flex'/>
          </div>
          <div className='flex flex-col gap-4 w-full'>
            <div className='flex w-full gap-2'>
              <label htmlFor="name" className='w-40'>Nombre(s):</label>
              <input
                type="text"
                name='name'
                className='w-full p-2 rounded-md bg-slate-100 border border-transparent  focus:outline-none focus:border-slate-400'
                placeholder='John'
                required
              />
            </div>
            <div className='flex w-full gap-2'>
              <label className='w-40' htmlFor="last_name">Apellidos:</label>
              <input
                type="text"
                name='last_name'
                className='w-full p-2 rounded-md bg-slate-100 border border-transparent  focus:outline-none focus:border-slate-400'
                placeholder='Doe'
                required
              />
            </div>
            <div className='flex w-full gap-2'>
              <label className='w-40' htmlFor="phone">Teléfono:</label>
              <input
                type="text"
                name='phone' className='w-full p-2 rounded-md bg-slate-100 border border-transparent  focus:outline-none focus:border-slate-400' placeholder='(123)456 7890'
                required
              />
            </div>
            <div className='flex w-full gap-2'>
              <label className='w-40' htmlFor="email">Correo Electrónico:</label>
              <input
                type="text"
                name='email' className='w-full p-2 rounded-md bg-slate-100 border border-transparent  focus:outline-none focus:border-slate-400' placeholder='johndoe@example.com'
              />
            </div>
            <div className='flex flex-col w-full gap-2'>
              <label htmlFor="address">Dirección:</label>
              <textarea
                name='address'
                className='w-full p-2 rounded-md bg-slate-100 border border-transparent  focus:outline-none focus:border-slate-400' title='address field'
                rows={4}
                required
              />
            </div>
            <label>
              Tipo de Cliente:
              <select name="type" defaultValue='minors' title='tipo de cliente' className='px-2' required>                <option value="minors">Minorista</option>
                <option value="wholesaler">Mayorista</option>
              </select>
            </label>
            <div className='flex justify-around mt-5 font-bold'>
              <Button type="link" source="/dashboard/clientes" color="red" text="Cancelar"/>
              <button type='submit'className='bg-green-400 py-2 px-3 rounded-md hover:bg-green-500'>
                Registrar
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
