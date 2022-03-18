import React from "react";
import LoadMore from "./LoadMore";
import {
  BodyStyle,
  CandidateList,
  TableResponsive,
} from "./../styles/ContainerSectors.styles";
import Title from "./Title";
import Table from "./../Elements/Table";

const Body = () => {
  return (
    <BodyStyle>
      <Title />

      <CandidateList>
        <Table />
      </CandidateList>

      <LoadMore />
    </BodyStyle>
  );
};

export default Body;
