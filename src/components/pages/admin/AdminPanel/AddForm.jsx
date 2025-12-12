import { useContext, useState } from "react";
import styled from "styled-components";
import OrderContext from "../../../../context/OrderContext";

const EMPTY_PRODUCT = {
  id: "",
  title: "",
  imageSource: "",
  price:0,
};

export default function AddForm() {
  // States
  const { handleAdd } = useContext(OrderContext);
  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT);

  // const newProduct = {
  // id: new Date().getTime(),
  // imageSource: "../../../../../public/images/burger-vegan.png",
  // title: "Nouveau Produit",
  // price: 2.50

  // Comportements
  const handleSubmit = (event) => {
    event.preventDefault();

    const newProductToAdd = {
      ...newProduct,
      id: crypto.randomUUID(),
    };
      handleAdd(newProductToAdd);

    // reset form
    setNewProduct.Title("");
    setNewProduct.ImageSource("");
    setNewProduct.Price(0);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  // Affichage
  return (
    <AddFormStyled onSubmit={handleSubmit}>
      <div className="image-preview">ImagePreview </div>
      <div className="input-fields">
        <input
          name="title"
          value={newProduct.title}
          type="text"
          placeholder="Nom du produit"
          onChange={handleChange}
        />
        <input
          name="imageSource"
          value={newProduct.imageSource}
          type="text"
          placeholder="Image URL"
          onChange={handleChange}
        />
        <input
          name="price"
          value={newProduct.price ? newProduct.price : ""}
          type="text"
          placeholder="Prix du produit"
          onChange={handleChange}
        />
      </div>
      <button className="submit-button">Submit-button</button>
    </AddFormStyled>
  );
}

const AddFormStyled = styled.form`
  border: 2px solid black;
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: repeat(4, 1fr);
  margin: 30px;
  height: 80%;
  width: 70%;

  .image-preview {
    background: red;
    grid-area: 1 / 1 / 4 / 2;
  }

  .input-fields {
    background: blue;
    grid-area: 1 / 2 / 4 / 2;

    display: grid;
  }

  .submit-button {
    background: green;
    grid-area: 4 / -2 / -1 / -1;

    width: 50%;
  }
`;
