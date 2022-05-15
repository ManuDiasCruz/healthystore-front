import { Link, useNavigate } from "react-router-dom";
import { useContext } from 'react';
import styled from 'styled-components';
import { HealthyStoreContexts } from "../../contexts/UserContext"
import BagProduct from "../../components/BagProduct"

export default function Bag() {
    const { infosBag } = useContext(HealthyStoreContexts);

    const navigate = useNavigate();

    let value = 0;
    for(let i = 0; i < infosBag.length; i++) {
        value += (infosBag[i].value * infosBag[i].quantity)
    }

    return (
        <Container>
            <Header>
                <Link to="/">
                    <Icon>
                        <ion-icon name="chevron-back-outline"></ion-icon>
                    </Icon>
                </Link>
                    <Icon>
                        <H1>checkout</H1>
                        <ion-icon name="bag-handle-outline"></ion-icon>
                    </Icon>
            </Header>
            <Center>
                <Products>
                    <BagProduct />
                </Products>
                <Footer>
                    <Itens>{infosBag.length} Itens</Itens>
                    <Buy>
                        <Value>R$ {value}</Value>
                        <Confirm onClick = {() => navigate('/payInfos')}>Pagamento</Confirm>
                    </Buy>
                </Footer>
            </Center>
        </Container>
    )
}

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: column;
    background: #FB9759;
    font-family: 'Raleway', sans-serif;
`
const Header = styled.div`
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const Center = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    background-color: #2E2E2E;
    border-radius: 40px 40px 0px 0px;
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
const H1 = styled.h1`
    font-size: 22px;
    color: white;
    padding-right: 5px;
`
const Products = styled.div`
    width: 100%;
    height: 87%;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
    overflow: scroll;
    border-radius: 40px 40px 0px 0px;
    margin-top: 20px
`
const Footer = styled.div`
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px 10px 20px;
`
const Itens = styled.p`
    width: 25%;
    color: white;
`
const Buy = styled.div`
    width: 70%;
    height: 90%;
    border: 2px solid #FB9759;;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const Value = styled.p`
    width: 40%;
    margin: 5px;
    color: white;
`
const Confirm = styled.div`
    width: 55%;
    height: 100%;
    color: white;
    padding: 10px 25px 10px 25px;
    font-weight: 600;
    background-color: #FB9759;
    border-radius: 5px 3px 3px 5px;
    display: flex;
    justify-content: center;
    align-items: center;
`