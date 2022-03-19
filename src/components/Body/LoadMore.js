import React from "react";
import { useCandidates } from "../../context/CandidateContext";
import Button from "../Elements/Button";
import {
  LoadedCandidates,
  LoadMoreBtn,
  LoadMoreStyle,
  TotalCandidates,
} from "../styles/ContainerSectors.styles";
import { SmallText } from "../styles/Elements.styles";

const LoadMore = () => {
  const { candidates, handleLoadMore } = useCandidates();

  return (
    <LoadMoreStyle>
      <div>
        <SmallText>
          {" "}
          SHOWING {candidates.results.length} of {candidates.total} Candidates{" "}
        </SmallText>
        <TotalCandidates>
          <LoadedCandidates
            loadedPercentage={
              (candidates.results.length * 100) / candidates.total
            }
          />
        </TotalCandidates>
        <LoadMoreBtn>
          <Button
            onClick={handleLoadMore}
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
