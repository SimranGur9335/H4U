import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { auth } from '../firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut as firebaseSignOut,
  sendPasswordResetEmail,
  onAuthStateChanged,
  User as FirebaseUser,
  getIdToken,
} from 'firebase/auth';
import { AuthState, UserProfile, UserRole } from '../types/auth';

interface AuthContextProps extends AuthState {
  signUp: (email: string, password: string) => Promise<void>;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const useAuth = (): AuthContextProps => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [token, setToken] = useState<string | null>(null);

  const mapFirebaseUser = async (fbUser: FirebaseUser | null): Promise<UserProfile | null> => {
    if (!fbUser) return null;
    await getIdToken(fbUser, true);
    let role: UserRole | null = null;
    try {
      const decoded = await fbUser.getIdTokenResult();
      if (decoded.claims && decoded.claims.role) {
        role = decoded.claims.role as UserRole;
      }
    } catch (_) {}
    return {
      id: fbUser.uid,
      email: fbUser.email ?? '',
      displayName: fbUser.displayName || '',
      role,
      createdAt: fbUser.metadata.creationTime || '',
      updatedAt: fbUser.metadata.lastSignInTime || '',
    };
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (fbUser) => {
      setIsLoading(true);
      if (fbUser) {
        const profile = await mapFirebaseUser(fbUser);
        setUser(profile);
        setIsAuthenticated(true);
        const idToken = await getIdToken(fbUser);
        setToken(idToken);
      } else {
        setUser(null);
        setIsAuthenticated(false);
        setToken(null);
      }
      setIsLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const signUp = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      const cred = await createUserWithEmailAndPassword(auth, email, password);
      const profile = await mapFirebaseUser(cred.user);
      setUser(profile);
      setIsAuthenticated(true);
      const idToken = await getIdToken(cred.user);
      setToken(idToken);
    } finally {
      setIsLoading(false);
    }
  };

  const signIn = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      const cred = await signInWithEmailAndPassword(auth, email, password);
      const profile = await mapFirebaseUser(cred.user);
      setUser(profile);
      setIsAuthenticated(true);
      const idToken = await getIdToken(cred.user);
      setToken(idToken);
    } finally {
      setIsLoading(false);
    }
  };

  const signOut = async () => {
    setIsLoading(true);
    try {
      await firebaseSignOut(auth);
      setUser(null);
      setIsAuthenticated(false);
      setToken(null);
    } finally {
      setIsLoading(false);
    }
  };

  const resetPassword = async (email: string) => {
    setIsLoading(true);
    try {
      await sendPasswordResetEmail(auth, email);
    } finally {
      setIsLoading(false);
    }
  };

  const value: AuthContextProps = {
    user,
    isAuthenticated,
    isLoading,
    token,
    signUp,
    signIn,
    signOut,
    resetPassword,
  } as AuthContextProps;

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
