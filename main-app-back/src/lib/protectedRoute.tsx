'use client'
import { useEffect, ReactNode } from 'react';
import { useAuth } from '@/context/AuthUserContext'
import { useRouter } from 'next/navigation';

export const LoggedInRoute = ({ children }: { children: ReactNode }) => {
    const auth = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!auth.authUser) {
            router.push('/login');
        }
    }, [auth, router])

    return (
        <div>
            {!auth.authUser ? (<p className="flex flex-row justify-center align-center">Redirecting to log in...</p>) : (
                <>
                    {children}
                </>
            )}
        </div>
    )
};