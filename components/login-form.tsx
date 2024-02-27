'use client'

import { useState, useTransition } from "react";

import * as z from 'zod';
import { useForm } from "react-hook-form";
import { ClipLoader } from "react-spinners";

import { LoginSchema } from "@/schema";
import { Input } from "@/components/ui/input";
import { userAuthenticate } from "@/actions/login";
import { zodResolver } from "@hookform/resolvers/zod";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLockOpen, faUser } from "@fortawesome/free-solid-svg-icons";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";


export default function LoginForm() {
  const [isPending, startTransition] = useTransition();
  const [errorMessage, setErrorMessage] = useState();

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      username: '',
      password: ''
    }
  })

  const handleLogin = (data: z.infer<typeof LoginSchema>) => {
    startTransition( () => {
      userAuthenticate(data)
      .catch((error) => setErrorMessage(error.message))
    })
  }

  return (
    <>
      <Form {...form} >
        <form onSubmit={form.handleSubmit(handleLogin)} className='flex flex-col gap-8 mt-5 max-w-2xl m-auto'>

          <FormField
            control={form.control}
            name="username"
            render={({field}) => (
              <FormItem>
                <FormLabel className='flex gap-2 items-center'>
                  <FontAwesomeIcon icon={faUser} className="w-4 h-4 text-gray-600 dark:text-gray-100 "/>
                  Usuario
                </FormLabel>
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

          <FormField
            control={form.control}
            name="password"
            render={({field}) => (
              <FormItem>
                <FormLabel className='flex gap-2'>
                  <FontAwesomeIcon icon={faLockOpen} className="w-4 h-4 text-gray-600 dark:text-gray-100 "/>
                  Contraseña
                </FormLabel>
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

          <div className='flex flex-col justify-center items-center w-full gap-8'>
            <button
              type='submit'
              disabled={isPending}
              className='w-full bg-blue-800 text-white hover:bg-blue-700 rounded-md p-2'
              >
              {
                isPending ? (
                  <div className='flex gap-2 items-center justify-center'>
                    <ClipLoader
                      color='#FFF'
                      loading={isPending}
                      aria-label='Registrando'
                      size={24}
                    />
                  </div>
                ) : (
                  <div>
                    <span>Iniciar Session</span>
                  </div>
                )
              }
            </button>
            <small className="italic w-full text-xs underline text-gray-600 dark:text-gray-100 ">
              Si olvido su contraseña contacte a su administrador
            </small>
          </div>
        </form>
      </Form>
      {
          errorMessage && (
            <div className="flex justify-center text-black font-medium items-center rounded-md p-2 bg-red-300">
              {errorMessage}
            </div>
          )
        }
    </>
  )
}
