import React, { useContext, useState } from 'react'
import styled from 'styled-components';
import OrderContext from '../../../../context/OrderContext';

export default function AddForm() {
    // States
    const { handleAdd } = useContext(OrderContext)

    const [title, setTitle] = useState("");
    const [imageSource, setImageSource] = useState("");
    const [price, setPrice] = useState(0);    

    // const newProduct = {
    // id: new Date().getTime(),
    // imageSource: "../../../../../public/images/burger-vegan.png",
    // title: "Nouveau Produit",
    // price: 2.50
  

    // Comportements
    const handleSubmit = (event) => {
        event.preventDefault();
        
        const newProduct = {
        id: new Date().getTime(),
        imageSource: imageSource,
        title: title,
        price: price
        };

        handleAdd(newProduct);

        // reset form
        setTitle("");
        setImageSource("");
        setPrice(0);
 
    }

    const handleTitleChange = (event) => {
        console.log("event.target.value:", event.target.value);
        setTitle(event.target.value);

    }

    const handleImageChange = (event) => {
        console.log("event.target.value:", event.target.value);
        setImageSource(event.target.value);

    }

    const handlePriceChange = (event) => {
        console.log("event.target.value:", event.target.value);
        setPrice(event.target.value);

    }





    // Affichage
  return (
    <AddFormStyled onSubmit={handleSubmit}>
        <div className='image-preview'>ImagePreview </div>
        <div className='input-fields'>
            <input value={title} type="text" placeholder='Nom du produit' onChange={handleTitleChange} />
            <input value={imageSource} type="text" placeholder='Image URL' onChange={handleImageChange} />  
            <input value={price} type="number" placeholder='Prix du produit' onChange={handlePriceChange} />
        </div>
        <button className='submit-button'>
            Submit-button
        </button>

    </AddFormStyled>
  )
}

const AddFormStyled = styled.form`
  border: 2px solid black;
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: repeat(4, 1fr);
  margin:  30px;
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

