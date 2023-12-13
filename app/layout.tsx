import type { Metadata } from 'next'
import { inter } from '@/app/ui/fonts'
import './ui/globals.css'
import ProgressBarProvider from './ui/progressBar/ProgresBar'
import { Analytics } from '@vercel/analytics/react'

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
      <body className={`${inter.className} transition-all duration-300 ease-in-out`}>
        <ProgressBarProvider>
          {children}
        </ProgressBarProvider>
        <Analytics />
      </body>
    </html>
  )
}
