'use server'

import { revalidatePath } from "next/cache";

import * as z from 'zod';

import prisma from "@/lib/prisma";
import { AddNewClientSchema, EditClientSchema } from "@/schema/client.schema";

/**
 * Deletes a client by the given ID.
 *
 * @param {string} id - The ID of the client to be deleted.
 * @return {Promise<object>} A message indicating the success of the deletion.
 */
export async function deleteClient(id: string) {
  try {
    const clientDeleted = await prisma.client.delete({
      where: { id: id }
    })

    if (!clientDeleted) throw new Error('No se pudo eliminar el cliente')

    revalidatePath('/dashboard/clientes')
    return { message: 'Cliente eliminado' }
  } catch (error) {
    throw error;
  }
}




/**
 * Edit a client with the given data and id and returns a message indicating the result.
 *
 * @param {z.infer<typeof EditClientSchema>} data - the data to edit the client with
 * @param {string} id - the id of the client to edit
 * @return {Promise<{ message: string; }>} a message indicating the result of the edit
 */
export async function editClient(data: z.infer<typeof EditClientSchema>, id: string,): Promise<{ message: string; }> {
  try {
    const validFields = EditClientSchema.safeParse(data);
    if (!validFields.success) throw new Error('Algunos de los campos son inválidos. Verifica los campos.');

    const { name, last_name, email, phone, address, type } = validFields.data;

    const edited = await prisma.client.update({
      where: { id: id },
      data: {
        name,
        last_name,
        email,
        phone,
        address,
        type,
      }
    })

    if (!edited) throw new Error('No se pudo modificar el cliente');

    revalidatePath('/dashboard/clientes')
    return { message: 'Cliente modificado correctamente' }
  } catch (error) {
    throw error
  }
}


/**
 * Create a new client with the given data.
 *
 * @param {z.infer<typeof AddNewClientSchema>} data - the data to create the new client
 * @return {Promise<{ message: string }>} a promise that resolves to a message indicating the result of creating the client
 */
export async function createNewClient(data: z.infer<typeof AddNewClientSchema>): Promise<{ message: string; }>{
  try {
    const validFields = AddNewClientSchema.safeParse(data);
    if (!validFields.success) throw new Error('Algunos de los campos son inválidos. Verifica los campos.');

    const { name, last_name, email, phone, address, type } = validFields.data;

    const newClient = await prisma.client.create({
      data: {
        name,
        last_name,
        email,
        phone,
        address,
        type,
      }
    })

    if(!newClient) throw new Error('No se pudo crear el cliente');

    revalidatePath('/dashboard/clientes')
    return { message: 'Cliente creado correctamente' }
  } catch (error) {
    throw error
  }
}