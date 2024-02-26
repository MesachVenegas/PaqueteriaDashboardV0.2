'use server'

import { revalidatePath } from "next/cache"

import * as z from 'zod';

import prisma from "@/lib/prisma"
import { AddProductSchema, EditProductSchema } from "@/schema/product.schema"


/**
 * Deletes a product by its ID.
 *
 * @param {string} id - The ID of the product to be deleted
 * @return {object} An object with a message indicating whether the product has been successfully deleted or an error message
 */
export async function deleteProduct(id: string): Promise<{ code: string, message: string }> {
  try {
    const prodDeleted = await prisma.product.delete({
      where: { id: id }
    })

    revalidatePath('/dashboard/productos')

    if (prodDeleted) {
      return { code: 'success', message: 'El producto ha sido eliminado' }
    }

    return { code: 'error', message: 'Error al eliminar el producto' }
  } catch (error) {
    throw new Error('Error al eliminar el producto')
  }
}


/**
 * Creates a new product with the provided data.
 *
 * @param {z.infer<typeof AddProductSchema>} data - the data for the new product
 * @return {Promise<{ message: string }>} an object containing a message about the result of the operation
 */
export async function createNewProduct(data: z.infer<typeof AddProductSchema>): Promise<{ message: string; }> {
  const validateFields = AddProductSchema.safeParse(data);

  try {
    if (!validateFields.success) return { message: 'Campos inválidos' }

    const { name, description, delivery_type, cost } = validateFields.data;

    const newProduct = await prisma.product.create({
      data: {
        name,
        description,
        delivery_type,
        cost: Number(cost)
      }
    })

    if (!newProduct) throw new Error('Error al crear el proyecto');

    revalidatePath('/dashboard/productos')
    return { message: 'Producto creado' }
  } catch (error) {
    throw new Error('Error al crear el producto')
  }
}



/**
 * Update a product with the provided data.
 *
 * @param {z.infer<typeof EditProductSchema>} data - the data to update the product with
 * @param {string} id - the id of the product to update
 * @return {Promise<{ message: string }>} a message indicating the result of the update
 */
export async function updateProduct(data: z.infer<typeof EditProductSchema>, id: string): Promise<{ message: string; }> {
  try {
    const validateFields = EditProductSchema.safeParse(data);
    if(!validateFields.success) throw new Error("Algunos de los campos son inválidos. Verifica los campos");

    const { name, description, delivery_type, cost } = validateFields.data;

    const edited = await prisma.product.update({
      where: { id: id },
      data: {
        name,
        description,
        delivery_type,
        cost: Number(cost)
      }
    })

    if(!edited) throw new Error("El producto no pudo ser modificado");

    revalidatePath('/dashboard/productos')
    return { message: "Producto modificado correctamente" }
  } catch (error) {
    console.error(error);
    throw new Error("Ha ocurrido un error");
  }
}