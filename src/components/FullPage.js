import React from "react";
import Body from "./Body/Body";
import MenuBar from "./MenuBar/MenuBar";
import Navbar from "./Navbar/Navbar";
import { Page } from "./styles/ContainerSectors.styles";

const FullPage = () => {
  return (
    <Page>
      <Navbar />
      <MenuBar />
      <Body />
    </Page>
  );
};

export default FullPage;
