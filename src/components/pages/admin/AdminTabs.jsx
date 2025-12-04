import styled from "styled-components";
import Tab from "../../reusable-ui/Tab";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { theme } from "../../../theme";
import OrderContext from "../../../context/OrderContext";
import { useContext } from "react";
import { getTabsConfig } from "./getTabConfig";

export default function AdminTabs() {
  // States
  const {
    isCollapsed,
    setIsCollapsed,
    currentTabSelected,
    setCurrentTabSelected
  } = useContext(OrderContext);
  // Comportement
  const selectTab = (tabSelected) => {
    setIsCollapsed(false); //Ouvre le panel à chaque sélection de tab
    setCurrentTabSelected(tabSelected); // Met à jour l'onglet sélectionné
  };

  const tabs = getTabsConfig(currentTabSelected);

  // Affichage
  return (
    <AdminTabsStyled>
      <Tab
        label=""
        Icon={isCollapsed ? <FiChevronUp /> : <FiChevronDown />}
        onClick={() => setIsCollapsed(!isCollapsed)}
        className={isCollapsed ? "is-active" : ""}
      />
      {tabs.map((tab) => (
        <Tab
          key={tab.index}
          label={tab.label}
          Icon={tab.Icon}
          onClick={() => selectTab(tab.index)}
          className={currentTabSelected === tab.index ? "is-active" : ""}
        />
      ))}
    </AdminTabsStyled>
  );
}

export const AdminTabsStyled = styled.div`
  display: flex;
  padding: 0 20px;

  .is-active {
    background: ${theme.colors.background_dark};
    border-color: ${theme.colors.background_dark};
    color: ${theme.colors.white};
    border-bottom: 2px;
  }

  button {
    margin-left: 1px;
  }
`;
