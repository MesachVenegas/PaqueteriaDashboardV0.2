'use server'

const bcrypt = require('bcrypt');
import { revalidatePath } from "next/cache";
import prisma from "@/app/libs/prisma";
import { Prisma } from "@prisma/client";
import { signIn } from "../auth";
import { AuthError } from "next-auth";
import { redirect } from "next/navigation";
import ReactPDF from "@react-pdf/renderer";
import { OrderSaveProps, PDFData } from "./definitions";
import BillTemplate from "@/components/dashboard/sales/pdfGenerator/BillTemplate";

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
      revalidatePath('/dashboard/clientes');
      revalidatePath('/dashboard/ventas');
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
      revalidatePath('/dashboard/admin');
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
    await signIn('credentials', { username, password })
  } catch (error) {
    if (error instanceof AuthError) {
      throw new Error(error.cause?.err?.message);
    }
    else {
      throw error;
    }
  }
}

export async function createNewProduct(data: Iterable<readonly [PropertyKey, any]>) {
  const { name, description, price, delivery } = Object.fromEntries(data);

  try {
    const newProduct = await prisma.price.create({
      data: {
        name: name,
        description: description,
        price: Number(price),
        delivery: delivery,
      }
    })

    if (newProduct) {
      revalidatePath('/dashboard/productos');
      redirect('/dashboard/productos');
      return newProduct;
    }
  } catch (error) {
    throw error;
  }
}


export const deleteProduct = async (id: number) => {
  try {
    await prisma.price.delete({
      where: {
        id: id
      }
    }).then((product) => {
      revalidatePath('/dashboard/productos');
      return product;
    })
  } catch (error) {
    throw error;
  }
}


export const saveOrder = async (orderData: OrderSaveProps) => {
  const addressed = orderData.addresses;
  const client = orderData.client;
  const subtotal = orderData.subtotal;
  const seller = { id: "96fb7378-7847-4b19-a6be-a149c1a06b48"};
  try {
    const result = await prisma.order.create({
      data: {
        client_id: client.id,
        seller_id: seller.id,
        addressed_name: addressed.name,
        addressed_number: addressed.number,
        addressed_street: addressed.street,
        addressed_colony: addressed.colony,
        addressed_phone: addressed.phone,
        addressed_city: addressed.delegation,
        addressed_reference: addressed.references,
        addressed_state: addressed.state,
        addressed_zip: addressed.zip_code,
        package_height: Number(addressed.height),
        package_length: Number(addressed.length),
        package_width: Number(addressed.width),
        package_weight: Number(addressed.weight),
        payment_type: addressed.payment,
        type: addressed.send,
        total: Number(subtotal),
      }
    })

    console.log(result);
    revalidatePath('/dashboard/ventas');
    redirect('/dashboard/clientes');
  } catch (error) {
    throw error;
  }
}