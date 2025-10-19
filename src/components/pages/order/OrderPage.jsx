import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from './Navbar';

export default function OrderPage() {
    //states
    const {username} = useParams()

    //comportements

    //affichage(render)
  return (
    <OrderPagestyled>
      <div className='container'>
        <Navbar username = {username}/>

        <div className='main'>
          Main
        </div>
      </div>
    </OrderPagestyled>
  )
}

const OrderPagestyled = styled.div`
  background: orange;
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    
    
  .container{
    background: red;
    width: 1400px;
    height: 95vh;
    display: flex;
    flex-direction: column;

    .main {
      background: green;
      flex: 1; /*(On peut aussi utiliser) height: calc(95vh - 10vh); */
      
    }
  }
  
  
`;
