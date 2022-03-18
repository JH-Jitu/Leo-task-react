import React from "react";
import { ButtonStyle, Image } from "../styles/Elements.styles";

const Button = ({ text, icon, hasIcon, bgColor, textColor, borderRadius }) => {
  return (
    <ButtonStyle
      bgColor={bgColor}
      textColor={textColor}
      borderRadius={borderRadius}
    >
      <div>
        {hasIcon && <Image src={icon} />}
        <span>{text}</span>
      </div>
    </ButtonStyle>
  );
};

export default Button;
