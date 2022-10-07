import styled from "styled-components";

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    position: relative;
    display: flex;
    flex-direction: column;
    background: #FB9759;
    font-family: 'Raleway', sans-serif;
`
const Logo = styled.h1`
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
    width: 12%;
`
const Center = styled.div`
    width: 100vw;
    height: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    border-radius: 40px 40px 0px 0px;
`
const Header = styled.div`
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const WelcomeBar = styled.div`
    width: 90%;
    color: #353535;
    margin: 20px 20px 10px 20px;

    h1{        
        font-size: 18px;
        font-weight: 400;
        margin-bottom: 8px;
    }

    h2{
        font-size: 18px;
        font-weight: 500;
    }

`
const NavBar = styled.div`
    height: 110px;
    width: 90%;
    background-color: #FB9759;
    margin: 20px 18px 0px;
    padding-left: 120px;
    border-radius: 10px;

    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    overflow-x: scroll;
`
const Circle = styled.div`
    width: 55px;
    height: 55px;
    background-color: #FFFFFF;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Element = styled.div`
    min-width: 120px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-bottom: 4px;

    p{
        margin-top: 10px;
        font-weight: 600;
        font-size: 12;
        color: #FFFFFF;
        text-align: center;
    }
`
const ProductList = styled.div`
    width: 90%;
    height: 67%;
    display: flex;
    margin-top: 20px;
    flex-wrap: wrap;
    overflow-y: scroll;
    justify-content: space-between;
    justify-content: space-evenly;

    p{
        height: 20px;
        font-weight: 500;
        font-size: 12;
        color: #353535;
        text-align: center;
    }
`
const Product = styled.div`
    width: 45%;
    height: 250px;
    display: flex;
    flex-direction: column;
    align-items: center;

    img{
        max-width: 100%;
        height: 160px;
        border-radius: 10px;
    }

    h1{
        font-size: 16px;
        font-weight: 700;
        margin: 8px 0px 8px 0px;
        color: #353535;
    }

    h2{
        font-size: 14px;
        font-weight: 500;
        margin-bottom: 8px;
        color: #353535;
    }
`
const Icon = styled.img`
    width: 30px;
    height: 45px;

    border-radius: 10px;
`
const IconIon = styled.p`
    font-size: 30px;
    color: white;
    padding: 10px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    margin: 10px;

    &:active {
        opacity: 0.7;
    }
`
const Div = styled.div`
    display: flex;
    justify-content: center;
`

const style = {
    Container,
    Logo,
    Img,
    Center,
    Header,
    WelcomeBar,
    NavBar,
    Element,
    Product,
    ProductList,
    Circle,
    Icon,
    IconIon,
    Div
}

export default style;