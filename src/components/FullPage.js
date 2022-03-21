import React from "react";
import { useCandidates } from "../context/CandidateContext";
import Body from "./Body/Body";
import Footer from "./Footer/Footer";
import MenuBar from "./MenuBar/MenuBar";
import Navbar from "./Navbar/Navbar";
import { Page } from "./styles/ContainerSectors.styles";

const FullPage = () => {
  const { showFooter } = useCandidates();
  return (
    <Page>
      <Navbar />
      <MenuBar />
      <Body />
      {showFooter ? <Footer /> : <></>}
    </Page>
  );
};

export default FullPage;
