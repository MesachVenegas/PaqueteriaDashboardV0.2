import * as z from 'zod';

export const EditClientSchema = z.object({
  name: z.optional(z.string().toLowerCase()),
  last_name: z.optional(z.string().toLowerCase()),
  email: z.optional(z.string().toLowerCase()),
  phone: z.optional(z.string()),
  address: z.optional(z.string()),
  type: z.enum(['minors', 'wholesaler']),
})


export const AddNewClientSchema = z.object({
  name: z.string({
    required_error: "Este campo es requerido"
  }).toLowerCase(),
  last_name: z.string().toLowerCase(),
  email: z.optional(z.string().toLowerCase()),
  phone: z.string(),
  address: z.string().toLowerCase(),
  type: z.enum(['minors', 'wholesaler']),
})