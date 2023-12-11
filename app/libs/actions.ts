import prisma from "@/app/libs/prisma";
import { revalidatePath } from "next/cache";
import { Prisma } from "@prisma/client";

export async function createNewClient(data: Iterable<readonly [PropertyKey, any]>) {
  'use server'
  const { name, last_name, phone, address, type, avatar, email } = Object.fromEntries(data);
  try {
    const newClient = await prisma.client.create({
      data: {
        avatar: avatar ? avatar : undefined,
        name: name,
        last_name: last_name,
        phone: phone,
        address: address,
        email: email,
        type: type,
      }
    });

    if (newClient) {
      return newClient;
    }
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === 'P2002') {
        throw new Error('El correo ya se encuentra registrado');
      }
    } else {
      console.error(error);
    }
  }
}

export async function deleteClient(id: string) {
  try {
    const clientDeleted = await prisma.client.delete({
      where: {
        id: id
      }
    });
    if (clientDeleted) {
      revalidatePath('/dashboard/clients');
    }
  } catch (error) {
    console.error(error);
    throw new Error('No se pudo eliminar el cliente');
  }
}