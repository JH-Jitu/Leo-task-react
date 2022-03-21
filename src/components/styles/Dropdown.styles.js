import styled from "styled-components";
import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";

// For Full Container
export const DropDownStyle = styled.div`
  position: absolute;
  /* top: 10%; */
  width: 100px;
  transform: translate(-95%, 0%);
  background-color: blue;
  border: 1px solid black;
  /* border-radius: var(--border-radius); */
  padding: 1rem;
  overflow: hidden;
  /* transition: height var(--speed) ease; */
`;

export const MenuButtonStyled = styled(MenuButton)`
  width: 120px;
  margin-right: 30px;
  border-radius: 5px;
  padding: 10px 30px;
  background: ${(props) => props.bgColor};
  color: ${(props) => props.textColor};
  border: none;

  appearance: none;
  padding-left: 10px;
  background-image: url("${(props) => props.arrowIcon}");
  background-repeat: no-repeat;
  background-position: right 1rem center;
  background-size: 10px;
  cursor: pointer;

  &:nth-of-type(1) {
    margin-left: 30px;
  }
`;

export const MenuButtonThreeDot = styled(MenuButton)`
  background: url("${(props) => props.threeDot}");
  width: 15px;
  background-repeat: no-repeat;
  background-position: center;
  border: none;
  cursor: pointer;
`;

export const MenuStyled = styled(Menu)`
  width: ${(props) => props.width}px;
  z-index: 1;
  position: absolute;
  background-color: none;
  border-radius: 4px;
  /* right: 10%; */
`;

export const MenuItemStyled = styled(MenuItem)`
  margin: 0px;
  padding: 10px;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  background-color: white;

  & b {
    color: #1e1e1e;
  }
  & small {
    color: #b0bdca;
    font-size: 9px;
  }

  &:hover {
    background: rgba(212, 223, 234, 0.45);
  }
`;
