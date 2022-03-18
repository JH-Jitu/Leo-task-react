import React from "react";
import { useCandidates } from "../../context/CandidateContext";
import Button from "../Elements/Button";
import { TitleBarStyle } from "../styles/ContainerSectors.styles";
import { SmallText } from "../styles/Elements.styles";
import SearchBar from "./../Elements/SearchBar";
import { TitleItemStyle } from "./../styles/ContainerSectors.styles";
import { TitleText } from "./../styles/Elements.styles";

const Title = () => {
  const { candidates } = useCandidates();
  console.log(candidates);
  return (
    <TitleBarStyle>
      <TitleItemStyle>
        <SmallText>Recruited Agency</SmallText>
        <TitleText>{candidates.total} Candidates</TitleText>
      </TitleItemStyle>

      <TitleItemStyle></TitleItemStyle>

      <TitleItemStyle>
        {/* Search */}
        <SearchBar />
      </TitleItemStyle>

      <TitleItemStyle>
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
