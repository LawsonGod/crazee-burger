import styled from "styled-components";
import logoUrl from "../../assets/images/F03 logo-orange.png";
import { theme } from "../../theme";

export default function Logo() {
  return (
    <LogoStyle>
        <h1>CRAZEE</h1> 
            <img src={logoUrl} alt="Burger-logo" />
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
        color: ${theme.colors.primary};
        font-size: calc(${theme.fonts.size.P4}* var(--logo-scale));
        line-height: 1em;
        font-weight: ${theme.fonts.weights.bold};
        text-transform: uppercase;
        letter-spacing: 1.5px;
        font-family: 'Amatic SC', cursive;
    }
    img{
        object-fit: contain;
        object-position: center;
        width: calc(80px * var(--logo-scale));
        height: calc(80px * var(--logo-scale));
        margin: 0 ${theme.gridUnit / 2}px;
    }

`;