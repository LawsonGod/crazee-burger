import styled from "styled-components";
import { theme } from "../../../../theme";
import OrderContext from "../../../../context/OrderContext";
import { useContext } from "react";
import { getTabsConfig, getTabSelected } from "../getTabConfig";

export default function AdminPanel() {
  // States
  const { currentTabSelected } = useContext(OrderContext);

  // Comportement
  const tabs = getTabsConfig(currentTabSelected);
  const tabSelected = getTabSelected(tabs, currentTabSelected);

  // Affichage
  return (
    <AdminPanelStyled>
      {tabSelected?.Content}
    </AdminPanelStyled>
  );
}

const AdminPanelStyled = styled.div`
  box-shadow: ${theme.shadows.subtle};
  background: ${theme.colors.white};
  height: 250px;
  border-bottom-left-radius:${theme.borderRadius.extraRound};
  border-bottom-right-radius:${theme.borderRadius.extraRound};
`;
