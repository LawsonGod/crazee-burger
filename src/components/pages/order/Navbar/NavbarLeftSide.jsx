import styled from "styled-components";
import Logo from "../../../reusable-ui/Logo";
import { refreshPage } from "../../../utils/Window";

export default function NavbarLeftSide() {
    //states


    //comportements


    //affichage(render)
  return (
    <NavbarLeftSideStyled>
        <Logo className={"logo-order-page"} onClick={refreshPage}/>
    </NavbarLeftSideStyled>
  )
}

const NavbarLeftSideStyled = styled.div`
  .logo-order-page{
    cursor: pointer;
  }
`;
