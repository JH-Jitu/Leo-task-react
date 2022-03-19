import React, { useState } from "react";
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
import { useCandidates } from "../../context/CandidateContext";

const Table = () => {
  const { candidates, setCandidates } = useCandidates();
  const [checkCandidates, setCheckedCandidates] = useState(false);

  const handleCheck = (id) => {
    candidates.results.forEach((candidate) => {
      if (candidates.results.indexOf(candidate) === id) {
        candidate.checked = !candidate.checked;
      }
    });
    setCandidates({ ...candidates });
  };
  const handleCheckAll = () => {
    candidates.results.forEach((candidate) => {
      candidate.checked = !checkCandidates;
    });
    setCandidates({ ...candidates });

    setCheckedCandidates(!checkCandidates);
  };
  return (
    <TableResponsive>
      <table>
        <thead>
          <tr>
            <th>
              <input
                checked={checkCandidates}
                onChange={handleCheckAll}
                type="checkbox"
              />
            </th>
            <th>Candidate</th>
            <th>Rating</th>
            <th>Location</th>
            <th>Contact</th>
            <th>Availability</th>
          </tr>
        </thead>

        <tbody>
          {/*  //if don't want to use scroll then just have to uncomment the 'slice' */}
          {candidates.results
            // .slice(candidates.results.length - 7, candidates.results.length)
            .map((candidate) => {
              return (
                <tr key={candidates.results.indexOf(candidate)}>
                  <td>
                    <input
                      type="checkbox"
                      checked={candidate.checked}
                      onChange={() =>
                        handleCheck(candidates.results.indexOf(candidate))
                      }
                    />
                  </td>
                  <td>
                    <Candidate>
                      <div>
                        <Image src={avatar} alt="" />
                      </div>
                      <div>
                        <b>{candidate.name}</b>
                        <p>
                          {candidate.current_job_title ||
                            candidate.latest_application.job_title ||
                            "Software Engineer"}
                        </p>
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
                    {candidate.localizations ? (
                      candidate.localizations[0].location.name
                    ) : (
                      <>
                        London <br /> United Kingdom
                      </>
                    )}
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
              );
            })}
        </tbody>
      </table>
    </TableResponsive>
  );
};

export default Table;
