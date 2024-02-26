'use server'

import prisma from "@/lib/prisma";


/**
 * Get clients by search query and page number.
 *
 * @param {string} query - The search query.
 * @param {number} page - The page number.
 * @return {Promise<Array>} The list of clients matching the search query.
 */
export async function getClientBySearch( query: string, page: number): Promise<Array<any>>{
  const clientsPerPage = 8;

  try {
    const clients = await prisma.client.findMany({
      where: {
        OR: [
          { name: { contains: query } },
          { phone: { contains: query } },
          { email: { contains: query } },
        ]
      },
      take: clientsPerPage,
      skip: (page - 1) * clientsPerPage,
    });

    if (clients.length === 0) return [];
    return clients;
  } catch (error) {
    throw new Error('Error al obtener los clientes');
  }
}



/**
 * Retrieves the count of clients from the database.
 *
 * @return {Promise<number>} The count of clients
 */
export async function getClientCount(): Promise<number>{
  try {
    const count = await prisma.client.count();

    return count;
  } catch (error) {
    throw error;
  }
}