import React, { createContext, useState } from 'react';
import axios from "axios";

export const HealthyStoreContexts = createContext({});

export const HealthyStoreProvider = ({ children }) => {
    const [ signUp, setSignUp ] = useState({
        username: "",
        email: "",
        password: "",
        repeatedPassword: "",
    })
    const [ signUpSuccess, setSignUpSuccess ] = useState(false);
    const [ infosLogin, setInfosLogin ] = useState({
        email: "", 
        password: "",
    });
    const [ signInSuccess, setSignInSuccess ] = useState(false)
    console.log(infosLogin)
    const postSignUp = (signUp, e) => {
        e.preventDefault();
        axios.post("http://localhost:5500/sign-up", signUp)
        .then(() => setSignUpSuccess(true))
        .catch((e) => window.confirm(e.response.data))
    }

    const postSignIn = (infosLogin, e) => {
        e.preventDefault();
        axios.post("http://localhost:5500/sign-in", infosLogin)
        .then((answer) => {
            localStorage.setItem("user", JSON.stringify({
                name: answer.data.name,
                token: answer.data.token,
            }));
            setSignInSuccess(true);
        })
        .catch((e) => window.confirm(e.response.data));
    }
    
    return (
        <HealthyStoreContexts.Provider
            value = {{
                signUp,
                setSignUp,
                signUpSuccess,
                postSignUp,
                infosLogin,
                setInfosLogin,
                signInSuccess,
                postSignIn
            }}
        >
            { children }
        </HealthyStoreContexts.Provider>
    )
}