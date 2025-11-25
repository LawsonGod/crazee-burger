import { FiChevronUp, FiChevronDown } from "react-icons/fi";
import Tab from "../../reusable-ui/Tab";
import { AdminTabsStyled } from "./AdminTabs";
import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";

export const getTabsConfig = () => [
    // {
    //   index:"chevronUpDown",
    //   label: "",
    //   Icon: isCollapsed ? <FiChevronUp /> : <FiChevronDown />,
    //   onClick: () => setIsCollapsed(!isCollapsed),
    //   className: isCollapsed ? "is-active" : "",
    // },
    {
      index:"add",
      label: "Ajouter un produit",
      Icon: <AiOutlinePlus />,
      // className: currentTabSelected === "add" ? "is-active" : "",
    },
    {
      index:"edit",
      label: "Modifier un produit",
      Icon: <MdModeEditOutline />,
      // className: currentTabSelected === "edit" ? "is-active" : "",
    },
  ];

  export const getTabSelected = (tabs, currentTabSelected) => {
    return tabs.find((tab) => tab.index === currentTabSelected);
  }