import styled, { css } from "styled-components";
import { theme } from "../../theme";

export default function TextInput({value,onChange,iconInput,className,version = "normal",...extraProps}) {
    
    //states


    //comportements
    

    // affichage(render)

  return (
       <InputStyled className={className} version={version}>
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
        background: ${theme.colors.background_white};
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

        /* ${(props) =>{
            if(props.version === "normal")return extraStyleNormal
            if(props.version === "minimalist") return extraStyleMinimalist
        }}

        ${(props) => extraStyle[props.version]} */

        ${(version) => extraStyle[version]} // optimal way
`;
const extraStyleNormal = css`
        background-color: ${theme.colors.white};
        padding: 18px 28px;
        color: ${theme.colors.greySemiDark};

        input{
            color: ${theme.colors.dark};

            input::placeholder{
                background: ${theme.colors.white}; 
            }
        }
`;

const extraStyleMinimalist = css`
        background-color: ${theme.colors.background_white};
        padding: 8px 16px;
        color: ${theme.colors.greyBlue};

        input{
            background:${theme.colors.background_white};
            color : ${theme.colors.dark};

            &:focus{
                outline : none;
            }
        }

`;

const extraStyle = {
    normal: extraStyleNormal,
    minimalist: extraStyleMinimalist
}