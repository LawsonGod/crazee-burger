import styled from "styled-components";
import Profile from "./Profile";

export default function NavbarRightSide({username}) {
    //states
    

    //comportements


    //affichage(render)
  return (
     <NavbarRightSideStyled>
        {/* <div className="admin-button">
          Admin button
        </div> */}
        <Profile username={username} />
    </NavbarRightSideStyled>
  )
}

const NavbarRightSideStyled = styled.div`
    display: flex;
    align-items: center;
    padding-right: 50px;

    .admin-button{
      background: lightblue;
    }
`;
