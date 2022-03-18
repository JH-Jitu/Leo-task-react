import React from "react";
import icon1 from "./../../assets/Burger Menu right.png";
import icon2 from "./../../assets/Ellipse 3.png";
import icon3 from "./../../assets/Dashboard.png";
import icon4 from "./../../assets/Dashboard (1).png";
import icon5 from "./../../assets/Dashboard (2).png";
import icon6 from "./../../assets/Workforce.png";
import icon7 from "./../../assets/Client CRM.png";
import icon8 from "./../../assets/Dashboard (3).png";
import icon9 from "./../../assets/Dashboard (4).png";
import icon10 from "./../../assets/Dashboard (5).png";
import icon11 from "./../../assets/Group 479.png";
import icon12 from "./../../assets/Group 500.png";
import icon13 from "./../../assets/Group 501.png";
import { Menu, MenuItem } from "../styles/ContainerSectors.styles";
import { Image } from "../styles/Elements.styles";

const MenuBar = () => {
  return (
    <Menu>
      <>
        <MenuItem>
          <Image src={icon1} alt="" />
        </MenuItem>
        <MenuItem>
          <Image src={icon2} alt="" />
        </MenuItem>
        <MenuItem>
          <Image src={icon3} alt="" />
        </MenuItem>
        <MenuItem>
          <Image src={icon4} alt="" />
        </MenuItem>
        <MenuItem>
          <Image src={icon5} alt="" />
        </MenuItem>
        <MenuItem>
          <Image src={icon6} alt="" />
        </MenuItem>
        <MenuItem>
          <Image src={icon7} alt="" />
        </MenuItem>
        <MenuItem>
          <Image src={icon8} alt="" />
        </MenuItem>
        <MenuItem>
          <Image src={icon9} alt="" />
        </MenuItem>
        <MenuItem>
          <Image src={icon10} alt="" />
        </MenuItem>
        <MenuItem>
          <Image src={icon11} alt="" />
        </MenuItem>
        <MenuItem>
          <Image src={icon12} alt="" />
        </MenuItem>
        <MenuItem>
          <Image src={icon13} alt="" />
        </MenuItem>
      </>
    </Menu>
  );
};

export default MenuBar;
