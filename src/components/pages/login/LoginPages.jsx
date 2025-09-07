import LoginForm from "./LoginForm";
import styled from "styled-components";
import background from "../../../assets/F03 burger-background.jpg"    
import Logo from "../../reusable-ui/logo";


export default function LoginPages() {
   

    //affichage(render)
  return (
    <LoginPagesStyle>
      <Logo />
      <LoginForm />
    </LoginPagesStyle>
  )
}

const LoginPagesStyle = styled.div`
min-height: 100vh;
min-width: 100vw;
display: flex;
justify-content: center;
align-items: center;
background-image: url(${background});
background-size: cover;
background-position: center;
background-repeat: no-repeat;
  
`;

