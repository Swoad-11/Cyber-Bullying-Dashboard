import {
  FaChartBar,
  FaUsers,
  FaExclamationTriangle,
  FaLandmark,
  FaShieldAlt,
} from "react-icons/fa";

const Sidebar = () => {
  return (
    <aside className="w-64 min-h-screen bg-gray-900 p-6 text-white">
      <div className="text-2xl font-bold text-green-400 mb-8">
        Election Watch
      </div>
      <nav className="space-y-4 text-gray-300">
        <a
          href="#"
          className="flex items-center gap-3 hover:text-white transition"
        >
          <FaChartBar className="text-green-400" /> Overview
        </a>
        <a
          href="#"
          className="flex items-center gap-3 hover:text-white transition"
        >
          <FaUsers className="text-green-400" /> Female Candidates
        </a>
        <a
          href="#"
          className="flex items-center gap-3 hover:text-white transition"
        >
          <FaExclamationTriangle className="text-green-400" /> Violence Reports
        </a>
        <a
          href="#"
          className="flex items-center gap-3 hover:text-white transition"
        >
          <FaLandmark className="text-green-400" /> Party Analytics
        </a>
        <a
          href="#"
          className="flex items-center gap-3 hover:text-white transition"
        >
          <FaShieldAlt className="text-green-400" /> Actions Taken
        </a>
      </nav>
    </aside>
  );
};

export default Sidebar;
