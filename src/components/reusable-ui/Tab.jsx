import styled from 'styled-components';
import { theme } from '../../theme';

export default function Tab({Icon}) {
  return (
    <TabStyled>
      <div className='icon'>{Icon}</div>
    </TabStyled>
  )
}
const TabStyled = styled.button`
/* Reset l’aspect natif du bouton */
  -webkit-appearance: none;
  appearance: none;
  background: transparent;
  border: none;
  box-shadow: none;
  outline: none;
  padding: 0;

  &::-moz-focus-inner { border: 0; padding: 0; }

  &:focus,
  &:focus-visible,
  &:active {
    outline: none;
    box-shadow: none;
    border-color: transparent !important;
  }

    height: 43px; 
    padding: 0 22px;

    display: flex;
    justify-content: center;
    align-items: center;

    position: relative;
    left: 5px;
    top: 1px;

    cursor: pointer;

    // fonts
    font-size: ${theme.fonts.size.P0};
    color: ${theme.colors.greySemiDark};
    
    background: ${theme.colors.white};
    box-shadow: ${theme.shadows.subtle};

    // Border
    border-width: 1px 1px 2px 1px;
    border-style: solid;
    border-color: ${theme.colors.greyLight};

    // Border radius
    border-radius: ${theme.borderRadius.round};
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;

    :hover{
        border-bottom: 2px solid ${theme.colors.white};
    }

    .icon{
        display: flex;
    }

`;