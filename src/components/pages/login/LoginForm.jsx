import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { IoChevronForward } from "react-icons/io5";
import { BsPersonCircle } from "react-icons/bs";
import TextInput from "../../reusable-ui/TextInput";
import Button from "../../reusable-ui/Button";
import { theme } from "../../../theme";

export default function LoginForm() {
  //states
  const [inputValue, setInputValue] = useState("Godwill");
  const navigate = useNavigate();

  //comportements
  const handlesubmit = (event) => {
    event.preventDefault();
    setInputValue("");
    navigate(`order/${inputValue}`);
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  //affichage(render)
  return (
    <div>
      <LoginFormStyle action="submit" onSubmit={handlesubmit}>
        <h1>Bienvenue chez nous !</h1>
        <hr />
        <h2>Connectez-vous</h2>
        <TextInput
          value={inputValue}
          onChange={handleChange}
          type="text"
          placeholder="Entrez votre prénom"
          required
          iconInput={<BsPersonCircle />}
          className="input-login"
          version="normal"
        />

        <Button
          iconButton={<IoChevronForward />}
          label={"Accéder à mon espace"}
        />
      </LoginFormStyle>
    </div>
  );
}

const LoginFormStyle = styled.form`
  max-width: 500px;
  min-height: 400px;
  text-align: center;
  margin: 0px auto;
  padding: 40px ${theme.spacing.lg};
  border-radius: ${theme.borderRadius.round};
  font-family: "Amatic SC", cursive;

  h1 {
    font-size: ${theme.fonts.size.P5};
    color: ${theme.colors.white};
  }
  hr {
    border: 1px solid ${theme.colors.loginLine};
    margin-bottom: ${theme.gridUnit * 5}px;
  }
  h2 {
    margin: 20px 10px 10px;
    font-size: ${theme.fonts.size.P4};
    color: ${theme.colors.white};
  }

  .input-login {
    margin: 18px 0;
  }
`;
