export const publicRoutes = [
  '/',
  '/login',
  '/error',
];

export const authRoutes = [
  '/forgot-password',
  '/reset-password',
];

export const protectedRoutes = [
  '/dashboard',
  '/dashboard/settings',
  '/dashboard/help',
  '/dashboard/sales',
  '/dashboard/clients',
  '/dashboard/providers',
  '/dashboard/products',
  '/dashboard/bills',
  '/dashboard/reports',
  '/dashboard/cuts',
  '/dashboard/outlays',
  '/dashboard/sales/create',
  '/dashboard/clients/create',
  '/dashboard/providers/create',
  '/dashboard/products/create',
  '/dashboard/bills/create',
  '/dashboard/reports/create',
  '/dashboard/cuts/create',
  '/dashboard/outlays/create',
  '/dashboard/sales/edit',
  '/dashboard/clients/edit',
  '/dashboard/providers/edit',
  '/dashboard/products/edit',
  '/dashboard/bills/edit',
]

export const apiAuthPrefix = '/api/auth';


export const DEFAULT_LOGIN_REDIRECT_URL = '/dashboard';
export const DOMAIN_LOGIN_REDIRECT_URL = '/dashboard';