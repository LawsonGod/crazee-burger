import styled from "styled-components";
import NavbarRightSide from "./NavbarRightSide";
import NavbarLeftSide from "./NavbarLeftSide";
import { theme } from "../../../theme";

export default function Navbar({username}) {
    //states
    

    //comportements


    //affichage(render)
  return (
    <NavbarStyled>
        <NavbarLeftSide />
        <NavbarRightSide username={username}/>
    </NavbarStyled>
  )
}

const NavbarStyled = styled.nav`
    background: ${theme.colors.white};
    height: 10vh;
    display: flex;
    justify-content: space-between;
    padding: 0 20px;

    border-top-right-radius: ${theme.borderRadius.extraRound};
    border-top-left-radius: ${theme.borderRadius.extraRound};
    /* align-items: center; */

`;
