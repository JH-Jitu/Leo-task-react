import React from "react";
import LoadMore from "./LoadMore";
import { BodyStyle, CandidateList } from "./../styles/ContainerSectors.styles";
import Title from "./Title";
import Table from "./../Elements/Table";
import { useCandidates } from "../../context/CandidateContext";

const Body = () => {
  const { loading } = useCandidates();
  return (
    <>
      {loading ? (
        <p>loading........</p>
      ) : (
        <BodyStyle>
          <Title />

          <CandidateList>
            <Table />
          </CandidateList>

          <LoadMore />
        </BodyStyle>
      )}
    </>
  );
};

export default Body;
