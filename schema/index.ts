import * as z from 'zod';


export const LoginSchema = z.object({
  username: z.string({
    required_error: "Este campo es requerido"
  }),
  password: z.string({
    required_error: "Este campo es requerido"
  })
})


export const UserRegisterSchema = z.object({
  username: z.string({
    required_error: "El nombre de usuario es requerido"
  }).min(3, {
    message: "El nombre de usuario es demasiado corto"
  }),
  name: z.optional(z.string()),
  last_name: z.optional(z.string()),
  role: z.string(),
  password: z.string({
    required_error: "Este campo es requerido"
  }).min(6, {
    message: "La contraseña debe tener al menos 6 caracteres"
  }),
})


export const EditUserSchema = z.object({
  avatar_url: z.optional(z.string()),
  username: z.string(),
  name: z.string(),
  last_name: z.string(),
  role: z.string(),
  is_active: z.boolean(),
  password: z.string()
});