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
    getUser: () => User | null;
}

export default function App({ getUser, getAuth }: AppProps) {
    const auth = getAuth();
    const user = getUser();

    return (
        <div>
            <h1>In App 1</h1>
            <p>{auth.authUser?.email}</p>
            <p>{user?.email}</p>
        </div>
    )
}