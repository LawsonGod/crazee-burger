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
  // const handleClick = () => {setIsCollapsed(!isCollapsed);};

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
      {/* <Tab
        label="Ajouter un produit"
        Icon={<AiOutlinePlus />}
        onClick={() => selectTab("add")}
        className={isAddSelected ? "is-active" : ""}
      />
      <Tab
        label="Modifier un produit"
        Icon={<MdModeEditOutline />}
        onClick={() => selectTab("edit")}
        className={isEditSelected ? "is-active" : ""}
      /> */}
      {tabs.map((tab) => (
        <Tab
          label={tab.label}
          Icon={tab.Icon}
          onClick={() => selectTab(tab.index)}
          className={tab.className}
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
  }

  button {
    margin-left: 1px;
  }
`;
