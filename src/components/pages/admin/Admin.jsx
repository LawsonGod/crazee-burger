import styled from 'styled-components'
import AdminTabs from './AdminTabs';
import AdminPanel from './AdminPanel';
import { useState } from 'react';

export default function Admin() {
  // States
  const [isCollapsed, setIsCollapsed] = useState(false);
  
  // Comportement

  // Affichage
  return (
    <AdminStyled>
      <AdminTabs isCollapsed = {isCollapsed} setIsCollapsed = {setIsCollapsed} />
      {!isCollapsed && <AdminPanel />}
    </AdminStyled>
  )
}
              
const AdminStyled = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  
`;
