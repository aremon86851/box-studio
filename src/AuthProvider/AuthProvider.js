import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebse.config';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, signInWithPopup, GoogleAuthProvider } from "firebase/auth";


export const ReactContext = createContext()

const auth = getAuth(app)

// Google provider
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState()
    const [loading, setLoading] = useState(true)


    // Create User With Email
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = () => {
        return signOut(auth)
    }

    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            return unsubscribe()
        }
    }, [])
    const allValue = {
        user, createUser, login, logOut, googleLogin, loading
    }
    return (
        <ReactContext.Provider value={allValue}>
            {children}
        </ReactContext.Provider>
    );
};

export default AuthProvider;