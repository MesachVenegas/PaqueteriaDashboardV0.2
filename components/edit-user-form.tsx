'use client'

import { useTransition } from "react";

import * as z from 'zod';
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { ClipLoader } from "react-spinners";
import { zodResolver } from "@hookform/resolvers/zod";

import { UserProps } from "@/types/user.types";
import { editUser } from "@/actions/user";
import { EditUserSchema } from "@/schema";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import AsideWrapper from "@/components/aside-wrapper";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { SheetClose } from "./ui/sheet";

export default  function EditUserForm({ user } : { user: UserProps }) {
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof EditUserSchema>>({
    resolver: zodResolver(EditUserSchema),
    defaultValues: {
      username: user?.username || undefined,
      name: user?.name || undefined,
      last_name: user?.last_name || undefined,
      role: user?.role || undefined,
      password: undefined
    }
  })

  const registerUser = (data: z.infer<typeof EditUserSchema>) => {
    startTransition( () => {
      editUser(data)
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
    <AsideWrapper
      title="Editar usuario"
      description="Realiza los cambios necesarios y al finalzar guarda los cambios, solo ingresa una contraseña en caso que desees modificarla."
    >
      <Form {...form} >
        <form onSubmit={form.handleSubmit(registerUser)} className='flex flex-col gap-4 mt-5 max-w-2xl m-auto'>

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
    </AsideWrapper>
  )
}
