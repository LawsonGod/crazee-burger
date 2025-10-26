import styled from "styled-components";
import { theme } from "../../../theme";

export default function Main() {
  return (
     <MainStyled>
          <div className="basket-items">
          basket items
        </div>
        <div className="menu">            
          menu
        </div>
    </MainStyled>
  )
}

const MainStyled = styled.div`
    flex: 1; /*(On peut aussi utiliser) height: calc(95vh - 10vh); */
    background: ${theme.colors.background_white};
    border-bottom-right-radius: ${theme.borderRadius.extraRound};
    border-bottom-left-radius: ${theme.borderRadius.extraRound};
    box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset ;
    display: grid;
    grid-template-columns: 1fr 2fr;





    .basket-items{
      background: pink;
    }
    .menu{
      background: purple;
    }

    `;