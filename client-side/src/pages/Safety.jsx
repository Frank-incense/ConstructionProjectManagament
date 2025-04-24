import React, { useEffect, useState } from "react";
import SafetyTable from "../components/SafetyTable";

const Safety = () => {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    // Replace with actual backend endpoint
    fetch("http://localhost:3000/safety") 
      .then((res) => res.json())
      .then((data) => setEntries(data))
      .catch((err) => console.error("Failed to fetch safety data", err));
  }, []);

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Safety Submissions</h1>
      <SafetyTable data={entries} />
    </div>
  );
};

export default Safety;
