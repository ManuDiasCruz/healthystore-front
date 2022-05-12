import styled from "styled-components";

const Button = styled.button`
    width:${props => props.width};
    height: 43px;
    margin-right: 10px;
    
    background: #FEFFFF;
    border-radius: 40px;

    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Raleway', sans-serif;
    font-size: 18px;
    line-height: 22px;
    color: #000000;
`;

export default Button;