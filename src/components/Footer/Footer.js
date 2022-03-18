import React from "react";
import Button from "../Elements/Button";
import { FooterStyle, SelectedList } from "../styles/ContainerSectors.styles";
import { EventBtn, SmallText } from "../styles/Elements.styles";
import arrowLight from "./../../assets/Polygon 1.png";
import arrowDark from "./../../assets/Polygon 1 (2).png";

const Footer = () => {
  return (
    <FooterStyle>
      <SelectedList class="selected-list">
        <input type="checkbox" checked="true" />
        <SmallText> 2 Candidates selected</SmallText>
      </SelectedList>

      <div>
        <Button
          text="Add to Job"
          bgColor="#35c3ae"
          textColor="#ffffff"
          borderRadius="5"
        />
        <EventBtn
          name="send"
          bgColor="#8cd4ed"
          textColor="#ffffff"
          arrowIcon={arrowLight}
        >
          <option value="sms">Send SMS</option>
          <option value="email">Send email</option>
        </EventBtn>
        <EventBtn
          name="others"
          bgColor="#ffffff"
          textColor="#2a3744"
          arrowIcon={arrowDark}
        >
          <option value="">Other Actions</option>
        </EventBtn>
      </div>
    </FooterStyle>
  );
};

export default Footer;
