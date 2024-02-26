import type { NextAuthConfig } from 'next-auth';

import bcrypt from 'bcryptjs';
import Credentials from 'next-auth/providers/credentials';

import { LoginSchema } from '@/schema';
import { getUserByUserName } from '@/data/user';


/**
 * Configuration for NextAuth.js authentication.
 *
 * Defines a single Credentials provider that handles username/password login.
 * Validates credentials against the user data source before returning the user object.
 */
export default {
    providers: [
        Credentials({
            async authorize(credentials) {
                const validateFields = LoginSchema.safeParse(credentials);

                if (validateFields.success) {
                    const { username, password } = validateFields.data;

                    const user = await getUserByUserName(username);
                    if (!user) return null;

                    const passwordMatch = await bcrypt.compare(
                        password,
                        user.password
                    );

                    if (!passwordMatch) throw new Error('Contraseña incorrecta');

                    return user;
                }

                return null;
            }
        })
    ]
} satisfies NextAuthConfig;
