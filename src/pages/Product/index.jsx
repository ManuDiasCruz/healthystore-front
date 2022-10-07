import { useParams, Link, useNavigate } from "react-router-dom";
import { useState, useContext, useEffect } from 'react';
import axios from "axios";
import styled from "styled-components";
import RenderButton from "../../components/RenderButton";
import { HealthyStoreContexts } from "../../contexts/UserContext"
import Warning from "../../components/Warning";

export default function Product(){
    const { productId } = useParams();

    const [ disabled, setDisabled ] = useState(false);
    const [ number, setNumber ] = useState(1);
    const { addBag, postBag, getProduct, display } = useContext(HealthyStoreContexts);

    useEffect(() => {
        getProduct(productId)
    },[]);

    const navigate = useNavigate();

    const productInfos = {
        productName: addBag.name,
        quantity: number,
    }

    function SendBag(e) {
        e.preventDefault()
        setDisabled(true)
        postBag(productInfos);
        setDisabled(false)
    }

    return (
        <Container>
            <Header>
                <Icon onClick={() => navigate('/')}>
                    <ion-icon name="chevron-back-outline"></ion-icon>
                </Icon>
                <Icon onClick={() => navigate('/bag')}>
                    <ion-icon name="bag-handle-outline"></ion-icon>
                </Icon>
            </Header>
            <Center>
                <Img src={addBag.image} />
            </Center>
            <Footer>
                <Price>
                    <h1>{addBag.name}</h1>
                    <div>
                        <Quantity>
                            <OneLess onClick = {() => {number !== 1 ? setNumber(number - 1) : setNumber(1)}}>
                                <ion-icon name="caret-back-outline"></ion-icon>
                            </OneLess>
                            <Number>{number}</Number>
                            <OneMore onClick = {() => setNumber(number + 1)}>
                                <ion-icon name="caret-forward-outline"></ion-icon>
                            </OneMore>
                        </Quantity>
                        <Value>R$ {(number*addBag.value).toFixed(2)}</Value>
                    </div>
                    <p>Informações: {addBag.description}</p>
                </Price>
                <Button onClick={(e) => SendBag(e)} >
                    <RenderButton state={disabled} text="Adicionar a sacola"/>
                </Button>
            </Footer>
            <Warning 
                display = {display}
                text = "Para adicionar o produto é necessário fazer o login"
                textButtonOne = "Login"
                textButtonTwo = "Cancelar"
                navigateOne = "/sign-in"
                navigateTwo = "/"
            />
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
    font-family: 'Raleway', sans-serif;
    color: #2E2E2E;
`
const Center = styled.div`
    width: 100%;
    height: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 20px;
`
const Header = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 10px 10px 10px 10px;
`
const Icon = styled.p`
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
const Img = styled.img`
    width: 65%;
    margin-bottom: 20px;
    border-radius: 10px;
    margin-top: 20px;
`
const Footer = styled.div`
    width: 100%;
    height: 40%;
    background: #2E2E2E;
    display: flex;
    position: absolute;
    bottom: 0;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    border-radius: 40px 40px 0px 0px;
`
const Price = styled.div`
    width: 90%;
    height: 100%;
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    margin-bottom: 60px;

    h1 {
        width: 100%;
        text-align: left;
        color: white;
        font-size: 24px;
        font-weight: 700;
        margin-bottom: 8px;
    }

    div {
        width: 100%;
        height: 75%;
        display: flex;
        align-items: center;
    }

    p {
        padding-top: 20px;
        width: 100%;
        height: 100%;
        text-align: justify;
        overflow-y: scroll;
        color: white;
        font-size: 18px;
        font-weight: 500;
        margin-bottom: 8px;
    }
`
const Quantity = styled.div`
    width: 40%;
    height: 60%;
    background-color: white;
    display: flex;
    border-radius: 20px;
`
const Value = styled.div`
    width: 40%;
    height: auto;
    font-size: 22px;
    display: flex;
    justify-content: flex-end;
    color: white;
`
const OneLess = styled.div`
    width: 30%;
    height: 100%;
    border-radius: 0px 20px 20px 0px; 
    display: flex;
    justify-content: center;
    align-items: center;
`
const OneMore = styled.div`
    width: 30%;
    height: 100%;
    border-radius: 20px 0px 0px 20px; 
    display: flex;
    justify-content: center;
    align-items: center;
`
const Number = styled.div`
    width: 40%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
`
const Button = styled.button`
    width: 90%;
    height: 50px;
    border-radius: 10px;
    background: #FB9759;
    display: flex;
    position: absolute;
    bottom: 20px;
    align-items: center;
    justify-content: center;
    border: none;
    font-size: 21px;
    font-style: normal;
    font-weight: 700;
    line-height: 26px;
    color: white;
`