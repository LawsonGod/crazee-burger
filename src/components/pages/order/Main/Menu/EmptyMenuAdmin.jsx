import React from "react";
import styled from "styled-components";
import { theme } from "../../../../../theme/index.jsx";
import Button from "../../../../reusable-ui/Button.jsx";

export default function EmptyMenuAdmin({ onReset }) {
  return (
    <EmptyMenuAdminStyled>
      <span className="title">Le menu est vide ?</span>
      <span className="description">Cliquez ci-dessous pour le réinitialiser</span>
      <Button label={"Générer de nouveaux produits"} onClick={onReset} />
    </EmptyMenuAdminStyled>
  );
}

const EmptyMenuAdminStyled = styled.div`
  background-color: ${theme.colors.background_white};
  box-shadow: ${theme.shadows.strong};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .title,
  .description {
    text-align: center;
    font-family: "Amatic SC", cursive;
    color: ${theme.colors.greyBlue};
  }
  .title {
    font-size: ${theme.fonts.size.P4};
    font-weight: ${theme.fonts.weights.semiBold};
  }
  .description {
    font-size: ${theme.fonts.size.P4};
    margin-top: ${theme.spacing.md};
  }
  button {
    margin-top: ${theme.spacing.lg};
    font-size: ${theme.fonts.size.XS};
    width: auto;

  }

  `