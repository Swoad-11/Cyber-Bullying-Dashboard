import { Outlet } from "react-router";
import Sidebar from "../comoponents/Sidebar/Sidebar";
import ReportButton from "../comoponents/ReportButton/ReportButton";
export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-gray-900 text-white">
      <Sidebar />
      <Outlet />
      <ReportButton />
    </div>
  );
}
