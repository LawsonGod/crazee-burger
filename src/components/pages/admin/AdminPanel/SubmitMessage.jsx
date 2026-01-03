import styled from "styled-components";
import { theme } from "../../../../theme";
import { FiCheck } from "react-icons/fi";

export default function SubmitMessage() {
  return (
    <SubmitMessageStyled className="submit-message">
      <FiCheck className="iconSubmitMessage" />
      <span className="message">Ajouté avec succès !</span>
    </SubmitMessageStyled>
  );
}

const SubmitMessageStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 5px;

  .iconSubmitMessage {
    color: ${theme.colors.success};
    margin-left: 10px;
    width: 1em;
    height: 1em;
    border-radius: ${theme.borderRadius.circle};
    vertical-align: middle;
  }
  .message {
    margin-left: 5px;
    font-size: ${theme.fonts.size.SM};
    color: ${theme.colors.success};
  }
`;
