import styled from "styled-components";
import NavbarRightSide from "./NavbarRightSide";

export default function Navbar({username}) {
    //states
    

    //comportements


    //affichage(render)
  return (
    <NavbarStyled>
        <div className="left-side">
            left side
        </div>
        <NavbarRightSide username={username}/>
    </NavbarStyled>
  )
}

const NavbarStyled = styled.nav`
    background: blue;
    height: 10vh;
    display: flex;
    justify-content: space-between;
    /* align-items: center; */

    .left-side{
        background: purple;
    }
`;
