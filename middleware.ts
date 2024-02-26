import NextAuth from "next-auth";
import authConfig from "./auth.config";
import {
  authRoutes,
  publicRoutes,
  apiAuthPrefix,
  DEFAULT_LOGIN_REDIRECT_URL,
  DOMAIN_LOGIN_REDIRECT_URL,
} from '@/routes';


const { auth } = NextAuth(authConfig);

export default auth(req => {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;

  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
  const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
  const isAuthRoute = authRoutes.includes(nextUrl.pathname);

  if(isApiAuthRoute) return null;

  if(isAuthRoute){
    if(isLoggedIn){
      if(process.env.NODE_ENV === 'development'){
        return Response.redirect(new URL(DOMAIN_LOGIN_REDIRECT_URL, nextUrl));
      }
      return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT_URL, nextUrl));
    }
    return null;
  }

  if(!isLoggedIn && !isPublicRoute){
    let callbackUrl = nextUrl.pathname;
    if(nextUrl.search){
      callbackUrl += nextUrl.search;
    }
    const encodeCallbackUrl = encodeURIComponent(callbackUrl);

    return Response.redirect(new URL(
      `/auth/login?callbackUrl=${encodeCallbackUrl}`,
      nextUrl
    ));
    return null;
  }

})

//? Don't invoke middleware in this paths.
export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
}