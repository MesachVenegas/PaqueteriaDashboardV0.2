'use client'

import { useTransition } from 'react'

import * as z from 'zod';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBoxesPacking } from '@fortawesome/free-solid-svg-icons'

import { AddProductSchema } from '@/schema/product.schema'
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from './ui/form';
import { Input } from './ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Button } from './ui/button';
import { ClipLoader } from 'react-spinners';
import { Textarea } from './ui/textarea';
import { createNewProduct } from '@/actions/products';

export default function AddProductButton() {
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof AddProductSchema>>({
    resolver: zodResolver(AddProductSchema),
    defaultValues: {
      name: '',
      description: '',
      cost: '',
      delivery_type: 'land',
    }
  })

  const handleForm = async ( data : z.infer<typeof AddProductSchema> ) => {
    startTransition( () => {
      createNewProduct(data)
        .then( res => {
          form.reset();
          toast.success(res.message)
        }).catch( error => toast.error(error.message))
    })
  }

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button
          type="button"
          className="flex items-center text-white gap-2 bg-blue-600 hover:bg-blue-500 px-3 rounded-md transition-all ease-in"
        >
          <FontAwesomeIcon icon={faBoxesPacking} className="w-4 h-4" />
          <span>Agregar</span>
        </button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader className="mt-6">
          <SheetTitle>Agregar Producto</SheetTitle>
          <SheetDescription>
            Ingresa los datos requeridos para agregar un nuevo producto, al finalizar presiona en Guardar para agregar el nuevo producto.
          </SheetDescription>
        </SheetHeader>
        <Form {...form} >
          <form onSubmit={form.handleSubmit(handleForm)} className='flex flex-col gap-4 mt-5 max-w-2xl m-auto'>

            <div className="space-y-4 w-full">
              <FormField
                control={form.control}
                name="name"
                render={({field}) => (
                  <FormItem>
                    <FormLabel>Nombre</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        disabled={isPending}
                        placeholder="Envió basico terrestre"
                        className="w-full bg-slate-200 dark:bg-slate-500"
                        type='text'
                        required
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              >
              </FormField>
            </div>

            <div className="w-full">
              <FormField
                control={form.control}
                name="description"
                render={({field}) => (
                  <FormItem>
                    <FormLabel>Descripcion</FormLabel>
                    <FormControl>
                      <Textarea
                        {...field}
                        disabled={isPending}
                        placeholder="Envió basico de paquete..."
                        className="bg-slate-200 dark:bg-slate-500"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              >
              </FormField>
            </div>

            <div className='w-full'>
              <FormField
                control={form.control}
                name="delivery_type"
                render={({field}) => (
                  <FormItem>
                    <FormLabel>Tipo de Entrega</FormLabel>
                    <Select onValueChange={field.onChange} required>
                      <FormControl>
                        <SelectTrigger className="w-full bg-slate-200 dark:bg-slate-500">
                          <SelectValue placeholder="Selecciona un tipo de entrega" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className='w-full' >
                        <SelectItem value='land'>Terrestre</SelectItem>
                        <SelectItem value='air'>Aéreo</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              >
              </FormField>
            </div>


            <div className="w-full">
              <FormField
                control={form.control}
                name="cost"
                render={({field}) => (
                  <FormItem>
                    <FormLabel>Precio</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        disabled={isPending}
                        placeholder="100.00"
                        className="bg-slate-200 dark:bg-slate-500"
                        type='number'
                        required
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              >
              </FormField>
            </div>


            <div className='flex flex-col mt-8 justify-center items-center w-full gap-8'>
              <Button type='submit' disabled={isPending} className='w-full bg-emerald-600 dark:text-white hover:bg-emerald-700'>
                {
                  isPending ? (
                    <div className='flex gap-2 items-center'>
                      <span>Guardando...</span>
                      <ClipLoader
                        color='#FFF'
                        loading={isPending}
                        aria-label='Registrando'
                        size={24}
                      />
                    </div>
                  ) : (
                    <span>Guardar</span>
                  )
                }
              </Button>
              <SheetClose asChild>
                <button
                  type='reset'
                  className='w-full bg-red-600 text-white hover:bg-red-700 p-1.5 rounded-md'
                  onClick={ () => form.reset()}
                >
                  Cancelar
                </button>
              </SheetClose>
            </div>
          </form>
        </Form>
      </SheetContent>
    </Sheet>
  )
}
