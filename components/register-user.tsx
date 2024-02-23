'use client'

import { useTransition } from 'react';

import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'react-toastify';
import { ClipLoader } from 'react-spinners';

import { UserRegisterSchema } from '@/schema';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/button';
import { registerNewUser } from '@/actions/user';
import { TabsContent } from '@/components/ui/tabs';
import ToastNotify from '@/components/toast-notify';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export default function RegisterUser() {
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof UserRegisterSchema>>({
    resolver: zodResolver(UserRegisterSchema),
    defaultValues: {
      username: '',
      name: '',
      last_name: '',
      role: '',
      password: ''
    }
  })

  const registerUser = (data: z.infer<typeof UserRegisterSchema>) => {
    startTransition( () => {
      registerNewUser(data)
      .then( res => {
        form.reset();
        toast.success(res.message);
      })
      .catch( error => {
        if(error.message) toast.error(error.message);
        toast.error(error)
      })
    } )
  }

  return (
    <TabsContent value="register" className='p-4'>
      <ToastNotify />
      <h2 className='text-2xl text-center'>Registrar usuario</h2>
      <Form {...form} >
        <form onSubmit={form.handleSubmit(registerUser)} className='flex flex-col gap-8 mt-5 max-w-2xl m-auto'>

          <div className='flex flex-col md:flex-row justify-between w-full gap-4'>
            <div className="space-y-4 w-full">
              <FormField
                control={form.control}
                name="username"
                render={({field}) => (
                  <FormItem>
                    <FormLabel>Usuario</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        disabled={isPending}
                        placeholder="johndoe.22"
                        className="w-full bg-slate-200 dark:bg-slate-500"
                        type='text'
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
                name="role"
                render={({field}) => (
                  <FormItem>
                    <FormLabel>Rol</FormLabel>
                    <Select onValueChange={field.onChange} required>
                      <FormControl>
                        <SelectTrigger className="w-full bg-slate-200 dark:bg-slate-500">
                          <SelectValue placeholder="Selecciona una rol" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className='w-full' >
                        <SelectItem value='user'>Usuario</SelectItem>
                        <SelectItem value='admin'>Administrador</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              >
              </FormField>
            </div>
          </div>

          <div className='flex flex-col md:flex-row justify-between gap-4 w-full'>
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
                        className="bg-slate-200 dark:bg-slate-500"
                        type='text'
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
                        className="bg-slate-200 dark:bg-slate-500"
                        type='text'
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              >
              </FormField>
            </div>
          </div>

          <div className="space-y-4 w-full">
            <FormField
              control={form.control}
              name="password"
              render={({field}) => (
                <FormItem>
                  <FormLabel>Contraseña</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      placeholder="******"
                      className="bg-slate-200 dark:bg-slate-500"
                      type='password'
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            >
            </FormField>
          </div>

          <div className='flex flex-col mt-8 justify-center items-center w-full gap-8'>
            <Button type='submit' disabled={isPending} className='w-full bg-blue-800 dark:text-white hover:bg-blue-700'>
              {
                isPending ? (
                  <div className='flex gap-2 items-center'>
                    <span>Registrando...</span>
                    <ClipLoader
                      color='#FFF'
                      loading={isPending}
                      aria-label='Registrando'
                      size={24}
                    />
                  </div>
                ) : (
                  <>
                    <span>Registrar</span>
                  </>
                )
              }
            </Button>
            <button type='reset' className='max-w-xs hover:underline italic text-xs' >
              Limpiar Formulario
            </button>
          </div>
        </form>
      </Form>
    </TabsContent>
  )
}
