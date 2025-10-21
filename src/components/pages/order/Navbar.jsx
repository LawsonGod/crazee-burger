import styled from "styled-components";
import NavbarRightSide from "./NavbarRightSide";
import NavbarLeftSide from "./NavbarLeftSide";

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
    background: blue;
    height: 10vh;
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
    /* align-items: center; */

`;
