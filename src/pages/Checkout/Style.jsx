import styled from "styled-components";


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
    justify-content: center;
    align-items: center;
`
const Center = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: #2E2E2E;
    border-radius: 40px 40px 0px 0px;
`
const H1 = styled.h1`
    font-size: 22px;
    color: white;
`
const Logo = styled.h1`
    font-family: 'Poiret One', cursive;
    font-weight: 600;
    width: auto;
    height: 18%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 25px;
    color: white;
`
const Img = styled.img`
    width: 10%;
`
const Icon = styled.p`
    font-size: 200px;
    color: #528431;
    padding: 20%;
    display: flex;
    align-items: center;

    &:active {
        opacity: 0.7;
    }
`
const Button = styled.button`
    width: 100%;
    height: 50px;
    padding: 10px 30px 10px 30px;
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

const style = {
    Container,
    Header,
    Center,
    H1,
    Logo,
    Img,
    Button,
    Icon,
    GoTo
}

export default style;