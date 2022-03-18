import React from "react";

import logo from "./../../assets/Left Nav Options.png";
import avatar from "./../../assets/Ellipse 8.png";
import { NavContainer, NavItem } from "./../styles/ContainerSectors.styles";
import { Image } from "../styles/Elements.styles";

const Navbar = () => {
  return (
    <NavContainer>
      <NavItem>
        <Image src={logo} alt="" />
      </NavItem>

      <NavItem>
        <Image src={avatar} alt="" />
      </NavItem>
    </NavContainer>
  );
};

export default Navbar;
