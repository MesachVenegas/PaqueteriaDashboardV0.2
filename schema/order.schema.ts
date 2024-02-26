import * as z from 'zod';

export const AddresserDataSchema = z.object({
  full_name: z.string().toLowerCase(),
  phone: z.string(),
  street: z.string().toLowerCase(),
  number: z.string(),
  colony: z.string().toLowerCase(),
  delegation: z.string().toLowerCase(),
  zip_code: z.string(),
  state: z.string(),
  references: z.optional(z.string().toLowerCase()),
  length: z.string(),
  height: z.string(),
  width: z.string(),
  weight: z.string(),
  delivery_type: z.enum(['land', 'air']),
  order_total: z.string()
})




