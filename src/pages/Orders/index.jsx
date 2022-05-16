import styled from 'styled-components';
import { Link } from "react-router-dom";
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
