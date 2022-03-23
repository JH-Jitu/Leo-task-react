import styled from "styled-components";
import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";

export const MenuButtonStyled = styled(MenuButton)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 130px;
  margin-right: 30px;
  border-radius: 5px;
  padding: 10px 15px;
  background: ${(props) => props.bgColor};
  color: ${(props) => props.textColor};
  border: none;
  cursor: pointer;

  margin-left: ${(props) => props.marginLeft}px;
`;

export const DropdownRoundedBtn = styled(MenuButton)`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.bgColor};
  border-radius: 15px;
  border: none;
  width: 105px;
  height: 25px;
  appearance: none;
  padding-left: 10px;
  /* background-image: url("${(props) => props.arrowIcon}"); */
  background-repeat: no-repeat;
  background-position: right 1rem center;
  background-size: 10px;
  cursor: pointer;
  color: ${(props) => props.textColor};
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
  width: ${(props) => props.width}px;
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
