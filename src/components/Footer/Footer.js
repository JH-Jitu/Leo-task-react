import React from "react";
import Button from "../Elements/Button";
import {
  ButtonSection,
  FooterStyle,
  SelectedList,
} from "../styles/ContainerSectors.styles";
import { SmallText } from "../styles/Elements.styles";
import arrowLight from "./../../assets/Polygon 1.png";
import arrowDark from "./../../assets/Polygon 1 (2).png";
import jobIcon from "./../../assets/Job.png";
import { useCandidates } from "./../../context/CandidateContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import ToastNotifyStyle from "../styles/ToastNotify.styles";
import { MenuButtonStyled, MenuStyled } from "../styles/Dropdown.styles";
import MenuItemCustom from "../Elements/Dropdown/MenuItemCustom";
import { Image } from "./../styles/Elements.styles";

const Footer = () => {
  const { selectedCandidates } = useCandidates();
  const handleAddJob = () => {
    toast.success(
      `${selectedCandidates.length} Candidate(s) added to the job! 🎉`
    );
  };
  const handleClick = (e) => {
    toast.success(`${e} applied for ${selectedCandidates.length} candidate(s)`);
  };

  const sendOptions = ["Send SMS", "Send Mail"];
  const otherActions = ["Action 1", "Action 2"];
  return (
    <FooterStyle>
      <SelectedList>
        <input type="checkbox" />
        <SmallText>
          {" "}
          {selectedCandidates.length} Candidate(s) selected
        </SmallText>
      </SelectedList>

      <ButtonSection>
        <Button
          onClick={handleAddJob}
          text="Add to Job"
          bgColor="#35c3ae"
          textColor="#ffffff"
          borderRadius="5"
          hasIcon={true}
          icon={jobIcon}
        />

        <MenuStyled
          arrowIcon={arrowDark}
          menuButton={
            <MenuButtonStyled
              marginLeft={30}
              bgColor="#8cd4ed"
              textColor="#ffffff"
            >
              <Image width={15} marginRight={15} src={jobIcon} />
              Send
              <Image width={10} marginLeft={15} src={arrowLight} />
            </MenuButtonStyled>
          }
        >
          {sendOptions.map((option) => (
            <MenuItemCustom
              onClick={() => handleClick(option)}
              width={130}
              title={option}
            />
          ))}
        </MenuStyled>

        <MenuStyled
          menuButton={
            <MenuButtonStyled bgColor="#ffffff" textColor="#2a3744">
              Other Actions
              <Image width={10} marginLeft={15} src={arrowDark} />
            </MenuButtonStyled>
          }
        >
          {otherActions.map((action) => (
            <MenuItemCustom
              onClick={() => handleClick(action)}
              width={130}
              title={action}
            />
          ))}
        </MenuStyled>
      </ButtonSection>
    </FooterStyle>
  );
};

export default Footer;
