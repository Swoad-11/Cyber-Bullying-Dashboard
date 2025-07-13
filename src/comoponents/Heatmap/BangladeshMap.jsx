import { useState } from "react";
import KhulnaDivision from "../Divisions/Khulna";
import Dhaka from "../Divisions/Dhaka";
import Rajshahi from "../Divisions/Rajshahi";
import Rangpur from "../Divisions/Rangpur";
import Sylhet from "../Divisions/Sylhet";
import Mymensingh from "../Divisions/Mymensingh";
import Barishal from "../Divisions/Barishal";
import Chattogram from "../Divisions/Chattogram";

const divisionData = {
  Dhaka: { count: 6, color: "#A8D5BA" },
  Chattogram: { count: 4, color: "#9CC2A3" },
  Khulna: { count: 1, color: "#B2D8B2" },
  Rajshahi: { count: 3, color: "#B8D9B9" },
  Barishal: { count: 1, color: "#A3D89F" },
  Sylhet: { count: 2, color: "#AED8B3" },
  Rangpur: { count: 1, color: "#B3D6B4" },
  Mymensingh: { count: 1, color: "#A0D8A7" },
};

export default function BangladeshMap() {
  const [hoveredDivision, setHoveredDivision] = useState(null);

  const hoverColor = "#609078";

  return (
    <div className="bg-gray-800 rounded-2xl p-6 shadow text-white">
      <h2 className="text-xl font-semibold text-center mb-4">
        Female Candidates by Division
      </h2>
      <div className="order-1 lg:order-2 w-full lg:w-2/3 mx-auto">
        <div className="relative w-full max-w-4xl mb-8">
          <svg
            className="w-full h-auto max-h-[calc(80vh)]"
            viewBox="0 0 580 806"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Khulna */}
            <KhulnaDivision
              hoveredDivision={hoveredDivision}
              setHoveredDivision={setHoveredDivision}
              divisionData={divisionData}
              hoverColor={hoverColor}
            />
            {/* Dhaka */}
            <Dhaka
              hoveredDivision={hoveredDivision}
              setHoveredDivision={setHoveredDivision}
              divisionData={divisionData}
              hoverColor={hoverColor}
            />

            {/* Rajshahi */}
            <Rajshahi
              hoveredDivision={hoveredDivision}
              setHoveredDivision={setHoveredDivision}
              divisionData={divisionData}
              hoverColor={hoverColor}
            />

            {/* Rangpur */}
            <Rangpur
              hoveredDivision={hoveredDivision}
              setHoveredDivision={setHoveredDivision}
              divisionData={divisionData}
              hoverColor={hoverColor}
            />

            {/* Sylhet */}
            <Sylhet
              hoveredDivision={hoveredDivision}
              setHoveredDivision={setHoveredDivision}
              divisionData={divisionData}
              hoverColor={hoverColor}
            />

            {/* Mymensingh */}
            <Mymensingh
              hoveredDivision={hoveredDivision}
              setHoveredDivision={setHoveredDivision}
              divisionData={divisionData}
              hoverColor={hoverColor}
            />

            {/* Barishal */}
            <Barishal
              hoveredDivision={hoveredDivision}
              setHoveredDivision={setHoveredDivision}
              divisionData={divisionData}
              hoverColor={hoverColor}
            />

            {/* Chattogram */}
            <Chattogram
              hoveredDivision={hoveredDivision}
              setHoveredDivision={setHoveredDivision}
              divisionData={divisionData}
              hoverColor={hoverColor}
            />

            {hoveredDivision && (
              <text
                x="350"
                y="50"
                textAnchor="middle"
                fill="white"
                fontWeight="bold"
                fontSize="20"
              >
                {hoveredDivision}: {divisionData[hoveredDivision].count}{" "}
                Candidates
              </text>
            )}
          </svg>
        </div>
      </div>
    </div>
  );
}
