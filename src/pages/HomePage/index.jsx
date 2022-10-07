import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { HealthyStoreContexts } from "../../contexts/UserContext"
import style from "./Style";

import orange from "../../Images/orange.png"
import food from "../../assets/icons/vitamins-meal-svgrepo-com.svg"
import beverage from "../../assets/icons/drink-svgrepo-com.svg"
import vitamin from "../../assets/icons/vitamins-svgrepo-com.svg"
import suplement from "../../assets/icons/vitamins-vitamin-svgrepo-com.svg"

export default function HomePage(){
    const { userInfos, products, getProducts, setDisplay } = useContext(HealthyStoreContexts);
   
    const navigate = useNavigate();

    useEffect(() => {
        getProducts();
        setDisplay("hidden");
    }, []);

    return (
        <style.Container>
            <style.Header>
                <style.IconIon onClick={() => navigate('/sign-in')}>
                    <ion-icon name="people-outline"></ion-icon>
                </style.IconIon>
                <style.Div>
                    <style.Img src={orange}/>
                    <style.Logo> Healthy Store </style.Logo>
                </style.Div>
                <style.IconIon onClick={() => navigate('/bag')}>
                    <ion-icon name="bag-handle-outline"></ion-icon>
                </style.IconIon>       
            </style.Header>
            <style.Center>
                <style.WelcomeBar>
                    <h1>Olá{userInfos.name ? " " + userInfos.name : ""}!</h1>
                    <h2>No que posso te ajudar hoje?</h2>
                </style.WelcomeBar>
                <style.NavBar>
                    <style.Element onClick={() => navigate('/products/food')}>
                        <style.Circle>
                            <style.Icon src={food} alt="Food category"/>
                        </style.Circle>
                        <p>Comidas</p>
                    </style.Element>
                    <style.Element onClick={() => navigate('/products/beverage')}>
                        <style.Circle>
                            <style.Icon src={beverage} alt="Beverage category"/>
                        </style.Circle>
                        <p>Bebidas</p>
                    </style.Element>
                    <style.Element onClick={() => navigate('/products/vitamin')}>
                        <style.Circle>
                            <style.Icon src={vitamin} alt="Vitamin category"/>
                        </style.Circle>
                        <p>Vitaminas</p>
                    </style.Element>
                    <style.Element onClick={() => navigate('/products/suplement')}>
                        <style.Circle>
                            <style.Icon src={suplement} alt="Suplement category"/>
                        </style.Circle>
                        <p>Suplementos</p>
                    </style.Element>
                </style.NavBar>
                <style.ProductList>
                    {
                        products.length > 0 ?
                        products.map( product => {
                            const {_id, name, value, image} = product;
                            return (
                                <style.Product onClick={() => navigate(`/product/${_id}`)}>
                                    <img src={image} alt="" />
                                    <h1>{name}</h1>
                                    <h2>R$ {value}</h2>
                                </style.Product>
                            )
                        })
                        :
                        <p>Carregando lista de produtos... </p>
                    }
                </style.ProductList> 
            </style.Center>
        </style.Container>
    );
}