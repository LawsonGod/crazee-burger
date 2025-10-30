import styled from "styled-components";
import { theme } from "../../theme";
import Button from "./Button";

export default function Card({imageSource, title, leftDescription}) {
  return (
    <CardStyled>
      <div className="image">
        <img src={imageSource} alt={title} />
      </div>
      <div className="info-text">
        <div className="title">{title}</div>
        <div className="description">
          <div className="left-description">{leftDescription}</div>
          <div className="right-description">
            <Button className= "primary-button" label={"Ajouter"}/>
            {/* <button className="add-button">Ajouter</button> */}
          </div>
        </div>
      </div>
    </CardStyled>
  )
}
const CardStyled = styled.div`
  background: ${theme.colors.white};
  width: 200px;
  height: 300px;
  display: grid;
  grid-template-rows: 65% 1fr;
  padding: 20px;
  padding-bottom: 10px;
  box-shadow: -8px 8px 20px 0px rgb(0 0 0 / 20%);
  border-radius: ${theme.borderRadius.extraRound};
  
  .image{
    width: 100%;
    height: auto;
    margin-top: 30px;
    margin-bottom: 20px;
    
    img{
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  .info-text{
    display: grid;
    grid-template-rows: 30% 1fr;
    padding: 5px;

    .title{
      margin: auto 0;
      font-weight: ${theme.fonts.weights.bold};
      font-size: ${theme.fonts.size.P4};
      font-family: 'Amatic SC', cursive;
      width: 100%;
      color: ${theme.colors.dark};
      text-align: left;
      bottom: 10px;
      position: relative;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;

    }
    .description{
      display: grid;
      grid-template-columns: 1fr 1fr;

      .left-description{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        font-weight: ${theme.fonts.weights.medium};
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        color: ${theme.colors.primary};
      }
      .right-description{ 
        display:flex;
        justify-content: flex-end;
        align-items: center;
        font-size: ${theme.fonts.size.P1};
      
          .primary-button{
            font-size: ${theme.fonts.size.XS};
            padding: 12px;
            cursor: pointer;
          }
      }
      
    }
  }
`;
