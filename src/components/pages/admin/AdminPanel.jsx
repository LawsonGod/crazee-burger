import styled from "styled-components";
import { theme } from "../../../theme";

export default function AdminPanel() {
  return (
    <AdminPanelStyled>
        AdminPanel
    </AdminPanelStyled>
  )
}

const AdminPanelStyled = styled.div`
    border: 6px solid ${theme.colors.purple};
    box-shadow: ${theme.shadows.subtle};
    background: ${theme.colors.white};
    height: 250px;
  
`;