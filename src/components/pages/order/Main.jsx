import styled from "styled-components";
import { theme } from "../../../theme";

export default function Main() {
  return (
     <MainStyled>
        The main section
    </MainStyled>
  )
}

const MainStyled = styled.div`
    flex: 1; /*(On peut aussi utiliser) height: calc(95vh - 10vh); */
    background: ${theme.colors.background_white};
    border-bottom-right-radius: ${theme.borderRadius.extraRound};
    border-bottom-left-radius: ${theme.borderRadius.extraRound};
    box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset ;
    `;