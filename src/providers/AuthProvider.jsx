/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../Authentication/firebase.config';

export const AuthContext = createContext(null);

const auth = getAuth(app);



const AuthProvider = ({ children }) => {

    // Loader 
    const [loader, setLoader] = useState(true);

    // register or sign up with email or password
    const createUser = (email, password) => {
        setLoader(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // login or sign in with email and password
    const logIn = (email, password) => {
        setLoader(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // login or sign in with google 
    const googleProvider = new GoogleAuthProvider();
    const logInWithGoogle = () => {
        setLoader(true);
        return signInWithPopup(auth, googleProvider);
    }

    // login or sign in with github
    const githubProvider = new GithubAuthProvider();
    const logInWithGithub = () => {
        setLoader(true);
        return signInWithPopup(auth, githubProvider);
    }

    // logout or sign out
    const logOut = () => {
        setLoader(true);
        return signOut(auth);
    }

    // update user
    const updateUserData = (name, photo) => {
        updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        })
    }

    // observer
    const [user, setUser] = useState(null);
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, loggedUser => {
            // console.log('logged in user inside auth state observer', loggedUser);
            setUser(loggedUser);
            setLoader(false);
        })

        return () => {
            unsubscribe();
        }
    }, []);



    const authInfo = {
        createUser,
        updateUserData,
        logIn,
        logInWithGoogle,
        logInWithGithub,
        logOut,
        user,
        loader
    }

    return (
        <AuthContext.Provider value={authInfo} >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;