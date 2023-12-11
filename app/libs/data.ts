import prisma from "./prisma";
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


export async function getUsers(search: string, page: number) {
  const usersPerPage = 6;

  try {
    const count = await prisma.user.count()
    const users = await prisma.user.findMany({
      where: {
        OR: [
          { name: { contains: search } },
          { last_name: { contains: search } },
          { username: { contains: search } },
        ]
      },
      take: usersPerPage,
      skip: (page - 1) * usersPerPage,
    });
    if (users.length === 0) return [];
    return { users, count };
  } catch (error) {
    console.log(error);
    throw new Error('Error al obtener los usuarios');
  }
}


export async function getClient(id: string) {
  try {
    const client = await prisma.client.findUnique({
      where: { id },
      include: {
        orders: {
          where: { client_id: id }
        },
      },
    });
    if (!client) return [];
    return client;
  } catch (error) {
    console.log(error);
    throw new Error('Error al obtener el cliente');
  }
}
