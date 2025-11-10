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
    box-shadow: ${theme.shadows.subtle};
    background: ${theme.colors.white};
    height: 250px;
  
`;