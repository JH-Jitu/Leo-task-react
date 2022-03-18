import React from "react";
import {
  Availability,
  Candidate,
  CandidateOptions,
  Contact,
  TableResponsive,
} from "./../styles/ContainerSectors.styles";
import { AvailableBtn, Image } from "../styles/Elements.styles";

import avatar from "./../../assets/Ellipse 8.png";
import fulfilledStar from "./../../assets/Star 4.png";
import emptyStar from "./../../assets/Star 5.png";
import availableThreeDot from "./../../assets/Overflow Menu.png";
import phoneIcon from "./../../assets/Vector.png";
import mailIcon from "./../../assets/gmail (1) 1.png";

// For passing to the style
import arrowIcon from "./../../assets/Polygon 1.png";

const Table = () => {
  return (
    <TableResponsive>
      <table>
        <thead>
          <tr>
            <th>
              <input type="checkbox" />
            </th>
            <th>Candidate</th>
            <th>Rating</th>
            <th>Location</th>
            <th>Contact</th>
            <th>Availability</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>
              <input type="checkbox" />
            </td>
            <td>
              <Candidate>
                <div>
                  <Image src={avatar} alt="" />
                </div>
                <div>
                  <b>name here</b>
                  <p>title here</p>
                </div>
              </Candidate>
            </td>
            <td>
              <Image src={fulfilledStar} alt="" />
              <Image src={fulfilledStar} alt="" />
              <Image src={fulfilledStar} alt="" />
              <Image src={fulfilledStar} alt="" />
              <Image src={emptyStar} alt="" />
            </td>
            <td>
              London <br />
              United Kingdom
            </td>
            <td>
              <Contact>
                <Image src={phoneIcon} alt="" />
                <Image src={mailIcon} alt="" />
              </Contact>
            </td>
            <td>
              <Availability>
                <div>
                  <AvailableBtn
                    arrowIcon={arrowIcon}
                    textColor="#0892c1"
                    bgColor="#c5e9f6"
                  >
                    <option value="active">Active</option>
                    <option value="active">Available</option>
                    <option value="active">Not Active</option>
                  </AvailableBtn>
                </div>
                <CandidateOptions>
                  <Image src={availableThreeDot} alt="" />
                </CandidateOptions>
              </Availability>
            </td>
          </tr>
        </tbody>
      </table>
    </TableResponsive>
  );
};

export default Table;
