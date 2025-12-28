import styled, { css } from "styled-components";
import { theme } from "../../theme";
export default function Button({
  iconButton,
  label,
  className,
  version = "normal",
  onClick,
}) {
  //states

  //comportements

  //affichage(render)
  return (
    <ButtonStyle className={className} version={version} onClick={onClick}>
      <span>{label}</span>
      <div className="icon-button">{iconButton && iconButton}</div>
    </ButtonStyle>
  );
}

const ButtonStyle = styled.button`
  ${(props) => props.version === "normal" && extraStyleNormal}
  ${(props) => props.version === "success" && extraStyleSuccess} 
  
  ${({version}) => extraStyle[version]}
`;

const extraStyleNormal = css`
  width: 100%;
  border-radius: 5px;
  background-color: #ff9f1b;
  font-size: 15px;
  font-family: Arial, sans-serif;
  font-weight: 700;
  border: 1px solid #ff9f1b;
  color: ${theme.colors.white};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  white-space: nowrap;
  text-decoration: none;
  line-height: 1;
  padding: 18px 24px;

  &:hover:not(:disabled) {
    background-color: ${theme.colors.white};
    color: #ff9f1b;
    border: 1px solid #ff9f1b;
    transition: all 200ms ease-in-out;
  }
  &:active {
    background-color: #ff9f1b;
    color: ${theme.colors.white};
    border: 1px solid #ff9f1b;
  }
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  .icon-button {
    display: flex;
    justify-content: center;
    align-items: center;
    /* margin-left: 10px; */
  }
`;

const extraStyleSuccess = css`
  cursor: pointer;
  color: ${theme.colors.white};
  background: ${theme.colors.success};
  border: 1px solid ${theme.colors.success};
  border-radius: ${theme.borderRadius.round};
  height: 35px;
  padding: 0 1.5em;
  font-weight: ${theme.fonts.weights.semiBold};
  &:hover:not(:disabled) {
    background: ${theme.colors.white};
    color: ${theme.colors.success};
    border: 1px solid ${theme.colors.success};
  }
  :active {
    color: ${theme.colors.white};
    background: ${theme.colors.success};
    border: 1px solid ${theme.colors.success};
  }
`;

const extraStyle = {
  normal: extraStyleNormal,
  success: extraStyleSuccess,
};
