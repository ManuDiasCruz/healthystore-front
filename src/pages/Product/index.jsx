import { useParams, Link, useNavigate } from "react-router-dom";
import { useState, useContext, useEffect } from 'react';
import axios from "axios";
import styled from "styled-components";
import RenderButton from "../../components/RenderButton";
import { HealthyStoreContexts } from "../../contexts/UserContext"

export default function Product(){
    const { productId } = useParams();

    const [ disabled, setDisabled ] = useState(false);
    const [ number, setNumber ] = useState(1);
    const { addBag, setAddBag, postBag, addBagSuccess } = useContext(HealthyStoreContexts);

    useEffect(() => {
        async function getProduct(){
            try{
                await axios.get(
                    `http://localhost:5500/product/${productId}`)
                .then((answer) => {
                    console.log(answer.data);
                    setAddBag(answer.data);
                })
                .catch((error) => console.log(error))       
            } catch (error) {
                console.log("Error getting products list.", error)
            }
        }
        getProduct()
    });

    const navigate = useNavigate();

    const productInfos = {
        productName: addBag.name,
        quantity: number,
    }
    console.log(productInfos)

    function SendBag(e) {
        e.preventDefault()
        setDisabled(true)
        console.log(productInfos)
        postBag(productInfos);
        if(addBagSuccess === true){
            navigate('/bag')
        }
        setDisabled(false)
    }

    return (
        <Container>
            <Header>
                <Link to="/">
                    <Icon>
                        <ion-icon name="chevron-back-outline"></ion-icon>
                    </Icon>
                </Link>
                <Link to='/bag'>
                    <Icon>
                        <ion-icon name="bag-handle-outline"></ion-icon>
                    </Icon>
                </Link>
            </Header>
            <Center>
                <H1>{addBag.name}</H1>
                <Img src={addBag.image} />
                <Description>{addBag.description}</Description>
            </Center>
            <Footer>
                <Price>
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
                </Price>
                <Button onClick={(e) => SendBag(e)} >
                    <RenderButton state={disabled} text="Adicionar a sacola"/>
                </Button>
            </Footer>
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
const H1 = styled.div`
    font-size: 20px;
    font-weight: 500;
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
const Description = styled.p`
    font-size: 18px;
    width: 70%;
    text-align: center;
    line-height: 20px;
`
const Footer = styled.div`
    width: 100%;
    height: 30%;
    background: #2E2E2E;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
    border-radius: 40px 40px 0px 0px;
`
const Price = styled.div`
    width: 90%;
    height: 30%;
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 60px;
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
    align-items: center;
    justify-content: center;
    border: none;
    font-size: 21px;
    font-style: normal;
    font-weight: 700;
    line-height: 26px;
    color: white;
`