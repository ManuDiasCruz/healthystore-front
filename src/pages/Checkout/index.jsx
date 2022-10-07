import {  useNavigate } from "react-router-dom";
import orange from "../../Images/orange.png";
import { HealthyStoreContexts } from "../../contexts/UserContext"
import { useContext } from 'react';
import style from "./Style";

export default function Checkout(){
    const { getCheckout } = useContext(HealthyStoreContexts);

    const navigate = useNavigate();

    return (
        <style.Container>
            <style.Header>
                <style.Img src={orange}/>
                <style.Logo> Healthy Store </style.Logo>
            </style.Header>
            <style.Center>
                <style.Icon>
                    <ion-icon name="checkmark-circle-outline"></ion-icon>
                </style.Icon>
                <style.H1>Pedido realizado com sucesso!</style.H1>
                <style.Button onClick = {() => {getCheckout(); navigate('/orders')}}>Histórico de pedidos</style.Button>
                <style.GoTo onClick={() => navigate('/')}>Página inicial</style.GoTo>
            </style.Center>
        </style.Container>
    )
}
