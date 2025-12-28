import { useContext } from "react";
import styled from "styled-components";
import { theme } from "../../../../../theme/index";
import { formatPrice } from "../../../../utils/maths";
import Card from "../../../../reusable-ui/Card";
import OrderContext from "../../../../../context/OrderContext";
import EmptyMenuAdmin from "./EmptyMenuAdmin";
import EmptyMenuClient from "./EmptyMenuClient";
const IMAGE_BY_DEFAULT = "../../../../../public/images/coming-soon.png";

export default function Menu() {
  //States
  // const [menu, _setMenu] = useState(fakeMenu.MEDIUM);
  const { menu, isModeAdmin, handleDelete, resetMenu } =
    useContext(OrderContext);

  //Comportements

  //Affichage (render)
  if (menu.length === 0) {
    if (!isModeAdmin) 
      return  <EmptyMenuClient />;
    return <EmptyMenuAdmin onReset={resetMenu} />;
  }

  return (
    <MenuStyled>
      {/* <button onClick={handleAddProduct}>Ajouter un produit</button> */}
      {menu.map(({ id, imageSource, title, price }) => {
        return (
          <Card
            key={id}
            imageSource={imageSource ? imageSource : IMAGE_BY_DEFAULT}
            title={title}
            leftDescription={formatPrice(price)}
            hasDeleteButton={isModeAdmin}
            onDelete={() => handleDelete(id)}
          />
          //<Product {...produit} />  //autre facon de faire en destructurant un objet
        );
      })}
    </MenuStyled>
  );
}

const MenuStyled = styled.div`
  background: ${theme.colors.background_white};
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-row-gap: 60px;
  padding: 50px 50px 150px;
  justify-items: center;
  box-shadow: ${theme.shadows.strong};
  overflow-y: scroll;
`;
