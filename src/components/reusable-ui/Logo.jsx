import styled from "styled-components";

export default function Logo() {
  return (
    <LogoStyle>logo</LogoStyle>
  )
}

const LogoStyle = styled.div`
    position: absolute;
    width: 150px;
    height: 150px;
    top: 200px;
    background-color: white;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    font-weight: 700;
    color: #F56A2C;
    text-transform: uppercase;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    font-family: 'Amatic SC', cursive;
  
`;