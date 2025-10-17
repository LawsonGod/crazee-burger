import styled from "styled-components";
import { theme } from "../../theme";

export default function TextInput({value, onChange,iconInput, ...extraProps}) {
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
        background-color: ${theme.colors.white};
        border-radius: ${theme.borderRadius.round};
        display: flex;
        align-items: center;
        padding: 18px 24px;
        margin: 18px 0;

        input{
            border: none;
            font-size: ${theme.fonts.size.P0};
            color: ${theme.colors.dark};
            width: 100%;
        }

        input::placeholder{
        background: ${theme.colors.white};
        color: ${theme.colors.greyExtraLight};
        }

        svg.input-icon{
            font-size: ${theme.fonts.size.P0};
            margin-right: 8px;
            color: ${theme.colors.greySemiDark};
        }
`;
