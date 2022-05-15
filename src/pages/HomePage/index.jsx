import styled from "styled-components";

import { useContext, useEffect } from "react";
import UserContext from "../../contexts/UserContext";

import login from "../../assets/icons/user-application-identity-authentication-login-svgrepo-com.svg";
import shoppingbag from "../../assets/icons/shopping-bag-svgrepo-com.svg";
import search from "../../assets/icons/search-svgrepo-com.svg";

import food from "../../assets/icons/vitamins-meal-svgrepo-com.svg"
import beverage from "../../assets/icons/drink-svgrepo-com.svg"
import vitamin from "../../assets/icons/vitamins-svgrepo-com.svg"
import suplement from "../../assets/icons/vitamins-vitamin-svgrepo-com.svg"

import Icon from "../../components/CSSStyles/Icon";

export default function HomePage(){
    const {user} = useContext(UserContext)

   
    return (
        <>
            <Header>
                <Icon src={login} alt="Login"/>
                <Icon src={shoppingbag} alt="Shopping bag"/>
            </Header>
            <WelcomeBar>
                <h1>Hi, {/* Fulana */}</h1>
                <h2>What's today taste?</h2>
            </WelcomeBar>
            <NavBar>
                <Circle><Icon src={food} alt="Food category"/></Circle>
                <Circle><Icon src={beverage} alt="Beverage category"/></Circle>
                <Circle><Icon src={vitamin} alt="Vitamin category"/></Circle>
                <Circle><Icon src={suplement} alt="Suplement category"/></Circle>
            </NavBar>
        </>
    );
}

const Header = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 30px 20px;

    position:fixed;
    top: 0px;
    left: 0px;
    right:0px;
`;

const WelcomeBar = styled.div`
    height: 40px;
    font-family: 'Raleway', sans-serif;
    color: #000000;
    margin: 95px 20px 20px;

    h1{        
        font-size: 18px;
        font-weight: 400;
        margin-bottom: 8px;
    }

    h2{
        font-size: 18px;
        font-weight: 700;
    }

`;

const NavBar = styled.div`
    height: 80px;
    font-family: 'Raleway', sans-serif;
    background-color: #FF9859;
    margin: 10px 18px 18px;
    border-radius: 10px;

    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`;

const Circle = styled.div`
    width: 50px;
    height: 50px;
    background-color: #FFFFFF;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Category = styled.div`

    div{
        width: 50px;
        height: 50px;
        background-color: #FFFFFF;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    p{
        font-family: 'Raleway', sans-serif;
        font-size: 14px;
        font-weight: 400;
    }
`;