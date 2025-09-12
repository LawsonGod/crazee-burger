import styled from "styled-components";

export default function Input({value, onChange,iconInput, ...extraProps}) {
    console.log("extraProps:", extraProps);
    //states


    //comportements
    

    // affichage(render)

  return (
       <InputStyled >
        {iconInput&&iconInput}
            <input
                value={value}
                onChange={onChange}
                {...extraProps}
            />
        </InputStyled>
  )
}
const InputStyled = styled.div`
    background-color:#fff;
        border-radius: 5px;
        display: flex;
        align-items: center;
        padding: 18px 24px;
        margin: 18px 0;

        input{
            border: none;
            font-size: 15px;
            color: #17161a;
            width: 100%;
        }

        input::placeholder{
        background: white;
        color: lightgrey;
        }

        svg.input-icon{
            font-size: 15px;
            margin-right: 8px;
            color: #93a2b1;
        }
`;
