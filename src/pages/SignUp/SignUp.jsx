import { useNavigate } from "react-router-dom";
import { useState, useContext } from 'react';
import RenderButton from "../../components/RenderButton";
import { HealthyStoreContexts } from "../../contexts/UserContext"
import style from "./Style";
import orange from "../../Images/orange.png"
import { useEffect } from "react";


export default function Register() {
    const { signUp, setSignUp, postSignUp } = useContext(HealthyStoreContexts);
    const { username, email, password, repeatedPassword } = signUp;
    const [ disabled, setDisabled ] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        setSignUp({
            username: "",
            email: "",
            password: "",
            repeatedPassword: ""
        })
    },[]);

    function OnSubmit(e) {
        setDisabled(true);
        e.preventDefault();
        postSignUp(signUp);
        setDisabled(false);
    }

    return (
        <style.Container>
            <style.Header>
                <style.Icon onClick={() => navigate('/')}>
                    <ion-icon name="chevron-back-outline"></ion-icon>
                </style.Icon>
            </style.Header>
            <style.CenterImg>
                <style.Img src={orange}/>
                <style.Logo> Healthy Store </style.Logo>
            </style.CenterImg>
            <style.Center>
                <style.Form onSubmit = {OnSubmit}>
                    <style.Input
                        disabled = {disabled}
                        type = "text"
                        value = {username}
                        placeholder = "Nome"
                        required
                        onChange = {(e) => setSignUp({...signUp, username: e.target.value})}
                    />
                    <style.Input
                        disabled = {disabled}
                        type = "email"
                        value = {email}
                        placeholder = "Email"
                        autocomplete ="on"
                        required
                        onChange = {(e) => setSignUp({...signUp, email: e.target.value})}
                    />
                    <style.Input
                        disabled = {disabled}
                        type = "password"
                        value = {password}
                        pattern = "[0-9a-zA-Z]{4,}"
                        title = "A senha deve conter no mínimo 3 caracteres"
                        placeholder = "Senha"
                        required
                        onChange = {(e) => setSignUp({...signUp, password: e.target.value})}
                    />
                    <style.Input
                        disabled = {disabled}
                        type = "password"
                        value = {repeatedPassword}
                        pattern = {password}
                        title = "Digite senhas iguais"
                        placeholder = "Confime a senha"
                        required
                        onChange = {(e) => setSignUp({...signUp, repeatedPassword: e.target.value})}
                    />
                    <style.Button disabled={disabled} type="submit">
                        <RenderButton state={disabled} text="Cadastre-se!"/>
                    </style.Button>
                    <style.GoTo onClick={() => navigate('/sign-in')}>Já possui cadastro? Faça login!</style.GoTo>
                </style.Form >
            </style.Center>
        </style.Container>
    )
}
