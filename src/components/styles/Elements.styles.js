import styled from "styled-components";

// For Full Container
export const Image = styled.img`
  z-index: 0;
  margin-left: ${(props) => props.marginLeft}px;
  margin-right: ${(props) => props.marginRight}px;
  width: ${(props) => props.width}px;
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

  & div {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  & img {
    height: 15px;
    margin-right: 10px;
  }
`;
