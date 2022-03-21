import React from "react";
import { useCandidates } from "../../context/CandidateContext";
import Button from "../Elements/Button";
import { TitleBarStyle } from "../styles/ContainerSectors.styles";
import { SmallText } from "../styles/Elements.styles";
import SearchBar from "./../Elements/SearchBar";
import { TitleItemStyle } from "./../styles/ContainerSectors.styles";
import { TitleText } from "./../styles/Elements.styles";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ToastNotifyStyle from "../styles/ToastNotify.styles";

const Title = () => {
  const { candidates } = useCandidates();
  const handleAddCandidate = () => toast.success("Candidate Added! 🔥");
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
          onClick={handleAddCandidate}
          text="Add Candidates"
          bgColor="#2a3744"
          textColor="#ffffff"
          borderRadius="5"
        />
        <ToastNotifyStyle />
      </TitleItemStyle>
    </TitleBarStyle>
  );
};

export default Title;
