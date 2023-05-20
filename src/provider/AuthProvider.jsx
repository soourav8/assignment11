import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';


export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({})
    const [loader, setLoader] = useState(true)

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
    //update user profile name and photo

    // const  userProfile = (name, photoUrl)=>{
    //     return updateProfile(user, {
    //         displayName: name , photoURL : photoUrl
    //     })
    // }

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
        // userProfile
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