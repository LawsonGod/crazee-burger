import styled from "styled-components";
import { theme } from "../../theme";

export default function TextInput({value, onChange,iconInput, className,...extraProps}) {
    
    //states


    //comportements
    

    // affichage(render)

  return (
       <InputStyled className={className}>
        <div className="input-icon">{iconInput&&iconInput}</div>
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

        input{
            border: none;
            font-size: ${theme.fonts.size.SM};
            color: ${theme.colors.dark};
            width: 100%;
        }

        input::placeholder{
        background: ${theme.colors.white};
        color: ${theme.colors.greyExtraLight};
        }

        .input-icon{
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: ${theme.fonts.size.SM};
            margin: 0 8px 0 10px;
            color: ${theme.colors.greySemiDark};
        }
`;
