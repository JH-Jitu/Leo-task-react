import React from "react";
import { MenuItemStyled } from "../../styles/Dropdown.styles";

const MenuItemCustom = ({ title, details, onClick, ...rest }) => {
  return (
    <MenuItemStyled {...rest} onClick={onClick}>
      <b>{title}</b>
      <small>{details}</small>
    </MenuItemStyled>
  );
};

export default MenuItemCustom;
