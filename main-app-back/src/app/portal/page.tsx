'use client'
import React, { useEffect } from 'react'
import { useAuth } from '@/context/AuthUserContext'
import Link from 'next/link';

import '@/lib/firebase'
import { LoggedInRoute } from '@/lib/protectedRoute';

export default function Portal() {
    const auth = useAuth();
    return (
        <LoggedInRoute>
            <div className='text-center flex flex-col m-4'>
                <span className="text-3xl">Portal</span>
                <p>Current user: {auth.authUser?.email}</p>
                <div className='flex flex-row justify-around mt-4'>
                    <div className='flex bg-blue-500 p-2'>
                        <Link href="/app1" className="underline underline-offset-2">
                            App 1
                        </Link>
                    </div>
                    <div className='flex bg-green-600 p-2'>
                        <Link href="/app2" className="underline underline-offset-2">
                            App 2
                        </Link>
                    </div>
                </div>
            </div>
        </LoggedInRoute>
    )
}