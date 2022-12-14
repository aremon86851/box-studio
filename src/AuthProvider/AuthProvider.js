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


    // Create User With Email and password
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // Signin with email and password
    const login = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // Log out with email and password
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    // Login with google
    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }


    // Get current user
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            return unsubscribe()
        }
    }, [])

    // Here is all value for react context
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