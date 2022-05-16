import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import { HealthyStoreContexts } from "../../contexts/UserContext"

import orange from "../../Images/orange.png"

import food from "../../assets/icons/vitamins-meal-svgrepo-com.svg"
import beverage from "../../assets/icons/drink-svgrepo-com.svg"
import vitamin from "../../assets/icons/vitamins-svgrepo-com.svg"
import suplement from "../../assets/icons/vitamins-vitamin-svgrepo-com.svg"

export default function HomePage(){
    const [products, setProducts] = useState([]);
    const { userInfos } = useContext(HealthyStoreContexts);
   
    useEffect(() => {
        async function getProducts(){
            try{
                const res = await axios.get(
                    "http://localhost:5500/products")
                const {data} = res;                
                setProducts(data);
            } catch (error) {
                console.log("Error getting products list.", error)
            }
        }
        getProducts()
    }, []);

    return (
        <Container>
            <Header>
                <Link to="/sign-in">
                    <IconIon>
                        <ion-icon name="people-outline"></ion-icon>
                    </IconIon>
                </Link>
                <Div>
                    <Img src={orange}/>
                    <Logo> Healthy Store </Logo>
                </Div>
                <Link to="/bag">
                    <IconIon>
                        <ion-icon name="bag-handle-outline"></ion-icon>
                    </IconIon>
                </Link>
            </Header>
            <Center>
                <WelcomeBar>
                    <h1>Olá, {userInfos.name}</h1>
                    <h2>No que posso te ajudar hoje?</h2>
                </WelcomeBar>
                <NavBar>
                    <Link to={`/products/food`}>
                        <Element>
                                <Circle><Icon src={food} alt="Food category"/></Circle>
                                <p>Comidas</p>
                        </Element>
                    </Link>
                    <Link to={`/products/beverage`}>
                        <Element>
                                <Circle><Icon src={beverage} alt="Beverage category"/></Circle>
                                <p>Bebidas</p>
                        </Element>
                    </Link>
                    <Link to={`/products/vitamin`}>
                        <Element>
                                <Circle><Icon src={vitamin} alt="Vitamin category"/></Circle>
                                <p>Vitaminas</p>
                        </Element>
                    </Link>
                    <Link to={`/products/suplement`}>
                        <Element>
                                <Circle><Icon src={suplement} alt="Suplement category"/></Circle>
                                <p>Suplementos</p>
                        </Element>
                    </Link>
                </NavBar>
                <ProductList>
                    {
                        products.length > 0 ?
                        products.map( product => {
                            const {_id, name, value, image} = product;
                            return (
                                <Product>
                                    <Link to={`/product/${_id}`}>
                                        <img src={image} alt="" />
                                        <h1>{name}</h1>
                                        <h2>R$ {value}</h2>
                                    </Link>
                                </Product>
                            )
                        })
                        :
                        <p>Carregando lista de produtos... </p>
                    }
                </ProductList> 
            </Center>
        </Container>
    );
}

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    position: relative;
    display: flex;
    flex-direction: column;
    background: #FB9759;
`
const Logo = styled.h1`
    font-family: 'Poiret One', cursive;
    font-weight: 600;
    width: auto;
    height: 18%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 25px;
    color: white;
`
const Img = styled.img`
    width: 10%;
`
const Center = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    border-radius: 40px 40px 0px 0px;
    margin-top: 0px;
`
const Header = styled.div`
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const WelcomeBar = styled.div`
    width: 90%;
    font-family: 'Poiret One', cursive;
    color: #000000;
    margin: 20px 20px 10px 20px;

    h1{        
        font-size: 18px;
        font-weight: 400;
        margin-bottom: 8px;
    }

    h2{
        font-size: 18px;
        font-weight: 700;
    }

`
const NavBar = styled.div`
    height: 100px;
    width: 90%;
    font-family: 'Raleway', sans-serif;
    background-color: #FF9859;
    margin: 20px 18px 18px;
    border-radius: 10px;

    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`
const Circle = styled.div`
    width: 50px;
    height: 50px;
    background-color: #FFFFFF;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Element = styled.div`
    width: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    p{
        margin-top: 10px;
        font-family: 'Roboto', sans-serif;
        font-weight: 800;
        font-size: 12;
        color: #FFFFFF;
        text-align: center;
    }
`
const ProductList = styled.div`
    width: 90%;
    padding: 0px 40px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    overflow-y: hidden;
`
const Product = styled.div`
    width: 200px;
    height: 250px;
    display: flex;
    flex-direction: column;
    align-items: center;

    img{
        max-width: 160px;
        height: 160px;
    }

    h1{
        font-family: 'Raleway', sans-serif;
        font-size: 16px;
        font-weight: 700;
        margin-bottom: 8px;
    }

    h2{
        font-family: 'Lexend-Deca';
        font-size: 14px;
        font-weight: 700;
        margin-bottom: 8px;
    }
`
const Icon = styled.img`
    width: 30px;
    height: 45px;

    border-radius: 10px;
`
const IconIon = styled.p`
    font-size: 30px;
    color: white;
    padding: 10px;
    border-radius: 50%;
    display: flex;
    align-items: center;

    &:active {
        opacity: 0.7;
    }
`
const Div = styled.div`
    display: flex;
    justify-content: center;
`