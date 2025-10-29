import { useState } from "react";
import styled from "styled-components";
import { fakeMenu2 } from "../../../../fakeData/fakeMenu";
import { theme } from "../../../../theme/index";
import Product from "./Product";
import { formatPrice } from "../../../utils/maths";


export default function Menu() {
   //States
  const [menu, _setMenu] = useState(fakeMenu2);


    //Comportements


    //Affichage (render)
  return (
   
    <MenuStyled>            
        {menu.map(({id, imageSource, title, price }) => {
          return (
            <Product 
              key={id}
              imageSource = {imageSource} 
              title = {title} 
              leftDescription = {formatPrice(price)}
            />
            //<Product {...produit} />  //autre facon de faire
          )
        })}
    </MenuStyled>
  )
}

const MenuStyled = styled. div`
  background: ${theme.colors.background_white};
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-row-gap: 60px;  
  padding: 50px 50px 150px;
  justify-items: center;
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;

`;
