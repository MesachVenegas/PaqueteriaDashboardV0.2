import NextAuth from 'next-auth';

import authConfig from '@/auth.config';
import { getUserById, getUserByUserName } from './data/user';

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  pages: {
    signIn: '/auth/login',
    signOut: '/',
    error: '/auth/error',
  },
  callbacks: {
    async signIn({ user, account }) {
      const existingUser = await getUserById(user.id);
      if (!existingUser) return false;

      return true;
    },
    async session({ session }) {
      if (session && session.user) {
        const userExist = await getUserByUserName(session.user.email as string);

        if (userExist) {
          session.user.id = userExist.id;
          session.user.role = userExist.role;
          session.user.email = userExist.username;
          session.user.image = userExist.avatar_url;
          session.user.name = userExist.name + ' ' + userExist.last_name;
        }
      }

      return session;
    },
    async jwt({ token }) {
      if (!token.sub) return token;
      const existingUser = await getUserById(token.sub);

      if (!existingUser) return token;
      token.id = existingUser.id;
      token.name = existingUser.name + ' ' + existingUser.last_name;
      token.picture = existingUser.avatar_url;
      token.role = existingUser.role;
      token.email = existingUser.username;

      return token;
    }
  },
  session: { strategy: 'jwt' },
  ...authConfig,
})