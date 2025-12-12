import styled from "styled-components";
import Navbar from "./Navbar/Navbar";
import Main from "./Main/Main";
import { theme } from "../../../theme";
import { useState } from "react";
import OrderContext from "../../../context/OrderContext";
import { fakeMenu } from "../../../fakeData/fakeMenu";

export default function OrderPage() {
  //states
  const [isModeAdmin, setIsModeAdmin] = useState(true);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [currentTabSelected, setCurrentTabSelected] = useState("add")
  const [menu, _setMenu] = useState(fakeMenu.MEDIUM);

  //comportements
 const handleAdd = (newProduct) => {
  // 1. copie du menu
  const menuCopy = [...menu];

  // 2. manip de la copie du tableau
  const menuUpdated = [newProduct, ...menuCopy];

  // 3. mise a jour du state
  _setMenu(menuUpdated);
};

  const orderContextValue = {
    isModeAdmin,
    setIsModeAdmin,
    isCollapsed,
    setIsCollapsed,
    currentTabSelected,
    setCurrentTabSelected,
    handleAdd,
    menu,
  };

  //affichage(render)
  return (
    <OrderContext.Provider value={orderContextValue}>
      <OrderPagestyled>
        <div className="container">
          <Navbar />
          <Main />
        </div>
      </OrderPagestyled>
    </OrderContext.Provider>
  );
}

const OrderPagestyled = styled.div`
  background: ${theme.colors.primary};
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    background: ${theme.colors.red};
    width: 1400px;
    height: 95vh;
    display: flex;
    flex-direction: column;
    border-radius: ${theme.borderRadius.extraRound};
  }
`;
