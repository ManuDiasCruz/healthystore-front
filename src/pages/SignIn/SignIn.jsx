import { useNavigate } from "react-router-dom";
import { useState, useContext } from 'react';
import RenderButton from "../../components/RenderButton";
import { HealthyStoreContexts } from "../../contexts/UserContext"
import orange from "../../Images/orange.png"
import style from "./Style";
import { useEffect } from "react";

export default function SignIn() {
    const { infosLogin, setInfosLogin, postSignIn } = useContext(HealthyStoreContexts);
    const { email, password } = infosLogin;
    const [ disabled, setDisabled ] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        setInfosLogin({email: "", password: ""});
    },[]);

    function OnSubmit(e) {
        setDisabled(true);
        e.preventDefault();
        postSignIn(infosLogin);
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
                <style.Form onSubmit={OnSubmit} >
                    <style.Input
                        disabled={disabled}
                        type="email"
                        value={email}
                        placeholder="email"
                        required
                        onChange={(e) => setInfosLogin({...infosLogin, email: e.target.value})}
                    />
                    <style.Input
                        disabled={disabled}
                        type="password"
                        value={password}
                        placeholder="senha"
                        pattern = "[0-9a-zA-Z]{3,30}"
                        title = "A senha deve conter no mínimo 4 caracteres e um número"
                        required
                        onChange={(e) => setInfosLogin({...infosLogin, password: e.target.value})}
                    />
                    <style.Button disabled={disabled} type="submit">
                        <RenderButton state={disabled} text="Entrar"/>
                    </style.Button>
                </style.Form >
                    <style.GoTo onClick={() => navigate('/sign-up')}>Não tem uma conta? Cadastre-se!</style.GoTo>
            </style.Center>
        </style.Container>
    )

}
