import React, { createContext, useEffect, useState } from "react";

export const ReportsContext = createContext();

export function ReportProvider({ children }) {
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReports = () => {
      fetch("https://tfgbv-data.vercel.app/api/reports")
        .then((res) => {
          if (!res.ok) throw new Error("Failed to fetch");
          return res.json();
        })
        .then((data) => {
          setReports(data);
          setLoading(false);
        })
        .catch((err) => {
          console.error("Failed to fetch reports:", err);
          setLoading(false);
        });
    };

    fetchReports();

    const intervalId = setInterval(fetchReports, 15000); // refresh every 15s

    return () => clearInterval(intervalId); // cleanup
  }, []);

  return (
    <ReportsContext.Provider value={{ reports, loading }}>
      {children}
    </ReportsContext.Provider>
  );
}
