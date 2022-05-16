import styled from 'styled-components';
import { HealthyStoreContexts } from "../../src/contexts/UserContext"
import { useContext } from 'react';

export default function OrderProduct() {

    const { infosOrders } = useContext(HealthyStoreContexts);
    let total = 0;

    return (
        <>
            {infosOrders.map((product) => {
            total = 0;
            return(
            <Order>
                <Margin>
                    <Day>{product.date}</Day>
                        {(product.informations).map((order) => {
                            total += (order.quantity * order.value);
                            return ( 
                            <>
                                <Information>
                                    <Img src={order.image}/>
                                    <Right>
                                        <Quantity>
                                            <p>Nome: {order.name}</p>
                                            <p>Qtd.: {order.quantity}</p>
                                        </Quantity >
                                        <Value>
                                            <p>R$ {order.quantity*order.value}</p>
                                        </Value>
                                    </Right>
                                </Information>
                            </>
                        )}) }
                    <Price>Total: R$ {total.toFixed(2)}</Price>
                </Margin>
            </Order>)})
            }
        </>
    )
}

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
    min-height: auto;
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
    flex-direction: row;
`
const Right = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
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
const Price = styled.p`
    font-size: 18px;
    color: #2E2E2E;
    line-height: 20px;
    width: 100%;
    font-weight: 500;
    text-align: right;
    padding-right: 10px;
`
