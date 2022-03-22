import React, { useContext, useEffect, useState } from "react";
import candidatesData from "./../candidatesData/candidatesData.json";

const CandidateContext = React.createContext();

export function useCandidates() {
  return useContext(CandidateContext);
}

export function CandidateProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [candidates, setCandidates] = useState([]);
  const [loadedCandidates, setLoadedCandidates] = useState(7);
  const [showFooter, setShowFooter] = useState(false);
  const [selectedCandidates, setSelectedCandidates] = useState([]);

  const body = JSON.stringify({
    filters: { slice: [0, loadedCandidates], team_member_id: 471 },
  });
  const handleLoadMore = () => {
    setLoadedCandidates((prevState) => prevState + 7);
  };

  useEffect(() => {
    const loadCandidates = () => {
      fetch("https://staging-api.recruitd.co.uk/v2/talent_network/15097/list", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: body,
      })
        .then((res) => res.json())
        .then((data) => {
          setCandidates(data);
          setLoading(false);
          data.results.forEach((candidate) => {
            candidate.checked = false;
            candidate.bgColor = "#c5e9f6";
            candidate.textColor = "white";
          });
        });
    };
    loadCandidates();
  }, [loadedCandidates, body]);

  // const candidatesList = candidatesData;
  // useEffect(() => {
  //   const loadCandidates = () => {
  //     setCandidates(candidatesList);
  //     setLoading(false);
  //     candidatesList.results.forEach((candidate) => {
  //       candidate.checked = false;
  //     });
  //   };
  //   loadCandidates();
  // }, [candidatesList, body]);

  const value = {
    candidates,
    setCandidates,
    loading,
    setLoadedCandidates,
    handleLoadMore,

    showFooter,
    setShowFooter,
    selectedCandidates,
    setSelectedCandidates,
  };

  console.log(loadedCandidates);

  return (
    <CandidateContext.Provider value={value}>
      {!loading && children}
    </CandidateContext.Provider>
  );
}
