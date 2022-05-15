import { useContext } from 'react';
import { HealthyStoreContexts } from "../contexts/UserContext"
import styled from 'styled-components';

export default function BagProduct() {
    const { infosBag, deletebag } = useContext(HealthyStoreContexts);

    return(
        <>
            {infosBag.map((product) => {
                return (
                    <Product>
                        <Margin>
                            <Img src={product.image}/>
                            <Information>
                                <Quantity>
                                    <p>Nome: {product.name}</p>
                                    <p>Quantidade: {product.quantity}</p>
                                    <p>Valor: R$ {product.quantity*product.value}</p>
                                </Quantity >
                                <Icon onClick = {() => deletebag(product._id)}>
                                    <ion-icon name="close-outline"></ion-icon>
                                </Icon>
                            </Information>
                        </Margin>
                    </Product> 
                )
            })}
        </>
    )
}

const Product = styled.div`
    width: 90%;
    min-height: 20%;
    background: grey;
    border-radius: 20px;
    margin-bottom: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Margin = styled.div`
    width: 95%;
    height: 85%;

    border-radius: 20px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`
const Img = styled.img`
    width: 22%;
    border-radius: 5px;
    margin: 10px;
`
const Information = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const Quantity = styled.p`
    font-size: 16px;
    color: white;
    line-height: 20px;
    width: 80%;
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