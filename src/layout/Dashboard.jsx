import { Outlet } from "react-router";
import Sidebar from "../comoponents/Sidebar/Sidebar";
import ReportButton from "../comoponents/ReportButton/ReportButton";
import { ReportsContext } from "../comoponents/Provider/ReportProvider";
import { useContext } from "react";

export default function Dashboard() {
  const { reports, loading } = useContext(ReportsContext);

  console.log(reports);

  return (
    <div className="flex min-h-screen bg-gray-900 text-white">
      <Sidebar />
      <Outlet />
      <ReportButton />
    </div>
  );
}
