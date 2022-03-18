import React from "react";
import Button from "../Elements/Button";
import { TitleBarStyle } from "../styles/ContainerSectors.styles";
import { SmallText } from "../styles/Elements.styles";
import SearchBar from "./../Elements/SearchBar";
import { TitleItemStyle } from "./../styles/ContainerSectors.styles";
import { TitleText } from "./../styles/Elements.styles";

const Title = () => {
  return (
    <TitleBarStyle class="title-bar">
      <TitleItemStyle class="title-item">
        <SmallText>Recruited Agency</SmallText>
        <TitleText>250 Candidates</TitleText>
      </TitleItemStyle>

      <TitleItemStyle></TitleItemStyle>

      <TitleItemStyle class="title-item">
        {/* Search */}
        <SearchBar />
      </TitleItemStyle>

      <TitleItemStyle class="title-item">
        <Button
          text="Add Candidates"
          bgColor="#2a3744"
          textColor="#ffffff"
          borderRadius="5"
        />
      </TitleItemStyle>
    </TitleBarStyle>
  );
};

export default Title;
