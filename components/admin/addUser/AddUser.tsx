'use client'

import { useState } from 'react';
import Button from '@/components/dashboard/button/Button'
import SearchBar from '@/components/dashboard/search/SearchBar'
import { faUser, faUserPlus, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { createNewUser } from '@/app/libs/actions';
import { revalidatePath } from 'next/cache';
import { faBlackTie } from '@fortawesome/free-brands-svg-icons';

export default function AddUser({ handleForm }: { handleForm: (data: Iterable<readonly [PropertyKey, any]>) => void}) {
  const [isOpen, setIsOpen] = useState(false);

  const createNewUser = async (data: Iterable<readonly [PropertyKey, any]>) => {
    await handleForm(data);
    setIsOpen(false);
  }


  return (
    <>
      <div className='flex justify-between'>
            <SearchBar placeholder='buscar usuario...' />
            <Button text='Agregar usuario' icon={faUserPlus} type='button' action={() => setIsOpen(true)}/>
      </div>
      {
        isOpen && (
          <div className='flex w-full h-full justify-center items-center absolute z-50 top-0 left-0 backdrop-blur-sm'>
            <div className='bg-slate-200 dark:bg-gray-800 rounded-lg shadow-xl w-full max-w-2xl flex flex-col justify-center items-center p-6 gap-6'>
              <span
                className='self-end flex items-center justify-center cursor-pointer hover:bg-red-500 hover:text-white w-6 h-6 rounded-lg'
                onClick={() => setIsOpen(false)}
              >
                <FontAwesomeIcon icon={faXmark} className='w-5 h-6' />
              </span>
              <h2 className='text-xl'>Agregar Usuario</h2>
              <form action={createNewUser} className='flex flex-col w-full max-w-lg gap-4 px-6'>
                <div className='flex justify-between'>
                  <label className='w-72' htmlFor="name">Usuario:</label>
                  <input
                    className='w-full p-1 rounded-md border border-transparent focus:outline-none focus:border-slate-400'
                    type="text"
                    name='username'
                    placeholder='j.doe'
                    autoFocus
                    required
                  />
                </div>
                <div className='flex justify-between'>
                  <label className='w-72' htmlFor="name">Nombre(s):</label>
                  <input
                    className='w-full p-1 rounded-md border border-transparent focus:outline-none focus:border-slate-400'
                    type="text"
                    name='name'
                    placeholder='John'
                    required
                  />
                </div>
                <div className='flex justify-between'>
                  <label className='w-72' htmlFor="last_name">Apellidos:</label>
                  <input
                    className='w-full p-1 rounded-md border border-transparent focus:outline-none focus:border-slate-400'
                    type="text"
                    name='last_name'
                    placeholder='Doe'
                    required
                  />
                </div>
                <div className='flex justify-between'>
                  <label className='w-72' htmlFor="password">Contraseña:</label>
                  <input
                    className='w-full p-1 rounded-md border border-transparent focus:outline-none focus:border-slate-400'
                    type="password"
                    name='password'
                    placeholder='********'
                    required
                  />
                </div>
                <div className='flex justify-between'>
                  <label className='w-72' htmlFor="confirm_password">Confirmar contraseña:</label>
                  <input
                    className='w-full p-1 rounded-md border border-transparent focus:outline-none focus:border-slate-400'
                    type="password"
                    name='confirm_password'
                    placeholder='*******'
                    required
                  />
                </div>
                <div className='flex justify-around mt-4'>
                  <div className='flex gap-2'>
                    <input type="radio" name="rol" id="admin" value='true'/>
                    <label className='flex gap-1 items-center' htmlFor="admin">
                      <FontAwesomeIcon icon={faBlackTie} className='w-4 h-4' />
                      Administrador
                    </label>
                  </div>
                  <div className='flex gap-2'>
                    <input type="radio" name="rol" id="user" value='false' defaultChecked/>
                    <label className='flex gap-1 items-center' htmlFor="user">
                      <FontAwesomeIcon icon={faUser} className='w-4 h-4' />
                      Usuario
                    </label>
                  </div>
                </div>
                <div className='flex justify-center gap-6 mt-4 font-bold'>
                  <button
                    className='bg-red-600 hover:bg-red-500 text-white transition-colors ease-in py-1 px-3 rounded-md'
                    type='reset'
                    onClick={() => setIsOpen(false)}
                  >
                    Cancelar
                  </button>
                  <button
                    className='bg-blue-600 hover:bg-blue-500 text-white transition-colors ease-in py-1 px-3 rounded-md'
                  >
                    Crear
                  </button>
                </div>
              </form>
            </div>
          </div>
        )
      }
    </>
  )
}
