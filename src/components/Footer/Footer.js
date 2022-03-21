import React from "react";
import Button from "../Elements/Button";
import { FooterStyle, SelectedList } from "../styles/ContainerSectors.styles";
import { EventBtn, SmallText } from "../styles/Elements.styles";
import arrowLight from "./../../assets/Polygon 1.png";
import arrowDark from "./../../assets/Polygon 1 (2).png";
import jobIcon from "./../../assets/Dashboard (2).png";
import { useCandidates } from "./../../context/CandidateContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ToastNotifyStyle from "../styles/ToastNotify.styles";

const Footer = () => {
  const { selectedCandidates } = useCandidates();
  const handleAddJob = () => {
    toast.success(
      `${selectedCandidates.length} Candidate(s) added to the job! 🎉`
    );
  };
  return (
    <FooterStyle>
      <SelectedList>
        <input type="checkbox" />
        <SmallText>
          {" "}
          {selectedCandidates.length} Candidate(s) selected
        </SmallText>
      </SelectedList>

      <div>
        {/* <ToastNotifyStyle /> */}
        <Button
          onClick={handleAddJob}
          text="Add to Job"
          bgColor="#35c3ae"
          textColor="#ffffff"
          borderRadius="5"
          hasIcon={true}
          icon={jobIcon}
        />
        <EventBtn
          name="send"
          bgColor="#8cd4ed"
          textColor="#ffffff"
          arrowIcon={arrowLight}
        >
          <option value="sms">Send SMS</option>
          <option value="email">Send email</option>
        </EventBtn>
        <EventBtn
          name="others"
          bgColor="#ffffff"
          textColor="#2a3744"
          arrowIcon={arrowDark}
        >
          <option value="">Other Actions</option>
        </EventBtn>
      </div>
    </FooterStyle>
  );
};

export default Footer;
