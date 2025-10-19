import styled from "styled-components";

export default function Main() {
  return (
     <MainStyled>
        The main section
    </MainStyled>
  )
}

const MainStyled = styled.div`
    background: green;
    flex: 1; /*(On peut aussi utiliser) height: calc(95vh - 10vh); */
      
`;