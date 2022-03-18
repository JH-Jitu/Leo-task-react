import styled from "styled-components";

// For Full Container
export const Image = styled.img`
  z-index: 0;
`;

export const SmallText = styled.small`
  font-size: 11px;
`;

export const TitleText = styled.h3`
  font-size: 17px;
`;

export const InputStyle = styled.input`
  background: #ffffff;
  border: 1px solid #d4dfea;
  box-sizing: border-box;
  border-radius: 10px;
  width: 334px;
  height: 37px;
  padding-left: 25px;
`;

export const ButtonStyle = styled.button`
  background: ${(props) => props.bgColor};
  border-radius: ${(props) => props.borderRadius}px;
  padding: 10px 30px;
  color: ${(props) => props.textColor};
  border: none;
  cursor: pointer;
`;

export const AvailableBtn = styled.select`
  background: ${(props) => props.bgColor};
  border-radius: 15px;
  border: none;
  width: 105px;
  height: 25px;
  appearance: none;
  padding-left: 10px;
  background-image: url("${(props) => props.arrowIcon}");
  background-repeat: no-repeat;
  background-position: right 1rem center;
  background-size: 10px;
  cursor: pointer;
  color: ${(props) => props.textColor};
`;
export const EventBtn = styled.select`
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
