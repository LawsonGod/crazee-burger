import styled from "styled-components";
import { theme } from "../../../../theme";
import Menu from "./Menu";

export default function Main() {
  return (
    <MainStyled>
      {/* <div className="basket-items">
        basket items
      </div> */}
      <div className="menu-and-admin">
        <Menu />
        <div className="admin">Admin</div>
      </div>
      
    </MainStyled>
  )
}

const MainStyled = styled.div`
  border: 5px solid green;
  height: calc(95vh - 10vh);
  background: ${theme.colors.background_white};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  display: grid;
  grid-template-columns: /* 25% */ 1fr; 
  

  .basket-items{
  background: pink;
  }
  .menu-and-admin{
    position: relative;
    overflow-y: hidden;
    display: grid;
    .admin{
      background: red;
      border-bottom-right-radius: ${theme.borderRadius.extraRound};
      border-bottom-left-radius: ${theme.borderRadius.extraRound};
      height: 250px;
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
    }
  }  
`;