import React, { useEffect, useState } from "react";
import _ from "lodash";
import {
  Availability,
  Candidate,
  Contact,
  Rating,
  TableResponsive,
} from "./../styles/ContainerSectors.styles";
import { Image } from "../styles/Elements.styles";

import avatar from "./../../assets/Ellipse 8.png";
import fulfilledStar from "./../../assets/Star 4.png";
import emptyStar from "./../../assets/Star 5.png";
import availableThreeDot from "./../../assets/Overflow Menu.png";
import phoneIcon from "./../../assets/Vector.png";
import mailIcon from "./../../assets/gmail (1) 1.png";

// For passing to the style
import { useCandidates } from "../../context/CandidateContext";
import { MenuButtonThreeDot, MenuStyled } from "../styles/Dropdown.styles";
import MenuItemCustom from "./Dropdown/MenuItemCustom";
import { toast } from "react-toastify";
import SelectOption from "./SelectOption";

const Table = () => {
  const { candidates, setCandidates, setShowFooter, setSelectedCandidates } =
    useCandidates();
  const [checkCandidates, setCheckedCandidates] = useState(false);

  useEffect(() => {
    const filtered = candidates.results.filter(
      (candidate) => candidate.checked === true
    );
    if (filtered.length === 0) {
      setShowFooter(false);
    } else {
      setShowFooter(true);
    }
    setSelectedCandidates(filtered);
  }, [candidates, setSelectedCandidates, setShowFooter]);

  // To check one by one
  const handleCheck = (id) => {
    candidates.results.forEach((candidate) => {
      if (candidates.results.indexOf(candidate) === id) {
        candidate.checked = !candidate.checked;
      }
    });
    setCandidates({ ...candidates });
  };

  // To check all at a time
  const handleCheckAll = () => {
    candidates.results.forEach((candidate) => {
      candidate.checked = !checkCandidates;
    });
    setCandidates({ ...candidates });
    setShowFooter(!checkCandidates);

    setCheckedCandidates(!checkCandidates);
  };

  const options = [
    {
      title: "View profile",
      details: "View the candidates’s profile",
    },
    {
      title: "Remove candidate",
      details: "Remove from your network",
    },
    {
      title: "Blur candidate",
      details: "blur candidate",
    },
  ];

  const handleClick = (e) => {
    toast.success(`'${e}' applied for the candidate`);
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
                    <Rating>
                      {candidate.rating === null ? (
                        _.range(5).map(() => <Image src={emptyStar} alt="" />)
                      ) : (
                        <>
                          {_.range(candidate.rating).map(() => (
                            <Image src={fulfilledStar} alt="" />
                          ))}
                          {_.range(5 - candidate.rating).map(() => (
                            <Image src={emptyStar} alt="" />
                          ))}
                        </>
                      )}
                    </Rating>
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
                        <SelectOption candidate={candidate} />
                      </div>
                      <div>
                        <MenuStyled
                          menuButton={
                            <MenuButtonThreeDot>
                              <Image src={availableThreeDot} alt="" />
                            </MenuButtonThreeDot>
                          }
                        >
                          {options.map((option) => (
                            <MenuItemCustom
                              key={options.indexOf(option)}
                              onClick={() => handleClick(option.title)}
                              title={option.title}
                              details={option.details}
                            />
                          ))}
                        </MenuStyled>
                      </div>
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
