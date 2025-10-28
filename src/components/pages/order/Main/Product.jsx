import styled from "styled-components";

export default function Product({imageSource, title, price}) {
  return (
    <ProductStyled>
      <div className="image">
        <img src={imageSource} alt={title} />
      </div>
      <div className="info-text">
        <div className="title">{title}</div>
        <div className="description">
          <div className="price">{price}</div>
          <button className="add-button">Ajouter</button>
        </div>
      </div>
    </ProductStyled>
  )
}
const ProductStyled = styled.div`
  background: red;
    width: 240px;
    height: 330px;

      .image{
        width: 100px;
        height: auto;
        border: 3px solid fuchsia;
        img{
          width: 100%;
          height: 100%;
        }
      }
      .info-text{
      border: 3px solid fuchsia;
      }
`;
