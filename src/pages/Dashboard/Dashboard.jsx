import { Bar } from "react-chartjs-2";

import Sidebar from "../../comoponents/Sidebar/Sidebar";
import BangladeshMap from "../../comoponents/Heatmap/BangladeshMap";
import PartyBar from "../../comoponents/Charts/PartyBar";
import PlatformBar from "../../comoponents/Charts/PlatformBar";
import BullyingDoughnut from "../../comoponents/Charts/BullyingDoughnut";
import CountDown from "../../comoponents/CountDown/CountDown";

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

export default function Dashboard() {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <main className="flex-1 bg-gray-950 text-white">
          <div className="min-h-screen bg-gray-900 text-white p-6 space-y-6">
            <h1 className="text-3xl font-bold text-center">
              Online Gender-Based Violence Against Female Election Candidates
            </h1>

            <div className="grid grid-cols-3 gap-4 h-full">
              <div className="flex flex-col gap-4">
                <PartyBar />
                <CountDown />
              </div>
              <div className="col-span-2">
                <BangladeshMap />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 h-full">
              <div className="grid grid-cols-2 gap-2">
                <BullyingDoughnut className="h-full" />
                <PlatformBar className="h-full" />
              </div>
              <div className="bg-gray-800 rounded-lg shadow p-4">
                <h2 className="text-xl font-semibold mb-2">Main Tactics</h2>
                <Bar
                  data={tacticsData}
                  options={{
                    responsive: true,
                    plugins: { legend: { display: false } },
                  }}
                />
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
