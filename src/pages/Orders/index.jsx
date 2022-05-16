import styled from 'styled-components';
import { Link, useNavigate } from "react-router-dom";
import orange from "../../Images/orange.png";
import OrderProduct from '../../components/OrderProduct';

export default function Orders(){
    
    return (
        <Container>
            <Header>
                <Link to="/">
                    <Icon>
                        <ion-icon name="chevron-back-outline"></ion-icon>
                    </Icon>
                </Link>
                    <Icon>
                        <H1>Minhas compras</H1>
                        <ion-icon name="albums-outline"></ion-icon>
                    </Icon>
            </Header>
            <Center>
                <OrderProduct />
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
    align-items: center;
    padding-top: 20px;
    flex-direction: column;
    background-color: grey;
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
const Margin = styled.div`
    width: 95%;
    height: auto;
    margin: 10px 0px 10px 0px;
    border-radius: 20px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
`
const Order = styled.div`
    width: 90%;
    min-height: 20%;
    background: white;
    border-radius: 20px;
    margin-bottom: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Day = styled.p`
    font-size: 25px;
    color: #2E2E2E;
    width: 80%;
    padding-left: 10px;
    text-decoration: double;
    padding-bottom: 20px;
`
const Img = styled.img`
    width: 70px;
    border-radius: 5px;
    margin: 10px;
    background: orange;
`
const Information = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const Right = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 10px;
`
const Quantity = styled.p`
    font-size: 16px;
    color: #2E2E2E;
    line-height: 20px;
    width: 55%;
    font-weight: 500;
`
const Value = styled.p`
    font-size: 18px;
    color: #2E2E2E;
    line-height: 20px;
    width: auto;
    font-weight: 500;
`
