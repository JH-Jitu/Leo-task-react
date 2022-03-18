import React from "react";
import { ButtonStyle } from "../styles/Elements.styles";

const Button = ({ text, bgColor, textColor, borderRadius }) => {
  return (
    <ButtonStyle
      bgColor={bgColor}
      textColor={textColor}
      borderRadius={borderRadius}
    >
      {text}
    </ButtonStyle>
  );
};

export default Button;
