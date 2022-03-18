import React from "react";
import Button from "../Elements/Button";
import {
  LoadedCandidates,
  LoadMoreBtn,
  LoadMoreStyle,
  TotalCandidates,
} from "../styles/ContainerSectors.styles";
import { SmallText } from "../styles/Elements.styles";

const LoadMore = () => {
  return (
    <LoadMoreStyle>
      <div>
        <SmallText> SHOWING 8 of 240 Candidates </SmallText>
        <TotalCandidates>
          <LoadedCandidates loadedPercentage="50" />
        </TotalCandidates>
        <LoadMoreBtn>
          <Button
            text="Load More Candidates"
            bgColor="#2a3744"
            textColor="#ffffff"
            borderRadius="15"
          />
        </LoadMoreBtn>
      </div>
    </LoadMoreStyle>
  );
};

export default LoadMore;
