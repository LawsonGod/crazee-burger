import styled from "styled-components";
import { theme } from "../../theme";

export default function Logo({className, onClick}) {
  return (
    <LogoStyle className={className} onClick={onClick}>
        <h1>CRAZEE</h1> 
            <img src="/images/F03 logo-orange.png" alt="Burger-logo" />
        <h1>BURGER</h1>
    </LogoStyle>
  )
}

const LogoStyle = styled.div`
    display: flex;
    align-items: center;
    /* gap: 8px; */
    /* --logo-scale: 1; */

    h1{
        display: inline;
        text-align: center;
        color: ${theme.colors.primary};
        font-size: calc(${theme.fonts.size.P4} * var(--logo-scale, 1));
        line-height: 1em;
        font-weight: ${theme.fonts.weights.bold};
        text-transform: uppercase;
        letter-spacing: 1.5px;
        font-family: 'Amatic SC', cursive;
    }
    img{
        object-fit: contain;
        object-position: center;
        width: calc(80px * var(--logo-scale, 1));
        height: calc(80px * var(--logo-scale, 1));;
        margin: 0 ${theme.gridUnit / 2}px;
    }

`;