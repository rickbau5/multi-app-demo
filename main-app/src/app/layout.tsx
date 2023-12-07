'use client'
import { Inter } from 'next/font/google'
import './globals.css'
import { AuthUserProvider } from '@/context/AuthUserContext'
import '@/lib/firebase'
import Parent from './parent'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <AuthUserProvider>
      <html lang="en">
        <body className={inter.className}>
          <Parent>
            {children}
          </Parent>
        </body>
      </html>
    </AuthUserProvider>
  )
}
