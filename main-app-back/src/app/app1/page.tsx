'use client'
import React, { useEffect, useState } from 'react';
import { LoggedInRoute } from '@/lib/protectedRoute';
import Link from 'next/link';

import App1 from '../../../../app1/src/app';
import { useAuth } from '@/context/AuthUserContext';

export default function AppContainer() {
    const auth = useAuth();
    const [ user, setUser ] = useState(null as { email: string } | null);

    useEffect(() => {
        if (auth.authUser) {
            setUser(auth.authUser);
        } else {
            setUser(null);
        }
    }, [auth])

    return (
        <LoggedInRoute>
            <div className="flex flex-col justify-between items-center">
                <Link href="/portal">
                    <span className="text-lg">Return to Portal</span>
                </Link>
                <App1
                    getAuth={() => auth}
                    getUser={() => user}/>
            </div>
        </LoggedInRoute>
    )
}