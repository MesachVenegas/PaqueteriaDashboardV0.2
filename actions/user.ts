'use server'

import { revalidatePath } from 'next/cache';

import * as z from 'zod';
import bcrypt from 'bcryptjs';
import { Role } from '@prisma/client';

import prisma from '@/app/libs/prisma';
import { EditUserSchema, UserRegisterSchema } from '@/schema';
import { UserProps } from '@/types/user';


/**
 * Registers a new user with the provided data.
 *
 * @param data - The data for the new user, validated against the UserRegisterSchema.
 * @returns The newly created user.
 * @throws An error if the data is invalid or if there is an issue creating the user.
 */
export async function registerNewUser(data: z.infer<typeof UserRegisterSchema>) {
  const isValid = UserRegisterSchema.safeParse(data);

  if (!isValid.success) {
    throw new Error("Los campos son inválidos");
  }

  const { username, name, last_name, password, role } = data;

  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const newUser = await prisma.user.create({
      data: {
        username,
        name: name || '',
        last_name: last_name || '',
        password: hashedPassword,
        role: role as Role
      }
    })

    if (!newUser) throw new Error("Ocurrió un problema y no se pudo crear el usuario");

    revalidatePath('/dashboard/settings');
    return { message: "Usuario registrado correctamente" };

  } catch (error) {
    throw error;
  }
}


export async function editUser(data: z.infer<typeof EditUserSchema>) {
  try {
    const isValidFields = EditUserSchema.safeParse(data);

    if(!isValidFields.success) throw new Error("Campos inválidos")

    const { username, name, last_name, role, password } = data;

    return { message: "Usuario modificado correctamente" }
  } catch (error) {
    throw error;
  }
}


/**
 * Deletes a user from the database.
 *
 * @param {string} id - The ID of the user to be deleted.
 * @returns {Promise<{ message: string }>} - A promise that resolves to an object with a message property indicating the success of the operation.
 * @throws {Error} - If the user is not found or an error occurs during the deletion process.
 */
export async function deleteUser(id: string) {
  try {
    const user = await prisma.user.delete({ where: { id: id } });

    if (!user) throw new Error("Usuario no encontrado");

    return { message: "Usuario eliminado" }
  } catch (error) {
    throw error;
  }
}