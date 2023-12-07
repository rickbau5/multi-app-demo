'use client'

import Link from 'next/link';
import { useAuth } from '@/context/AuthUserContext'
import '@/lib/firebase'

export default function Home() {
  const auth = useAuth();

  return (
    <main className="flex flex-col items-center justify-between p-24">
      {
        auth.authUser ? (
          <Link href="/portal">
            <span className="text-3xl font-bold underline">Portal</span>
          </Link>
        ) :
          (
            <Link href="/login">
              <span className="text-3xl font-bold underline">Login</span>
            </Link>
          )
      }
    </main>
  )
}
