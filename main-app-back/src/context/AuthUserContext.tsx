import { createContext, useContext, Context, ReactNode, useState } from 'react'
import useFirebaseAuth from '../lib/useFirebaseAuth';

export interface AuthUserContext {
  authUser: {uid: string, email: string} | null;
  loading: boolean;
  signInWithEmailAndPassword: (email: String, password: String) => Promise<any>;
  createUserWithEmailAndPassword: (email: String, password: String) => Promise<any>;
  signOut: () => Promise<any>;
}

export const authUserContext = createContext({
  authUser: null,
  loading: true,
  signInWithEmailAndPassword: async (email: String, password: String) => {},
  createUserWithEmailAndPassword: async (email: String, password: String) => {},
  signOut: async () => {}
} as AuthUserContext);

export function AuthUserProvider({ children }: { children: ReactNode }) {
  const auth = useFirebaseAuth()
  return <authUserContext.Provider value={auth as AuthUserContext}>{children}</authUserContext.Provider>;
}
// custom hook to use the authUserContext and access authUser and loading
export const useAuth = () => useContext(authUserContext);