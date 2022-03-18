import React, { useContext, useEffect, useState } from "react";

const CandidateContext = React.createContext();

export function useCandidates() {
  return useContext(CandidateContext);
}

export function CandidateProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [candidates, setCandidates] = useState([]);
  useEffect(() => {
    const loadCandidates = () => {
      fetch("https://staging-api.recruitd.co.uk/v2/talent_network/15097/list", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          filters: { slice: [0, 10], team_member_id: 471 },
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          setCandidates(data);
          setLoading(false);
        });
    };
    loadCandidates();
  }, []);

  const value = {
    candidates,
    loading,
  };

  return (
    <CandidateContext.Provider value={value}>
      {!loading && children}
    </CandidateContext.Provider>
  );
}
