
import * as z from 'zod';

import Button from "@/components/dashboard/button/Button";
import { faLockOpen, faRightToBracket, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { userAuthenticate } from "@/actions/login";
import { useState, useTransition } from "react";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ClipLoader } from "react-spinners";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "@/schema";

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

  /**
   * A function that handles the login process.
   *
   * @param {z.infer<typeof LoginSchema>} data - the data for user authentication
   * @return {void}
   */
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

          <div className='flex flex-col md:flex-row justify-between w-full gap-4'>
            <div className="space-y-4 w-full">
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
            </div>
          </div>

          <div className="space-y-4 w-full">
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
          </div>

          <div className='flex flex-col justify-center items-center w-full gap-8'>
            <button
              type='submit'
              disabled={isPending}
              className='w-full bg-blue-800 dark:text-white hover:bg-blue-700 rounded-md p-2'
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
