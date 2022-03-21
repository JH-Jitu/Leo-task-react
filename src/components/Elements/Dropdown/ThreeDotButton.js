import React from "react";
import threeDot from "./../../../assets/Overflow Menu.png";

import { MenuButtonThreeDot } from "./../../styles/Dropdown.styles";

const ThreeDotButton = ({ children }) => {
  return (
    <MenuButtonThreeDot threeDot={threeDot}>{children}</MenuButtonThreeDot>
  );
};

export default ThreeDotButton;
