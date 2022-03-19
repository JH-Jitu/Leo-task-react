import styled from "styled-components";

// For Full Container
export const Container = styled.div`
  font-family: "Montserrat", sans-serif;
  height: 100vh;
`;

// For the whole page
export const Page = styled.div`
  display: grid;
  height: 100%;
  grid-template-columns: repeat(24, 1fr);
  grid-template-rows: 40px auto 50px;
`;

// For the Navigation Bar
export const NavContainer = styled.div`
  grid-column: 2/-1;
  background-color: #ffffff;
  border: 1px solid #dfe1e6;
  box-shadow: 0px 1px 4px rgba(223, 225, 230, 0.5);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 30px;
`;

export const NavItem = styled.div`
  & img {
    width: 100%;
    height: 15px;
  }

  &:nth-child(2) img {
    height: 20px;
  }
`;

// For the MenuBar
export const Menu = styled.div`
  grid-column: span 1;
  grid-row: 1/-1;
  background-color: #2a3744;
  box-shadow: 0px 1px 5px rgba(223, 225, 230, 0.5);
`;

export const MenuItem = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;

  & img {
    height: 15px;
    cursor: pointer;
  }
  &:nth-child(2) {
    border-bottom: 1px solid #ffffff;
  }
  &:nth-child(2) img {
    height: 20px;
  }
`;

// For Body
export const BodyStyle = styled.div`
  grid-column: span 23;
  background-color: #ffffff;
`;
// Title
export const TitleBarStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 30px;
`;
export const TitleItemStyle = styled.div`
  &:nth-child(2) {
    float: right;
    justify-self: flex-end;
  }
`;
// Search
export const SearchBarStyle = styled.div`
  position: relative;
`;
export const SearchIconStyle = styled.small`
  position: absolute;
  top: 50%;
  left: 5px;
  cursor: pointer;
  transform: translateY(-50%);
  font-size: 11px;
`;
// For Table
export const CandidateList = styled.div`
  padding: 0px 30px;
`;
export const TableResponsive = styled.div`
  overflow-x: auto;
  overflow-y: auto;
  max-height: 400px;

  & table {
    border-collapse: collapse;
    border-spacing: 0;
    width: 100%;
    border: none;
  }

  & th,
  & td {
    padding: 0px 30px;
  }

  & th {
    background-color: #f1f6f8;
    border: none;
    text-align: start;
  }

  & th:first-child {
    border-radius: 8px 0px 0px 8px;
  }
  & th:last-child {
    border-radius: 0px 8px 8px 0px;
  }

  & tr {
    height: 45px;
    border-bottom: 1px solid rgba(223, 231, 239, 0.5);
  }

  & td:first-child,
  & th:first-child {
    width: 30px;
  }
`;

export const Candidate = styled.div`
  display: flex;
  align-items: center;

  & img {
    margin-right: 10px;
    height: 30px;
  }
`;

export const Contact = styled.div`
  & img:nth-child(2) {
    margin-left: 15px;
  }
`;
export const Availability = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const CandidateOptions = styled.div`
  cursor: pointer;
`;
// For Load More
export const LoadMoreStyle = styled.div`
  margin-top: 20px;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  color: #2a3744;
  text-align: center;
  font-weight: bold;
`;
export const TotalCandidates = styled.div`
  margin-top: 10px;
  width: 320px;
  background-color: #dfe9f4;
  border-radius: 10px;
`;
export const LoadedCandidates = styled.div`
  height: 10px;
  width: ${(props) => props.loadedPercentage}%;
  background-color: #2a3744;
  border-radius: 10px;
`;
export const LoadMoreBtn = styled.div`
  margin-top: 10px;
`;

// For Footer part
export const FooterStyle = styled.div`
  grid-column: span 24;
  background-color: #2a3744;
  display: flex;
  justify-content: space-between;
  align-items: center;

  /* For Pagination Purpose (if load more) */
  position: fixed;
  width: 100%;
  bottom: 0;
  height: 50px;
`;
export const SelectedList = styled.div`
  padding-left: 100px;
  color: white;
  display: flex;
  align-items: center;

  & input {
    margin-right: 5px;
  }
`;
