import { Outlet } from "react-router";
import Sidebar from "../comoponents/Sidebar/Sidebar";

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-gray-900 text-white">
      <Sidebar />
      <Outlet />
    </div>
  );
}
