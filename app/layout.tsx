import type { Metadata } from 'next'

import { Analytics } from '@vercel/analytics/react'

import '@/styles/globals.css';
import { inter } from '@/styles/fonts'
import ProgressBarProvider from '@/components/ProgresBar'
import AuthProvider from '@/components/auth-provider';
import ReduxContextProvider from '@/components/redux-provider';

export const metadata: Metadata = {
  title: 'Paqueteria 5 Estrellas',
  description: 'Dashboard App home page',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <AuthProvider>
        <ReduxContextProvider>
          <body className={`${inter.className} transition-all duration-300 ease-in-out`}>
            <ProgressBarProvider>
              {children}
            </ProgressBarProvider>
            <Analytics />
          </body>
        </ReduxContextProvider>
      </AuthProvider>
    </html>
  )
}
