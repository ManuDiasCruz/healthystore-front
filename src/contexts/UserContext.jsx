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
    const [ userInfos, setUserInfos ] = useState({}); // O TOKEN ESTÁ AQUI
    const [ signInSuccess, setSignInSuccess ] = useState(false)
    const [ infosBag, setInfosBag ] = useState([])
    const [ checkout, setCheckout ] = useState({
        address: "",
        cpf: "",
        payment: "",
    })
    const [ checkoutSuccess, setCheckoutSuccess ] = useState(false)
    const [ infosOrders, setInfosOrders ] = useState({})
    const [ addBag, setAddBag ] = useState({})
    const [ addBagSuccess, setAddBagSuccess ] = useState(false)

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
            setUserInfos(answer.data);
        })
        .catch((e) => window.confirm(e.response.data));
    }

    const postBag = (infosProduct) => {
        axios.post("http://localhost:5500/bag", infosProduct,  {headers: {'Authorization': `Bearer ${userInfos.token}`}})
        .then((e) => {setAddBagSuccess(true); alert('Produto adiconado a sacola')})
        .then(() => getBag())
        .catch((e) => window.confirm(e.response.data))
    }

    const getBag = () => {
        axios.get("http://localhost:5500/bag", {headers: {'Authorization': `Bearer ${userInfos.token}`}})
        .then((answer) => {setInfosBag(answer.data)})
        .catch((e) => window.confirm(e.response.data));
    } //COLOCAR NO BOTÃO DA PÁGINA DO PRODUTO

    const deletebag = (id) => {
        axios.delete(`http://localhost:5500/bag/${id}`)
        .then(() => getBag())
        .catch((e) => window.confirm(e.response.data))
    }

    const postCheckout = (infos) => {
        axios.post("http://localhost:5500/checkout", infos, {headers: {'Authorization': `Bearer ${userInfos.token}`}})
        .then(() => setCheckoutSuccess(true))
        .then(() => getCheckout())
        .catch((e) => window.confirm(e.response.data))
    }

    const getCheckout = () => {
        axios.get("http://localhost:5500/checkout", {headers: {'Authorization': `Bearer ${userInfos.token}`}})
        .then((answer) => {setInfosOrders(answer.data)})
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
                postSignIn,
                userInfos,
                getBag,
                infosBag,
                deletebag,
                checkout,
                setCheckout,
                postCheckout,
                checkoutSuccess,
                infosOrders,
                getCheckout,
                addBag,
                setAddBag,
                postBag,
                addBagSuccess
            }}
        >
            { children }
        </HealthyStoreContexts.Provider>
    )
}