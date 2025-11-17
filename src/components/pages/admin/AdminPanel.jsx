import styled from "styled-components";
import { theme } from "../../../theme";
import OrderContext from "../../../context/OrderContext";
import { useContext } from "react";

export default function AdminPanel() {
  // States
  const { isAddSelected, isEditSelected } = useContext(OrderContext);

  // Comportement

  // Affichage
  return (
    <AdminPanelStyled>
      {isAddSelected && "Ajouter un produit"}
      {isEditSelected && "Modifier un produit"}
      {/* {isAddSelected ? "Ajouter un produit" : "Modifier un produit"} */}
    </AdminPanelStyled>
  );
}

const AdminPanelStyled = styled.div`
  box-shadow: ${theme.shadows.subtle};
  background: ${theme.colors.white};
  height: 250px;
`;
