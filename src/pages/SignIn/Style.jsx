import styled from 'styled-components';

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    flex-direction: column;
    background: #FB9759;
`
const Center = styled.div`
    width: 100%;
    height: 45%;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    flex-direction: column;
    background-color: white;
    border-radius: 40px 40px 0px 0px;
`
const Header = styled.header`
    width: 100%;
    padding: 10px;
`
const Icon = styled.p`
    font-size: 30px;
    color: white;
    padding: 15px 0px 0px 10px;
    border-radius: 50%;
    display: flex;
    align-items: center;

    &:active {
        opacity: 0.7;
    }
`
const Logo = styled.h1`
    font-family: 'Poiret One', cursive;
    font-weight: 600;
    width: 100%;
    height: 18%;
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
    cursor: pointer;

    &:disabled {
    opacity: 0.7;
    cursor: default;
  }
`
const GoTo = styled.p`
    width: 100vw;
    margin-top: 20px;
    color: #FB9759;
    text-decoration: none;
    font-family: Raleway;
    font-size: 15px;
    font-weight: 700;
    line-height: 18px;
    letter-spacing: 0em;
    text-align: center;
    font-style: none;
`
const CenterImg = styled.div`
    width: 100%;
    height: 55%;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
const Img = styled.img`
    width: 40%;
`

const style = {
    Container,
    Center,
    Header,
    Icon,
    Logo,
    Form,
    Input,
    Button,
    GoTo,
    CenterImg,
    Img
}

export default style;