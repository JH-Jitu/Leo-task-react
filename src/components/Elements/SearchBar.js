import React from "react";
import {
  SearchBarStyle,
  SearchIconStyle,
} from "../styles/ContainerSectors.styles";
import { Image, InputStyle } from "../styles/Elements.styles";
import searchIcon from "./../../assets/Vector (2).png";

const SearchBar = () => {
  return (
    <SearchBarStyle>
      <InputStyle
        type="text"
        placeholder="Search candidates by name or email"
      />
      <SearchIconStyle>
        {" "}
        <Image src={searchIcon} alt="" />{" "}
      </SearchIconStyle>
    </SearchBarStyle>
  );
};

export default SearchBar;
