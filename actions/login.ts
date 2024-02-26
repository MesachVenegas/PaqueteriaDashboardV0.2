'use server'

import * as z from 'zod';
import { signIn } from "@/auth";
import { LoginSchema } from "@/schema";
import { AuthError } from "next-auth";
import { redirect } from "next/navigation";
import { DEFAULT_LOGIN_REDIRECT_URL, DOMAIN_LOGIN_REDIRECT_URL } from '@/routes';
export async function userAuthenticate(data: z.infer<typeof LoginSchema>) {
  const validateFields = LoginSchema.safeParse(data);

  if (!validateFields.success) {
    throw new Error("Campos inválidos");
  }

  const { username, password } = validateFields.data;

  try {
    await signIn('credentials', {
      username,
      password,
      redirectTo: process.env.NODE_ENV === 'production' ? DOMAIN_LOGIN_REDIRECT_URL : DEFAULT_LOGIN_REDIRECT_URL
    })
  } catch (error) {
    if (error instanceof AuthError) {
      throw new Error(error.cause?.err?.message);
    }
    else {
      throw error;
    }
  }
}
