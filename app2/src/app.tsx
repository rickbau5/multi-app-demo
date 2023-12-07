'use client'

interface User {
    email: string;
}

interface Auth {
    authUser: User | null;
    loading: boolean;
}

interface AppProps {
    getAuth: () => Auth;
}

export default function App({ getAuth }: AppProps) {
    const auth = getAuth();

    return (
        <div>
            <h1>In App 2</h1>
            <p>{auth.authUser?.email}</p>
        </div>
    )
}