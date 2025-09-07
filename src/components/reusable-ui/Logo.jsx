import styled from "styled-components";

export default function Logo() {
  return (
    <LogoStyle>
        <h1>CRAZEE</h1> 
            <img src="/src/assets/images/F03 logo-orange.png" alt="Burger-logo" />
        <h1>BURGER</h1>
    </LogoStyle>
  )
}

const LogoStyle = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    --logo-scale: 2.5;

    h1{
        display: inline;
        text-align: center;
        color: #ffa01b;
        font-size: calc(36px * var(--logo-scale));
        line-height: 1em;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 1.5px;
        font-family: 'Amatic SC', cursive;
    }
    img{
        object-fit: contain;
        object-position: center;
        width: calc(80px * var(--logo-scale));
        height: calc(80px * var(--logo-scale));
        margin: 0 5px;
    }

`;