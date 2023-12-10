'use client'

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function FormClient({title, type}: {title: string, type: 'edit' | 'create'} ) {
  const router = useRouter();

  return (
    <div className='flex w-full h-full justify-center items-center p-6'>
      <div className='flex flex-col bg-slate-300 w-full p-6 rounded-lg shadow-xl'>
        <button title='boton de cierre' type='button' className='self-end flex p-0.5 rounded-lg hover:bg-red-600 hover:text-white'>
          <FontAwesomeIcon icon={faXmark} className='w-5 h-5'/>
        </button>
        <h2 className='font-semibold text-center text-xl'>{title}</h2>
        <form action="" className='grid grid-cols-2 w-full h-full p-6'>
          <div className='flex flex-col justify-start items-center gap-6'>
            <Image src='/assets/default-avatar.png' width={200} height={200} alt='default avatar'/>
            <input type="file" placeholder='elige una imagen' className='flex'/>
          </div>
          <div className='flex flex-col gap-4 w-full'>
            <div className='flex w-full gap-2'>
              <label htmlFor="name" className='w-40'>Nombre(s):</label>
              <input type="text" name='name' className='w-full p-2 rounded-md bg-slate-100 border border-transparent  focus:outline-none focus:border-slate-400' placeholder='John'/>
            </div>
            <div className='flex w-full gap-2'>
              <label className='w-40' htmlFor="last_name">Apellidos:</label>
              <input type="text" name='last_name' className='w-full p-2 rounded-md bg-slate-100 border border-transparent  focus:outline-none focus:border-slate-400' placeholder='Doe'/>
            </div>
            <div className='flex w-full gap-2'>
              <label className='w-40' htmlFor="phone">Teléfono:</label>
              <input type="text" name='phone' className='w-full p-2 rounded-md bg-slate-100 border border-transparent  focus:outline-none focus:border-slate-400' placeholder='(123)456 7890'/>
            </div>
            <div className='flex w-full gap-2'>
              <label className='w-40' htmlFor="email">Correo Electrónico:</label>
              <input type="text" name='email' className='w-full p-2 rounded-md bg-slate-100 border border-transparent  focus:outline-none focus:border-slate-400' placeholder='johndoe@example.com'/>
            </div>
            <div className='flex flex-col w-full gap-2'>
              <label htmlFor="address">Dirección:</label>
              <textarea name='address' className='w-full p-2 rounded-md bg-slate-100 border border-transparent  focus:outline-none focus:border-slate-400' title='address field' rows={4}/>
            </div>
            <label>
              Tipo de Cliente:
              <select name="type" defaultValue='minors' title='tipo de cliente' className='px-2'>
                <option value="minors">Minorista</option>
                <option value="wholesaler">Mayorista</option>
              </select>
            </label>
            <div className='flex justify-around mt-5 font-bold'>
              <button type='reset' className='bg-red-400 py-2 px-3 text-white rounded-md hover:bg-red-500' onClick={() => router.back()}>
                Cancelar
              </button>
              <button type='submit'className='bg-green-400 py-2 px-3 rounded-md hover:bg-green-500'>
                { type === 'edit' ? 'Actualizar' : 'Agregar'}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
