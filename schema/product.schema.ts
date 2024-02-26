import * as z from 'zod';

export const AddProductSchema = z.object({
  name: z.string({
    required_error: "Este campo es requerido"
  }).toLowerCase(),
  description: z.optional(z.string().toLowerCase()),
  delivery_type: z.enum(['land', 'air']),
  cost: z.string({
    required_error: "Este campo es requerido"
  })
})


export const EditProductSchema = z.object({
  name: z.optional(z.string().toLowerCase()),
  description: z.optional(z.string().toLowerCase()),
  delivery_type: z.enum(['land', 'air']),
  cost: z.optional(z.string())
})