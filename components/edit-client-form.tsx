'use client'

import { useTransition } from 'react';

import * as z from 'zod';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { ClipLoader } from 'react-spinners';
import { zodResolver } from '@hookform/resolvers/zod';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Input } from '@/components/ui/input';
import { editClient } from '@/actions/clients';
import { Button } from '@/components/ui/button';
import { ClientProps } from '@/types/client.types';
import { Textarea } from '@/components/ui/textarea';
import { EditClientSchema } from '@/schema/client.schema';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'

export default function EditClientBtn({ client }: { client: ClientProps}) {
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof EditClientSchema>>({
    resolver: zodResolver(EditClientSchema),
    defaultValues: {
      name: client.name || '',
      last_name: client.last_name || '',
      email: client.email || '',
      phone: client.phone || '',
      address: client.address || '',
      type: client.type,
    }
  })

  const handleForm = async ( data : z.infer<typeof EditClientSchema>) => {
    startTransition( () => {
      editClient(data, client.id)
        .then( res => {
          form.reset();
          toast.success(res.message)
        }).catch( error => toast.error(error.message))
    })
  }

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" className="flex gap-1 items-center p-0 justify-start hover:text-emerald-400">
            <FontAwesomeIcon icon={faEdit} className="w-4 h-4"/>
            <span className="md:text-xs">Editar</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className='w-full'>
        <SheetHeader className="mt-6">
          <SheetTitle>Editar Información del Cliente</SheetTitle>
          <SheetDescription>
            Para editar la información actual del cliente, por favor rellene los campos solicitados. Si necesita cambiar el tipo de cliente, por favor elija uno de los disponibles.
          </SheetDescription>
        </SheetHeader>
        <Form {...form} >
          <form onSubmit={form.handleSubmit(handleForm)} className='flex flex-col gap-2 mt-5 max-w-2xl m-auto'>

            <div className="w-full">
              <FormField
                control={form.control}
                name="name"
                render={({field}) => (
                  <FormItem>
                    <FormLabel>Nombre(s)</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        disabled={isPending}
                        placeholder="John"
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
                name="last_name"
                render={({field}) => (
                  <FormItem>
                    <FormLabel>Apellido(s)</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        disabled={isPending}
                        placeholder="Doe"
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
                name="email"
                render={({field}) => (
                  <FormItem>
                    <FormLabel>Correo Electrónico</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        disabled={isPending}
                        placeholder="example@example.com"
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
                name="phone"
                render={({field}) => (
                  <FormItem>
                    <FormLabel>Teléfono</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        disabled={isPending}
                        placeholder="664 312 213"
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
                name="address"
                render={({field}) => (
                  <FormItem>
                    <FormLabel>Dirección</FormLabel>
                    <FormControl>
                      <Textarea
                        {...field}
                        disabled={isPending}
                        placeholder="664 312 213"
                        className="w-full bg-slate-200 dark:bg-slate-500"
                        rows={3}
                        required
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
                name="type"
                render={({field}) => (
                  <FormItem>
                    <FormLabel>Tipo de Cliente</FormLabel>
                    <Select onValueChange={field.onChange} required>
                      <FormControl>
                        <SelectTrigger className="w-full bg-slate-200 dark:bg-slate-500">
                          <SelectValue placeholder="Selecciona un tipo de cliente" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className='w-full' >
                        <SelectItem value='minors'>Minorista</SelectItem>
                        <SelectItem value='wholesaler'>Mayorista</SelectItem>
                      </SelectContent>
                    </Select>
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
                    <div className='flex items-center'>
                      <ClipLoader
                        color='#FFF'
                        loading={isPending}
                        aria-label='Registrando'
                        size={24}
                      />
                    </div>
                  ) : (
                    <span>Actualizar</span>
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
