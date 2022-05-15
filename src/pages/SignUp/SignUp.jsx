import { Link, useNavigate } from "react-router-dom";
import { useState, useContext } from 'react';
import styled from 'styled-components';
import RenderButton from "../../components/RenderButton";
import { HealthyStoreContexts } from "../../contexts/UserContext"

export default function Register() {
    const { signUp, setSignUp, signUpSuccess, postSignUp } = useContext(HealthyStoreContexts);
    const { username, email, password, repeatedPassword } = signUp;
    const [ disabled, setDisabled ] = useState(false);

    const navigate = useNavigate();

    function OnSubmit(e) {
        setDisabled(true);
        postSignUp(signUp, e);
        if(signUpSuccess === true){
            navigate('/sign-in');
        } else {
            setDisabled(false);
        }
    }

    return (
        <Container>
            <Logo> Healthy Store </Logo>
            <Center>
                <Form onSubmit = {OnSubmit}>
                    <Input
                        disabled = {disabled}
                        type = "text"
                        value = {username}
                        placeholder = "Nome"
                        required
                        onChange = {(e) => setSignUp({...signUp, username: e.target.value})}
                    />
                    <Input
                        disabled = {disabled}
                        type = "email"
                        value = {email}
                        placeholder = "Email"
                        autocomplete="on"
                        required
                        onChange = {(e) => setSignUp({...signUp, email: e.target.value})}
                    />
                    <Input
                        disabled = {disabled}
                        type = "password"
                        value = {password}
                        pattern = "[0-9a-zA-Z]{3,30}"
                        title = "A senha deve conter no mínimo 3 caracteres"
                        placeholder = "Senha"
                        required
                        onChange = {(e) => setSignUp({...signUp, password: e.target.value})}
                    />
                    <Input
                        disabled = {disabled}
                        type = "password"
                        value = {repeatedPassword}
                        pattern = {password}
                        title = "Digite senhas iguais"
                        placeholder = "Confime a senha"
                        required
                        onChange = {(e) => setSignUp({...signUp, repeatedPassword: e.target.value})}
                    />
                    <Button disabled={disabled} type="submit">
                        <RenderButton state={disabled} text="Cadastre-se!"/>
                    </Button>
                    <Link to = "/sign-in">
                        <GoTo>Já possui cadastro? Faça login!</GoTo>
                    </Link>
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
    justify-content: flex-end;
    align-items: flex-end;
    flex-direction: column;
    background: #FB9759;
`
const Center = styled.div`
    width: 100%;
    height: 75%;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    flex-direction: column;
    background-color: white;
    border-radius: 40px 40px 0px 0px;
`
const Logo = styled.h1`
    font-family: 'Poiret One', cursive;
    font-weight: 600;
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 42px;
    color: white;
`
const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Input = styled.input`
    width: 80%;
    height: 50px;
    border: none;
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
    height: 50px;
    border-radius: 10px;
    background: #FB9759;
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
const GoTo = styled.p`
    margin-top: 20px;
    color: #FB9759;
    text-decoration: none;
    font-family: Raleway;
    font-size: 15px;
    font-weight: 700;
    line-height: 18px;
    letter-spacing: 0em;
    text-align: left;
    font-style: none;
`