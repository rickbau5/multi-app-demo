'use client'
import Link from 'next/link';
import { LoggedInRoute } from '@/lib/protectedRoute';

import App2 from '../../../../app2/src/app';

import { useAuth } from '@/context/AuthUserContext';

export default function AppContainer() {
    const auth = useAuth();

    return (
        <LoggedInRoute>
            <div className="flex flex-col justify-between items-center">
                <Link href="/portal">
                    <span className="text-lg">Return to Portal</span>
                </Link>
                <App2 getAuth={() => auth}/>
            </div>
        </LoggedInRoute>
    )
}