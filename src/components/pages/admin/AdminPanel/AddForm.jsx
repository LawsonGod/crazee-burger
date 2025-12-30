import { useContext, useState } from "react";
import styled from "styled-components";
import OrderContext from "../../../../context/OrderContext.jsx";
import TextInput from "../../../reusable-ui/TextInput.jsx";
import Button from "../../../reusable-ui/Button.jsx";
import { EMPTY_PRODUCT } from "./EmptyProduct.jsx";
import ImagePreview from "../adminPanel/ImagePreview.jsx";
import SubmitMessage from "../adminPanel/SubmitMessage.jsx";
import { getInputTextsConfig } from "./inputTextConfig.jsx";

export default function AddForm() {
  // States
  const { handleAdd, newProduct, setNewProduct } = useContext(OrderContext);
  // const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT);
  const [isSubmitted, setisSubmitted] = useState(false);

  // Comportements
  const handleSubmit = (event) => {
    event.preventDefault();

    const newProductToAdd = {
      ...newProduct,
      id: crypto.randomUUID(),
    };
    handleAdd(newProductToAdd);

    // reset form
    setNewProduct(EMPTY_PRODUCT);

    displayMessageSuccess();
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const displayMessageSuccess = () => {
    // afficher message de succes
    setisSubmitted(true);

    // cacher le message apres 2 secondes
    setTimeout(() => {
      setisSubmitted(false);
    }, 2000);
  };

  const inputTexts = getInputTextsConfig(newProduct);

  // Affichage
  return (
    <AddFormStyled onSubmit={handleSubmit}>
      <ImagePreview
        imageSource={newProduct.imageSource}
        title={newProduct.title}
      />
      <div className="input-fields">
        {inputTexts.map((input) => (
          <TextInput
            // name={input.name}
            // value={input.value}
            // type={input.type}
            // placeholder={input.placeholder}
            // onChange={handleChange}
            // iconInput={input.iconInput}
            // version={input.version}
            {...input}
            onChange={handleChange}
            version={input.version}
          />
        ))}
      </div>
      <div className="submit">
        <Button
          className="submit-button"
          label={"Ajouter un nouveau produit au menu"}
          version="success"
        />
        {isSubmitted && <SubmitMessage />}
      </div>
    </AddFormStyled>
  );
}

const AddFormStyled = styled.form`
  /* border: 2px solid black; */
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: repeat(4, 1fr);
  margin-left: 30px;
  height: 100%;
  width: 70%;
  grid-column-gap: 20px;
  grid-row-gap: 8px;

  .input-fields {
    grid-area: 1 / 2 / -2 / 3;

    display: grid;
    grid-row-gap: 8px;
  }

  .submit {
    grid-area: 4 / -2 / -1 / -1;
    display: flex;
    align-items: center;
    position: relative;
    top: 3px;

    .submit-button {
      /* width: 50%; */
      height: 100%;
    }
  }
`;
