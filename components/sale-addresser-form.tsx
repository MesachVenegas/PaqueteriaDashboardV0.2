'use client'

import { useTransition, useState, useEffect } from 'react';

import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { Card, Title } from '@tremor/react';
import { zodResolver } from '@hookform/resolvers/zod';

import { states } from '@/lib/constants';
import { valueFormatter } from "@/lib/utils";
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { SaleFormProps } from '@/types/order.types';
import { ClientProps } from '@/types/client.types';
import { Textarea } from '@/components/ui/textarea';
import { AddresserDataSchema } from '@/schema/order.schema';
import { setClient } from '@/redux/features/sale-client.slice';
import { useAppDispatch, useAppSelector } from '@/hooks/useRedux';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ProductProps } from '@/types/product.types';


export default function SaleForm( { products } : SaleFormProps) {
  const dispatch = useAppDispatch();
  const [isPending, startTransition] = useTransition();
  const client = useAppSelector(state => state.client_select_to_sale);
  const form = useForm<z.infer<typeof AddresserDataSchema>>({
    resolver: zodResolver(AddresserDataSchema),
    defaultValues: {
      full_name: '',
      phone: '',
      street: '',
      number: '',
      colony: '',
      delegation: '',
      zip_code: '',
      state: '',
      references: '',
      length: '',
      height: '',
      width: '',
      weight: '',
      delivery_type: 'land',
      order_total: ''
    }
  })

  const volumetric = Number(form.watch('weight')) * Number(form.watch('length')) * Number(form.watch('width')) / 5000 ;
  const total = Number(form.watch('order_total')) || 0;

  function handleCancel(){
    form.reset()
    dispatch(setClient({} as ClientProps))
  }


  const handleForm = async ( data : z.infer<typeof AddresserDataSchema> ) => {
    startTransition( () => {
      console.log(data);
      // createNewProduct(data)
      //   .then( res => {
      //     form.reset();
      //     toast.success(res.message)
      //   }).catch( error => toast.error(error.message))
    })
  }

  return (
    <Card className='w-full bg-slate-100 dark:bg-slate-900 rounded-md'>
      <div className='flex flex-col justify-center gap-4'>
        <Title className='text-md text-center lg:text-xl'>
          Ingrese los datos del destinatario y el paquete
        </Title>
        <p className='text-sm text-gray-600 dark:text-slate-400'>
          Todos las medidas son en centímetros. Ingrese los datos requeridos para generar una nueva orden de venta, y proceder al pago.
          <br />
          Todos los campos marcados con (*) son obligatorios.
        </p>
      </div>

      <Form {...form} >
        <form onSubmit={form.handleSubmit(handleForm)} className='flex flex-col 2xl:flex-row gap-8 max-w-7xl mx-auto py-6 mt-5'>
          {/* Datos del destinatario */}
          <div className='w-full md:max-w-3xl mx-auto'>
            <div className='border p-1 rounded-lg text-center bg-slate-300 dark:bg-slate-800 mt-4'>Datos del Destinatario</div>
            <FormField
              control={form.control}
              name="full_name"
              render={({ field }) => (
                <FormItem className='flex items-center justify-between gap-6'>
                  <FormLabel className='w-[150px]'>Nombre*</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      placeholder='Ej. Juan Mendoza'
                      className="w-full max-w-md bg-slate-300 dark:bg-slate-800"
                      type="text"
                      required
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem className='flex items-center justify-between gap-6'>
                  <FormLabel className='w-[150px]'>Teléfono*</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      placeholder='Ej. (+52) 55 1234 5678'
                      className="w-full max-w-md bg-slate-300 dark:bg-slate-800"
                      type="text"
                      required
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="street"
              render={({ field }) => (
                <FormItem className='flex items-center justify-between gap-6'>
                  <FormLabel className='w-[150px]'>Calle*</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      placeholder='Ej. Calle de los abetos'
                      className="w-full max-w-md bg-slate-300 dark:bg-slate-800"
                      type="text"
                      required
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className='flex flex-col md:flex-row w-full justify-between md:gap-4'>
              <FormField
                control={form.control}
                name="number"
                render={({ field }) => (
                  <FormItem className='flex items-center justify-between w-full md:w-1/2 gap-6'>
                    <FormLabel className='w-[150px]'>Numero*</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        disabled={isPending}
                        placeholder='Ej. 7245'
                        className="w-full md:max-w-[180px] bg-slate-300 dark:bg-slate-800"
                        type="text"
                        required
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="colony"
                render={({ field }) => (
                  <FormItem className='flex items-center justify-between w-full md:w-1/2 gap-6'>
                    <FormLabel className='w-[150px]'>Colonia*</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        disabled={isPending}
                        placeholder='Ej. Calle de los abetos'
                        className="w-full md:max-w-[180px] bg-slate-300 dark:bg-slate-800"
                        type="text"
                        required
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className='flex flex-col md:flex-row w-full justify-between md:gap-4'>
              <FormField
                control={form.control}
                name="delegation"
                render={({ field }) => (
                  <FormItem className='flex items-center justify-between w-full md:w-1/2 gap-6'>
                    <FormLabel className='w-[150px]'>Municipio*</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        disabled={isPending}
                        placeholder='Ej. Indios verdes'
                        className="w-full md:max-w-[180px] bg-slate-300 dark:bg-slate-800"
                        type="text"
                        required
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="zip_code"
                render={({ field }) => (
                  <FormItem className='flex items-center justify-between w-full md:w-1/2 gap-6'>
                    <FormLabel className='w-[150px]'>Codigo Postal*</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        disabled={isPending}
                        placeholder='Ej. 33304'
                        className="w-full md:max-w-[180px] bg-slate-300 dark:bg-slate-800"
                        type="text"
                        required
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="state"
              render={({field}) => (
                <FormItem className='flex items-center justify-between gap-6'>
                  <FormLabel className='w-[150px]'>Estado*</FormLabel>
                  <Select onValueChange={field.onChange} required>
                    <FormControl>
                      <SelectTrigger className="w-full max-w-md bg-slate-300 dark:bg-slate-800">
                        <SelectValue placeholder="Selecciona el estado" className='placeholder:text-ellipsis'/>
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className='w-full' >
                      {
                        states.map( (state: string) => (
                          <SelectItem key={state} value={state}>{state}</SelectItem>
                        ))
                      }
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            >
            </FormField>

            <FormField
              control={form.control}
              name="references"
              render={({ field }) => (
                <FormItem className='flex items-center justify-between gap-6'>
                  <FormLabel className='w-[150px]'>Referencias</FormLabel>
                  <FormControl>
                    <Textarea
                      {...field}
                      disabled={isPending}
                      placeholder='Ej. entre calle ... y calle ...'
                      className="w-full max-w-md bg-slate-300 dark:bg-slate-800"
                      rows={4}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Datos del paquete a enviar */}
          <div className='w-full md:max-w-3xl mx-auto'>
            <div className='border p-1 rounded-lg text-center bg-slate-300 dark:bg-slate-800 mt-4'>Datos del Paquete</div>
            <div className='flex flex-col md:flex-row w-full justify-between md:gap-4'>
              <FormField
                control={form.control}
                name="length"
                render={({ field }) => (
                  <FormItem className='flex items-center justify-between w-full md:w-1/2 gap-6'>
                    <FormLabel className='w-[150px]'>Largo*</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        disabled={isPending}
                        placeholder='Ej. 20'
                        className="w-full md:max-w-[180px] bg-slate-300 dark:bg-slate-800"
                        type="number"
                        min={0}
                        required
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="height"
                render={({ field }) => (
                  <FormItem className='flex items-center justify-between w-full md:w-1/2 gap-6'>
                    <FormLabel className='w-[150px]'>Alto*</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        disabled={isPending}
                        placeholder='Ej. 10'
                        className="w-full md:max-w-[180px] bg-slate-300 dark:bg-slate-800"
                        type="number"
                        min={0}
                        required
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className='flex flex-col md:flex-row w-full justify-between md:gap-4'>
              <FormField
                control={form.control}
                name="width"
                render={({ field }) => (
                  <FormItem className='flex items-center justify-between w-full md:w-1/2 gap-6'>
                    <FormLabel className='w-[150px]'>Ancho*</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        disabled={isPending}
                        placeholder='Ej. 10'
                        className="w-full md:max-w-[180px] bg-slate-300 dark:bg-slate-800"
                        type="number"
                        min={0}
                        required
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="weight"
                render={({ field }) => (
                  <FormItem className='flex items-center justify-between w-full md:w-1/2 gap-6'>
                    <FormLabel className='w-[150px]'>Peso*</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        disabled={isPending}
                        placeholder='Ej. 10'
                        className="w-full md:max-w-[180px] bg-slate-300 dark:bg-slate-800"
                        type="number"
                        min={0}
                        required
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
              <FormField
                control={form.control}
                name="delivery_type"
                render={({field}) => (
                  <FormItem className='flex items-center justify-between gap-6'>
                    <FormLabel className='w-[150px]'>Tipo de Envió*</FormLabel>
                    <Select onValueChange={field.onChange} required>
                      <FormControl>
                        <SelectTrigger className="w-full max-w-md bg-slate-300 dark:bg-slate-800">
                          <SelectValue placeholder="Selecciona el tipo de envió" />
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

            {/* Detalles de la orden */}
            <div className='flex font-bold justify-between border p-4 rounded-lg text-lg md:text-xl text-center bg-slate-300 dark:bg-slate-800 mt-4'>
              Remitente
              <span className='capitalize'>
                {`${client.name !== undefined ? client.name : ''} ${client.last_name !== undefined ? client.last_name : ''}`}
              </span>
            </div>
            <div className='flex font-bold justify-between border p-4 rounded-lg text-lg md:text-xl text-center bg-slate-300 dark:bg-slate-800 mt-4'>
              Peso Volumétrico Calculado
              <span>{volumetric} kgs</span>
            </div>
            <FormField
              control={form.control}
              name="order_total"
              render={({field}) => (
                <FormItem className='flex items-center justify-between gap-6'>
                  <FormLabel className='w-[150px]'>Paquete Seleccionado</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    required
                  >
                    <FormControl>
                      <SelectTrigger className="w-full max-w-md bg-slate-300 dark:bg-slate-800">
                        <SelectValue placeholder="Selecciona un paquete" className='placeholder:text-ellipsis'/>
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className='w-full' >
                      {
                        products.map( (product: ProductProps) => {
                          if(form.watch('delivery_type') === product.delivery_type){
                            return (
                              <SelectItem key={product.id} value={String(product.cost)}>
                                {product.name}
                              </SelectItem>
                            )
                          }
                        })
                      }
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            >
            </FormField>
            <div className='flex font-bold justify-between border p-4 rounded-lg text-lg md:text-xl text-center bg-slate-300 dark:bg-slate-800 mt-4'>
              Total
              <span>{valueFormatter(total)}</span>
            </div>

            <div className='flex justify-between gap-4 mt-8'>
              <Button variant='destructive' type='reset' onClick={handleCancel}>
                  Cancelar
              </Button>
              <Button type='submit' className='dark:bg-yellow-500 font-bold dark:hover:bg-yellow-400'>
                  Crear Orden
              </Button>
            </div>
          </div>

        </form>
      </Form>
    </Card>
  )
}
