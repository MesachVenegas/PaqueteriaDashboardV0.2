import prisma from "./prisma";
import { ClientProps } from '@/app/libs/definitions';
import { Prisma } from "@prisma/client";


export async function getClients(search: string, page: number) {
  const clientsPerPage = 8;

  try {
    const count = await prisma.client.count()
    const clients = await prisma.client.findMany({
      where: {
        OR: [
          { name: { contains: search } },
          { last_name: { contains: search } },
          { phone: { contains: search } },
        ]
      },
      take: clientsPerPage,
      skip: (page - 1) * clientsPerPage,
    });
    if (clients.length === 0) return [];
    return { clients, count };
  } catch (error) {
    console.log(error);
    throw new Error('Error al obtener los clientes');
  }
}

export async function createNewClient(data: ClientProps) {
  const { name, last_name, phone, address, type, avatar, email } = data;
  try {
    const newClient = await prisma.client.create({
      data: {
        avatar: avatar ? avatar : '',
        name: name,
        last_name: last_name,
        phone: phone,
        address: address,
        email: email,
        type: type,
      }
    });

    return newClient;
  } catch (error) {
    console.log(error);
  }
}