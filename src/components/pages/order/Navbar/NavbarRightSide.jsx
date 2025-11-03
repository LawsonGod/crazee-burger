import styled from "styled-components";
import Profile from "./Profile";
import ToggleButton from "../../../reusable-ui/ToggleButton";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import { useState } from "react";
import { FaUserSecret } from "react-icons/fa";
import ToastAdmin from "./ToastAdmin";


export default function NavbarRightSide({username}) {
  //states
  const [isModeAdmin, setIsModeAdmin] =  useState (false);

  const displayToast = () => {
    if (!isModeAdmin) {
      toast.info("Mode admin activé", {
      icon: <FaUserSecret size={30} />,
      theme: "dark",
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
    }
    setIsModeAdmin(!isModeAdmin);
  }
  

  //comportements


  //affichage(render)
  return (
     <NavbarRightSideStyled>
        <ToggleButton
          labelIfUnchecked="ACTIVER LE MODE ADMIN"
          labelIfChecked="DÉSACTIVER LE MODE ADMIN"
          onToggle={displayToast}
        />
        <Profile username={username} />
        <ToastAdmin/>
    </NavbarRightSideStyled>
  )
}

const NavbarRightSideStyled = styled.div`
    display: flex;
    align-items: center;
    padding-right: 50px;

     
`;
