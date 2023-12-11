'use server'

const bcrypt = require('bcrypt');
import { revalidatePath } from "next/cache";
import prisma from "@/app/libs/prisma";
import { Prisma } from "@prisma/client";
import { signIn } from "../auth";
import { redirect } from "next/navigation";

export async function createNewClient(data: Iterable<readonly [PropertyKey, any]>) {
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

export async function createNewUser(data: Iterable<readonly [PropertyKey, any]>) {
  const { username, name, last_name, password, confirm_password, rol } = Object.fromEntries(data);

  const salt = await bcrypt.genSalt(10);
  const passwordHash = await bcrypt.hash(password, salt);

  try {
    const newUser = await prisma.user.create({
      data: {
        username: username,
        name: name,
        last_name: last_name,
        password: passwordHash,
        is_admin: rol === 'true' ? true : false,
      }
    })

    if (newUser) {
      return newUser;
    }
  } catch (error) {
    console.error(error);
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

export async function deleteUser(id: string) {
  try {
    const clientDeleted = await prisma.user.delete({
      where: {
        id: id
      }
    });
    if (clientDeleted) {
      revalidatePath('/dashboard/admin');
    }
  } catch (error) {
    console.error(error);
    throw new Error('No se pudo eliminar el cliente');
  }
}

export async function authenticate(data: Iterable<readonly [PropertyKey, any]>) {
  const { username, password } = Object.fromEntries(data);

  try {
    await signIn('credentials', {username, password})

  } catch (error) {
    throw error;
  }
}