import { useContext } from "react";
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { HealthyStoreContexts } from "../contexts/UserContext";

export default function Warning(props) {
    const { display } = useContext(HealthyStoreContexts);

    const navigate = useNavigate();

    return (
        <WarningDiv display = {display}>
            <div>
                <h1>{props.text}</h1>
                <Login onClick={() => navigate(`${props.navigateOne}`)}>{props.textButtonOne}</Login>
                <Cancel onClick={() => navigate(`${props.navigateTwo}`)}>{props.textButtonTwo}</Cancel>
            </div>
        </WarningDiv>
    )
}

const WarningDiv = styled.div`
    width: 100vw;
    height: 100vh;
    position: absolute;
    background-color: rgba(00, 00, 00, 0.5);
    visibility: ${props => props.display};

    div {
        width: 80%;
        height: auto;
        position: absolute;
        background-color: white;
        left: 10%;
        bottom: 50%;
        border-radius: 10px;
        padding: 15px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        font-family: 'Raleway', sans-serif;
    }

    h1 {
        text-align: center;
        color: #2E2E2E;
        font-size: 20px;
        font-weight: 500;
    }
` 
const Login = styled.button`
    width: 90%;
    height: 50px;
    margin: 30px 0px 5px 0px;
    font-size: 20px;
    font-weight: 500;
    border-radius: 10px;
    background: #FB9759;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    font-size: 21px;
    font-style: normal;
    font-weight: 700;
    line-height: 26px;
    color: white;
`
const Cancel = styled.button`
    width: 90%;
    height: 30px;
    border: none;
    background: none;
    font-size: 18px;
    font-weight: 500;
    color: #2E2E2E;

`

