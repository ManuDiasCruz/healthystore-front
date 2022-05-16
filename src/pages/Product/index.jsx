import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

import Icon from "../../components/CSSStyles/Icon";

import backarrow from "../../assets/icons/left-arrow-back-svgrepo-com.svg"
import orange from "../../Images/orange.png"

export default function Product(){
    const {productId} = useParams();
    console.log("Product: ", productId)

    useEffect(()=>{
        async function getProduct(){
            try{
                const res = await axios.get(
                    `http://localhost:5500/product/${productId}`)
                const {data} = res;           
            } catch (error) {
                console.log("Error getting products list.", error)
            }
        }
        getProduct()
    }, []);

    return (
        <Container>
            <CenterImg>
                <Img src={orange}></Img>
                <Logo> Healthy Store</Logo>
            </CenterImg>
            <Center>                
                <Header>
                    <img src={backarrow} alt="Back"/>
                </Header>
            </Center>
        </Container>
    );
}

const SearchBar = styled.div`
    border:solid 1px;
    border-radius:15px;
    border-color: #FDCE86;
    width:300px;
    display: flex;
    align-items: center;
    padding-left: 10px;
`
const SearchText = styled.input`
    float:left;
    background-color:transparent;
    padding-left:5px;
    font-style:italic;
    font-size:14px;
    border:none;
    height:30px;
    width:260px;
`
const SearchImg = styled.img`
    width: 15px;
    height: 15px;
`

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    position: relative;
    display: flex;
    flex-direction: column;
    background: #FB9759;
`
const CenterImg = styled.div`
    width: 100%;
    height: 190px;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
const Img = styled.img`
    width: 80px;
`
const Logo = styled.div`
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
const Center = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: white;
    border-radius: 40px 40px 0px 0px;
    margin-top: 0px;
`
const Header = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: left;
    margin: 20px 20px 0px 20px;

    img{
        width: 20px;
    }
`;
