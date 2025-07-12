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

const partyData = {
  labels: ["NCP", "BNP", "Jatiya Party", "Others"],
  datasets: [
    {
      data: [35, 22, 10, 8],
      backgroundColor: ["#3b82f6", "#f59e0b", "#10b981", "#8b5cf6"],
      hoverOffset: 8,
    },
  ],
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

              <div className="bg-gray-800 rounded-2xl shadow p-6">
                <h2 className="text-xl font-semibold mb-4 text-center">
                  Female Candidates by Political Party
                </h2>
                <div className="max-w-md mx-auto">
                  <Doughnut data={partyData} options={{ responsive: true }} />
                </div>
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
