import styled from 'styled-components';
export default function Button({iconButton, label}) {
    //states



    //comportements



    //affichage(render)
  return (
    <ButtonStyle>
        <span>{label}</span>
       {iconButton&&iconButton}
    </ButtonStyle>
  )
}

const ButtonStyle = styled.button`
    width: 100%;
    border-radius: 5px;
    background-color: #ff9F1B;
    font-size: 15px;
    font-family: Arial, sans-serif;
    font-weight: 700;
    border: 1px solid #ff9F1B;
    color: white;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    white-space: nowrap;
    text-decoration: none;
    line-height: 1;
    padding: 18px 24px;

    &:hover:not(:disabled){
        background-color: white;
        color: #ff9F1B;
        border: 1px solid #ff9F1B;
        transition: all 200ms ease-in-out;
    }
    &:active{
        background-color: #ff9F1B;
        color: white;
        border: 1px solid #ff9F1B;
    }
    &:disabled{
        opacity: 0.5;
        cursor: not-allowed;
    }
`;
