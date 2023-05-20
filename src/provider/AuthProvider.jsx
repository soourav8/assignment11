import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, } from "firebase/auth";
import app from '../firebase/firebase.config';


export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({})
    const [loader, setLoader] = useState(true)

    const provider = new GoogleAuthProvider();


    const createUser = (email, password) => {
        setLoader(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const login = (email, password) => {
        setLoader(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        setLoader(true);
        return signOut(auth)
    }
    const googleSignIn = () =>{
        setLoader(true)
        return signInWithPopup(auth, provider)
    }
    

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoader(false);

        });
        return () => {
            return unsubscribe
        }
    }, [])


    const authInfo = {
        user,
        loader,
        createUser,
        login,
        logOut,
        googleSignIn
        
    }

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>

        </div>
    );
};

export default AuthProvider;