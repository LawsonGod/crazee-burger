import { createContext } from "react";

const OrderContext =  createContext ({
    isModeAdmin: false,
    setIsModeAdmin: () => {},

    isCollapsed: false,
    setIsCollapsed: () => {},

    isEditSelected: false,
    setIsEditSelected: () => {},

    isAddSelected: true,
    setIsAddSelected: () => {},
    
    currentTabSelected: true,
    setCurrentTabSelected: () => {},
     
    menu: [],
    handleAdd: () => {},
    



}); 
export default OrderContext;

