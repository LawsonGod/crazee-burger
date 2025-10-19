import LoginForm from "./LoginForm";
import styled from "styled-components";
import background from "../../../assets/images/F03 burger-background.jpg"    
import Logo from "../../reusable-ui/Logo";


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
flex-direction: column;
justify-content: center;
align-items: center;

 ::before{
    content: "";
    background-image: 
    linear-gradient(
      rgba(0, 0, 0, 0.50), 
      rgba(0, 0, 0, 0.60)
    ),
    url(${background});
    position: absolute;
    inset: 0;
    background-size: cover;
    background-position: center;
    z-index: -1;  
} 
`;

