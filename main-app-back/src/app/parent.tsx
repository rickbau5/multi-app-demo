import Link from 'next/link'
import { useAuth } from '@/context/AuthUserContext'

export default function Parent({
    children
}: {
    children: React.ReactNode
}) {
    const auth = useAuth();

    return (
        <div className="flex flex-col h-screen justify-between">
            {
                auth.loading ? (
                    <div className='flex flex-row justify-center items-center min-h-screen'>
                        <p>Loading...</p>
                    </div>
                ) : (
                    <>
                    <div className='bg-gray-500 h-10 flex flex-row justify-between items-center p-2'>
                        <Link href="/" className="underline">Home</Link>
                        <p className="text-xs">{ auth.authUser ? 'Current user: ' + auth.authUser.email : 'No user' }</p>
                    </div>
                    <div className="mb-auto">
                        {children}
                    </div>
                    {
                        auth.authUser ? (
                            <div className='bg-gray-500 h-10 flex justify-between items-center p-2'>
                                <button className="underline" onClick={auth.signOut}>Sign Out</button>
                            </div>
                        ) : (
                            <div className='bg-gray-500 h-10 flex justify-between items-center p-2'>
                                <Link href="/login" className="underline">Login</Link>
                            </div>
                        )
                    }
                    </>
                )
            }
        </div>
    )
}