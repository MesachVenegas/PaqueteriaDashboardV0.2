import { signIn } from "./auth";

export const authConfig = {
  providers: [],
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized({ auth, request }) {
      const isLoggedIn = auth?.user
      const isOnDashboard = request.nextUrl.pathname.startsWith('/dashboard')

      //? Si el usuario esta en el dashboard se comprueba que este logeado.
      if (isOnDashboard) {
        //? Si esta logeado se le permite seguir ahi
        if (isLoggedIn) return true;
        //? Si no se le regresa a la pagina de login
        return false;
      }
      //? Si el usuario se encuentra logeado se le redirecciona al dashboard
      else if (isLoggedIn) {
        return Response.redirect(new URL('/dashboard', request.nextUrl))
      }
      return true;
    },
  },
}