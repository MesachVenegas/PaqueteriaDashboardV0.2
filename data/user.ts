'use server'

import prisma from "@/lib/prisma";

/**
 * Retrieves a user by their username.
 *
 * @param {string} username - The username of the user to retrieve.
 * @returns {Promise<object>} - A promise that resolves to the user object if found.
 * @throws {Error} - If the user is not found.
 */
export async function getUserByUserName(username: string) {
  try {
    const user = await prisma.user.findUnique({
      where: { username: username }
    })

    if (!user) throw new Error("Usuario no encontrado");

    return user
  } catch (error) {
    throw error
  }
}



/**
 * Gets a user by their ID.
 *
 * @param {string} id - The ID of the user to retrieve.
 * @returns {Promise<User | null>} The user, or null if not found.
 * @throws {Error} If the user is not found.
 */
export async function getUserById(id: string) {
  try {
    const user = await prisma.user.findUnique({
      where: { id: id }
    })

    if (!user) throw new Error("Usuario no encontrado");

    return user;
  } catch (error) {
    throw error;
  }
}

/**
 * Retrieves all users from the database.
 *
 * @returns {Promise<User[]>} A promise that resolves to an array of user objects.
 * @throws {Error} If there are no users registered at the moment.
 */
export async function getAllUsers() {
  try {
    const users = await prisma.user.findMany()

    if (!users) throw new Error("Sin usuarios registrados por el momento");

    return users;
  } catch (error) {
    throw error;
  }
}


/**
 * Search for users based on a search query and page number.
 *
 * @param {string} search - The search query
 * @param {number} page - The page number
 * @return {Promise<object>} An object containing the users and the total count
 */
export async function searchUserByQuery(search: string, page: number): Promise<object> {
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