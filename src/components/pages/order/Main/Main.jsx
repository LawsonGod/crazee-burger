import styled from "styled-components";
import { theme } from "../../../../theme";
import Menu from "./Menu";
import Admin from "../../admin/Admin";
import { useContext } from "react";
import OrderContext from "../../../../context/OrderContext";

export default function Main() {
  //States
  const {isModeAdmin, SetIsModeAdmin} = useContext(OrderContext)
  //Comportements

  //Affichage (render)
  return (
    <MainStyled>
      {/* <div className="basket-items">
        basket items
      </div> */}
      <div className="menu-and-admin">
        <Menu />
        {isModeAdmin ? <Admin /> : null}
        {/* affichage conditionnel en mode admin plus simple "IsModeAdmin && <Admin />" */}
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
    border-bottom-right-radius: ${theme.borderRadius.extraRound};
    border-bottom-left-radius: ${theme.borderRadius.extraRound};
  }  
`;