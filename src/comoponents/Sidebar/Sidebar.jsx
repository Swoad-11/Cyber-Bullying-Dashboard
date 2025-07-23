import { useState } from "react";
import {
  FaChartBar,
  FaUsers,
  FaExclamationTriangle,
  FaLandmark,
  FaShieldAlt,
  FaMapMarkedAlt,
} from "react-icons/fa";
import { RiSidebarFoldFill, RiSidebarUnfoldFill } from "react-icons/ri";
import { NavLink } from "react-router";

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <aside
      className={`
        bg-gray-800 text-white z-50 transition-all duration-300
        ${
          collapsed
            ? "max-[915px]:h-14 w-full flex max-[915px]:fixed top-0 left-0"
            : "max-[915px]:fixed top-0 left-0 min-h-screen w-64 flex-col"
        }
         min-[915px]:min-h-screen min-[915px]:flex-col
        ${collapsed ? "min-[915px]:w-16" : "min-[915px]:w-64"}
      `}
    >
      <div
        className={`flex ${collapsed ? "justify-center" : "justify-end"} p-4`}
      >
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
        className={`flex gap-4 max-[915px]:justify-center min-[915px]:gap-0 min-[915px]:flex-col min-[915px]:space-y-2 w-full min-[915px]:w-auto ${
          collapsed ? "items-center" : "flex-col"
        }`}
      >
        <NavLink to="/">
          <MenuItem
            icon={<FaChartBar />}
            label="Overview"
            collapsed={collapsed}
          />
        </NavLink>
        <NavLink to="/female-candidates">
          <MenuItem
            icon={<FaUsers />}
            label="Female Candidates"
            collapsed={collapsed}
          />
        </NavLink>
        <NavLink to="/division-overview">
          <MenuItem
            icon={<FaMapMarkedAlt />}
            label="Division Overview"
            collapsed={collapsed}
          />
        </NavLink>
        <NavLink to="/violence-reports">
          <MenuItem
            icon={<FaExclamationTriangle />}
            label="Violence Reports"
            collapsed={collapsed}
          />
        </NavLink>
        <NavLink to="/party-analytics">
          <MenuItem
            icon={<FaLandmark />}
            label="Party Analytics"
            collapsed={collapsed}
          />
        </NavLink>
        <NavLink to="/actions-taken">
          <MenuItem
            icon={<FaShieldAlt />}
            label="Actions Taken"
            collapsed={collapsed}
          />
        </NavLink>
      </div>
    </aside>
  );
}

function MenuItem({ icon, label, collapsed }) {
  return (
    <button
      href="#"
      className={`flex items-center p-3 rounded hover:bg-gray-700 transition-colors ${
        collapsed ? "justify-center" : ""
      }`}
    >
      <div className="text-blue-400">{icon}</div>
      {!collapsed && <span className="ml-3">{label}</span>}
    </button>
  );
}
