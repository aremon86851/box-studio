import React, { createContext } from 'react';
import app from '../firebase/firebse.config';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export const ReactContext = createContext()

const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const allValue = { createUser }
    return (
        <ReactContext.Provider value={allValue}>
            {children}
        </ReactContext.Provider>
    );
};

export default AuthProvider;