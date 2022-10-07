import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from 'react';
import styled from 'styled-components';
import { HealthyStoreContexts } from "../../contexts/UserContext"
import RenderButton from "../../components/RenderButton";

export default function PayInfos(){
    const { checkout, setCheckout, postCheckout, checkoutSuccess } = useContext(HealthyStoreContexts);
    const { address, cpf, payment } = checkout
    const [ disabled, setDisabled ] = useState(false);

    const navigate = useNavigate();
    
    function OnSubmit(e) {
        e.preventDefault();
        setDisabled(true);
        postCheckout(checkout);
        if(checkoutSuccess === true){
            navigate('/checkout');
        } else {
            setDisabled(false);
        }
    }

    return (
        <Container>
            <Header>
                <Link to="/bag">
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
                <Form onSubmit = {OnSubmit}>
                    <Products>
                        <Position>
                            <Input
                                disabled = {disabled}
                                type = "text"
                                value = {address}
                                placeholder = "Endereço"
                                required
                                onChange = {(e) => setCheckout({...checkout, address: e.target.value})}
                            />
                            <Input
                                disabled = {disabled}
                                type = "cpf"
                                value = {cpf}
                                placeholder = "CPF"
                                pattern = "[0-9]{11}"
                                title = "O cpf deve conter apenas números"
                                required
                                onChange = {(e) => setCheckout({...checkout, cpf: e.target.value})}
                            />
                            <Select
                                disabled = {disabled}
                                value = {payment}
                                required
                                onChange = {(e) => setCheckout({...checkout, payment: e.target.value})}>
                                    <option value = "">Forma de pagamento</option>
                                    <option value = "Cartão">Cartão</option>
                                    <option value = "Pix">Pix</option>
                            </Select>
                        </Position>
                        <Button disabled={disabled} type="submit">
                            <RenderButton state={disabled} text="Finalizar pedido"/>
                        </Button>
                    </Products>
                </Form >
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
    border-radius: 40px 40px 0px 0px;
    margin-top: 20px
`
const Form = styled.form`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`
const Position = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`
const Input = styled.input`
    width: 80%;
    height: 50px;
    border: none;
    background-color: #2E2E2E;;
    border-bottom: 1px solid #FB9759;
    box-sizing: border-box;
    margin-bottom: 10px;
    padding-left: 10px;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 25px;
    letter-spacing: 0em;
    text-align: left;
    color: grey;
`
const Button = styled.button`
    width: 80%;
    height: 8%;
    border-radius: 10px;
    background: #FB9759;
    position: absolute;
    bottom: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
    border: none;
    font-size: 21px;
    font-style: normal;
    font-weight: 700;
    line-height: 26px;
    color: white;

    &:disabled {
    opacity: 0.7;
  }
`
const Select = styled.select`
    width: 80%;
    height: 50px;
    border: none;
    background-color: #2E2E2E;;
    border-bottom: 1px solid #FB9759;
    box-sizing: border-box;
    margin-bottom: 10px;
    padding-left: 10px;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 25px;
    letter-spacing: 0em;
    text-align: left;
    color: grey;
`