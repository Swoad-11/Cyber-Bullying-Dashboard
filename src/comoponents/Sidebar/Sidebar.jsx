import { useState } from "react";
import {
  FaChartBar,
  FaUsers,
  FaExclamationTriangle,
  FaLandmark,
  FaShieldAlt,
} from "react-icons/fa";
import { RiSidebarFoldFill, RiSidebarUnfoldFill } from "react-icons/ri";

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={`min-h-screen bg-gray-800 text-white transition-all duration-300 z-10 ${
        collapsed ? "w-16" : "w-64"
      } flex flex-col ${collapsed ? "items-center" : ""} ${
        collapsed ? "" : "max-[930px]:fixed"
      }`}
    >
      <div className="flex justify-end p-4">
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="text-gray-400 hover:text-white"
        >
          {collapsed ? (
            <RiSidebarUnfoldFill size={20} />
          ) : (
            <RiSidebarFoldFill size={20} />
          )}
        </button>
      </div>

      <div
        className={`flex flex-col space-y-2 ${collapsed ? "items-center" : ""}`}
      >
        <MenuItem
          icon={<FaChartBar />}
          label="Overview"
          collapsed={collapsed}
        />
        <MenuItem
          icon={<FaUsers />}
          label="Female Candidates"
          collapsed={collapsed}
        />
        <MenuItem
          icon={<FaExclamationTriangle />}
          label="Violence Reports"
          collapsed={collapsed}
        />
        <MenuItem
          icon={<FaLandmark />}
          label="Party Analytics"
          collapsed={collapsed}
        />
        <MenuItem
          icon={<FaShieldAlt />}
          label="Actions Taken"
          collapsed={collapsed}
        />
      </div>
    </aside>
  );
}

function MenuItem({ icon, label, collapsed }) {
  return (
    <a
      href="#"
      className="flex items-center p-3 rounded hover:bg-gray-700 w-full"
    >
      <div className="text-blue-400">{icon}</div>
      {!collapsed && <span className="ml-3">{label}</span>}
    </a>
  );
}
