import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

// mongodb+srv://healthystore:healthystore@healthystore.dcm1j.mongodb.net/healthystore?retryWrites=true&w=majority

import login from "../../assets/icons/user-application-identity-authentication-login-svgrepo-com.svg";
import shoppingbag from "../../assets/icons/shopping-bag-svgrepo-com.svg";
import search from "../../assets/icons/search-svgrepo-com.svg";
import orange from "../../Images/orange.png"

import food from "../../assets/icons/vitamins-meal-svgrepo-com.svg"
import beverage from "../../assets/icons/drink-svgrepo-com.svg"
import vitamin from "../../assets/icons/vitamins-svgrepo-com.svg"
import suplement from "../../assets/icons/vitamins-vitamin-svgrepo-com.svg"

import Icon from "../../components/CSSStyles/Icon";

export default function HomePage(){
    const [products, setProducts] = useState([]);
   
    useEffect(()=>{
        async function getProducts(){
            try{
                const res = await axios.get(
                    "http://localhost:5500/products")
                const {data} = res;                
                console.log("HomePage: ", res)
                setProducts(data);
            } catch (error) {
                console.log("Error getting products list.", error)
            }
        }
        getProducts()
    }, []);

    
    function searchProduct(){
        return (
            <h1>Testando</h1>
        )
    }

    return (
        <Container>
            <CenterImg>
                <Img src={orange}></Img>
                <Logo> Healthy Store</Logo>
            </CenterImg>
            <Center>
                <Header>
                    <Icon src={login} alt="Login"/>
                    <SearchBar>
                        <SearchText 
                            id="searchBtn"
                            type="text"
                            name="search" 
                            placeholder="Pesquise seu produto ..."/>
                        <button id="myBtn" onClick={searchProduct()}>
                            <SearchImg src={search} alt="Buscar"/>
                        </button>
                    </SearchBar>

                    {/* <input id="searchbar" 
                        onkeyup="search_animal()" 
                        type="text"
                        name="search" 
                        placeholder="Pesquise seu produto..."></input> */}
                    <Icon src={shoppingbag} alt="Shopping bag"/>
                </Header>
                <WelcomeBar>
                    <h1>Olá, {/* Fulana */}</h1>
                    <h2>No que posso te ajudar hoje?</h2>
                </WelcomeBar>
                <NavBar>
                    <Element>
                        <Link to={`/food`}>
                            <Circle><Icon src={food} alt="Food category"/></Circle>
                            <p>Comidas</p>
                        </Link>
                    </Element>
                    <Element>
                        <Link to={`/beverage`}>
                            <Circle><Icon src={beverage} alt="Beverage category"/></Circle>
                            <p>Bebidas</p>
                        </Link>
                    </Element>
                    <Element>
                        <Link to={`/vitamins`}>
                            <Circle><Icon src={vitamin} alt="Vitamin category"/></Circle>
                            <p>Vitaminas</p>
                        </Link>
                    </Element>
                    <Element>
                        <Link to={`/suplements`}>
                            <Circle><Icon src={suplement} alt="Suplement category"/></Circle>
                            <p>Suplementos</p>
                        </Link>
                    </Element>
                </NavBar>
                <ProductList>
                    {
                        products.length > 0 ?
                        products.map( product => {
                            const {_id, name, description, value, image, category} = product;
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

const SearchBar = styled.div`
    border:solid 1px;
    border-radius:15px;
    border-color: #FDCE86;
    width:300px;
    display: flex;
    align-items: center;
    padding-left: 10px;
`
const SearchText = styled.input`
    float:left;
    background-color:transparent;
    padding-left:5px;
    font-style:italic;
    font-size:14px;
    border:none;
    height:30px;
    width:260px;
`
const SearchImg = styled.img`
    width: 15px;
    height: 15px;
`

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    position: relative;
    display: flex;
    flex-direction: column;
    background: #FB9759;
`
const CenterImg = styled.div`
    width: 100%;
    height: 190px;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
const Img = styled.img`
    width: 80px;
`
const Logo = styled.div`
    font-family: 'Poiret One', cursive;
    font-weight: 600;
    width: 100%;
    height: 18%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 42px;
    color: white;
`
const Center = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: white;
    border-radius: 40px 40px 0px 0px;
    margin-top: 0px;
`
const Header = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 20px 20px 0px 20px;
`;

const WelcomeBar = styled.div`
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

`;

const NavBar = styled.div`
    height: 100px;
    font-family: 'Raleway', sans-serif;
    background-color: #FF9859;
    margin: 20px 18px 18px;
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

const Element = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    p{
        margin-top: 10px;
        font-family: 'Roboto', sans-serif;
        font-weight: 800;
        font-size: 12;
        color: #FFFFFF;
        text-align: center;
    }
`;

const ProductList = styled.div`
    width: 100vw;
    padding: 0px 40px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
`;

const Product = styled.div`
    width: 200px;
    height: 200px;

    display: flex;
    flex-direction: column;
    align-items: center;

    img{
        max-width: 160px;
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
`;