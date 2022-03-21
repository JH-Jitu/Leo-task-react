import styled from "styled-components";
import { ToastContainer } from "react-toastify";

const ToastNotifyStyle = styled(ToastContainer).attrs({
  className: "toast-container",
  toastClassName: "toast",
  bodyClassName: "body",
  progressClassName: "progress",
})`
  /* .toast-container */
  /* width: 100%; */
  /* background-color: blue; */

  /* .toast is passed to toastClassName */
  /* .toast {
    background-color: ${(props) => props.successBgColor};
    color: ${(props) => props.successTextColor};
    font-weight: bold;
  } */

  .Toastify__toast--success {
    color: white;
    background-color: #2a3744;
    box-shadow: 10px 1px 1px white;

    /* font-weight: bold; */
  }

  .Toastify__progress-bar--success {
    background-color: white;
  }

  .Toastify__toast-icon {
    & svg {
      --toastify-icon-color-success: white;
    }
  }

  button[aria-label="close"] {
    display: none;
  }

  /* .body is passed to bodyClassName */
  .body {
    /* background-color: blue; */
  }

  /* .progress is passed to progressClassName */
  .progress {
  }
`;

export default ToastNotifyStyle;
