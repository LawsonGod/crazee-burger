import styled from "styled-components";
import { theme } from "../../../theme";
import OrderContext from "../../../context/OrderContext";
import { useContext } from "react";
import { getTabsConfig, getTabSelected } from "./getTabConfig";

export default function AdminPanel() {
  // States
  const { isAddSelected, isEditSelected, currentTabSelected } = useContext(OrderContext);

  // Comportement
  const tabs = getTabsConfig(currentTabSelected);
  const tabSelected = getTabSelected(tabs, currentTabSelected);

  // Affichage
  return (
    <AdminPanelStyled>
      {/* {isAddSelected && "Ajouter un produit"}
      {isEditSelected && "Modifier un produit"} */}
      {tabSelected?.label}
      {/* {isAddSelected ? "Ajouter un produit" : "Modifier un produit"} */}
    </AdminPanelStyled>
  );
}

const AdminPanelStyled = styled.div`
  box-shadow: ${theme.shadows.subtle};
  background: ${theme.colors.white};
  height: 250px;
`;
