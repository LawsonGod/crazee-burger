import styled from 'styled-components';
import Navbar from './Navbar/Navbar';
import Main from './Main/Main';
import { theme } from '../../../theme';
import { useState } from 'react';
import OrderContext from '../../../context/OrderContext';

export default function OrderPage() {
  //states
  const [isModeAdmin, setIsModeAdmin] =  useState (true);

  //comportements
  const orderContextValue = {
    isModeAdmin,
    setIsModeAdmin,
  };

  //affichage(render)
  return (
    <OrderContext.Provider value={orderContextValue}>
      <OrderPagestyled>
        <div className='container'>
          <Navbar />
          <Main />
        </div>
      </OrderPagestyled>
    </OrderContext.Provider>
  )
}

const OrderPagestyled = styled.div`
  background: ${theme.colors.primary};
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    
    
  .container{
    background: ${theme.colors.red};
    width: 1400px;
    height: 95vh;
    display: flex;
    flex-direction: column;
    border-radius: ${theme.borderRadius.extraRound}
    
  }
`;
