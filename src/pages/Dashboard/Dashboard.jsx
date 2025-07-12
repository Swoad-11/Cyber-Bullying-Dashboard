import React from "react";
import { Bar, Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import Sidebar from "../../comoponents/Sidebar/Sidebar";
import BangladeshMap from "../../comoponents/Heatmap/BangladeshMap";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend
);

const tacticsData = {
  labels: ["Hate-speech", "Disinformation", "Harassment", "Doxxing"],
  datasets: [
    {
      label: "Cases",
      data: [23, 13, 8, 5],
      backgroundColor: "#f43f5e",
    },
  ],
};

const partyBarData = {
  labels: ["Awami League", "BNP", "Jatiya Party", "Others"],
  datasets: [
    {
      label: "Female Candidates",
      data: [35, 22, 10, 8],
      backgroundColor: ["#3b82f6", "#f59e0b", "#10b981", "#8b5cf6"],
    },
  ],
};

const partyBarOptions = {
  indexAxis: "y", // ← This makes it horizontal
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    x: {
      beginAtZero: true,
    },
  },
};

const platformData = {
  labels: ["Facebook", "Twitter", "YouTube", "TikTok"],
  datasets: [
    {
      label: "Reports",
      data: [18, 9, 4, 2],
      backgroundColor: ["#1877F2", "#1DA1F2", "#FF0000", "#25F4EE"],
    },
  ],
};

const platformOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

export default function Dashboard() {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <main className="flex-1 bg-gray-950 p-8 text-white">
          <div className="min-h-screen bg-gray-900 text-white p-6 space-y-6">
            <h1 className="text-3xl font-bold text-center">
              Online Gender-Based Violence Against Female Election Candidates
            </h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="flex flex-col gap-6">
                {/* First chart card */}
                <div className="bg-gray-800 rounded-2xl shadow p-6">
                  <h2 className="text-xl font-semibold mb-4 text-center">
                    Female Candidates by Party
                  </h2>
                  <Bar data={partyBarData} options={partyBarOptions} />
                </div>

                {/* Second chart card */}
                <div className="bg-gray-800 rounded-2xl shadow p-6">
                  <h2 className="text-xl font-semibold mb-4 text-center">
                    Violence Reports by Platform
                  </h2>
                  <Bar data={platformData} options={platformOptions} />
                </div>
              </div>

              <div className="bg-gray-800 rounded-2xl shadow p-6 lg:col-span-2">
                <BangladeshMap />
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-gray-800 rounded-2xl shadow p-4">
                <h2 className="text-xl font-semibold mb-2">
                  Targeted Candidates
                </h2>
                <ul className="space-y-2 text-sm">
                  <li>Rumeen Farhana - Comilla (Facebook)</li>
                  <li>Tasmia Mahmood - Mymensingh (Twitter)</li>
                  <li>Saleha Akhtar - Dhaka-19 (Twitter)</li>
                  <li>Nusrat Jahan - Chattogram-8 (Facebook)</li>
                  <li>Nabila Sultana - Raishahi-2 (Twitter)</li>
                </ul>
              </div>

              <div className="bg-gray-800 rounded-2xl shadow p-4">
                <h2 className="text-xl font-semibold mb-2">Main Tactics</h2>
                <Bar
                  data={tacticsData}
                  options={{
                    responsive: true,
                    plugins: { legend: { display: false } },
                  }}
                />
              </div>

              <div className="bg-gray-800 rounded-2xl shadow p-4">
                <h2 className="text-xl font-semibold mb-2">Top Victims</h2>
                <ul className="text-sm space-y-1">
                  <li>Candidate A - 4 Cases</li>
                  <li>Candidate B - 3 Cases</li>
                  <li>Candidate C - 2 Cases</li>
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gray-800 rounded-2xl shadow p-6 text-center">
                <h3 className="text-lg font-medium">Actions by Government</h3>
                <p className="text-4xl font-bold text-pink-500">6</p>
              </div>

              <div className="bg-gray-800 rounded-2xl shadow p-6 text-center">
                <h3 className="text-lg font-medium">Actions by Platforms</h3>
                <p className="text-4xl font-bold text-pink-500">15</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
