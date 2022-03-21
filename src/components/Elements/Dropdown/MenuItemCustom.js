import React from "react";
import { MenuItemStyled } from "../../styles/Dropdown.styles";

const MenuItemCustom = ({ title, details, onClick }) => {
  return (
    <MenuItemStyled onClick={onClick}>
      <b>{title}</b>
      <small>{details}</small>
    </MenuItemStyled>
  );
};

export default MenuItemCustom;
