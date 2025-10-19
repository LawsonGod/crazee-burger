import { Link, useParams } from 'react-router-dom'
import styled from 'styled-components';

export default function OrderPage() {
    //states
    const {username} = useParams()

    //comportements


    //affichage(render)
  return (
    <OrderPagestyled>
      <div className='container'>
        <h1>Bonjour {username}</h1>
        <Link to = "/">
          <button>Déconnexion</button>
        </Link>
      </div>
    </OrderPagestyled>
  )
}

const OrderPagestyled = styled.div`
  background: orange;
    height: 100vh;
    width: 100vw;
    display: flex;
    /* flex-direction: column; */
    justify-content: center;
    align-items: center;
    
    
  .container{
    background: red;
    width: 1400px;
    height: 95vh;
  }
  
  
`;
