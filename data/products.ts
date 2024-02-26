'use server'

import prisma from '@/lib/prisma';


/**
 * Retrieves products based on search criteria and page number.
 *
 * @param {number} page - The page number for pagination
 * @param {string} search - The search criteria for products
 * @return {Promise<Array>} An array of products that match the search criteria
 */
export async function getProductsBySearch(page: number, search: string,): Promise<Array<any>> {
  const productsPerPage = 6;

  try {
    const products = await prisma.product.findMany({
      where: {
        OR: [
          { name: { contains: search } },
        ]
      },
      take: productsPerPage,
      skip: (page - 1) * productsPerPage,
    });
    if (products.length === 0) return [];
    return products;
  } catch (error) {
    throw new Error('Error al obtener los precios');
  }
}


/**
 * Retrieves all products from the database.
 *
 * @return {Promise} An array of products, or null if no products are found.
 */
export async function getAllProducts(): Promise<any> {
  try {
    const products = await prisma.product.findMany();

    if(!products) return [];

    return products;
  } catch (error) {
    throw new Error('Error al obtener los productos');
  }
}

/**
 * Asynchronous function to retrieve the count of products.
 *
 * @return {Promise<number>} The count of products
 */
export async function getProductsCount(): Promise<number>{
  try {
    const count = await prisma.product.count();

    if(!count) return 0;

    return count;
  } catch (error) {
    throw new Error('Error al obtener el total de los productos');
  }
}