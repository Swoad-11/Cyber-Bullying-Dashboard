import Sidebar from "../../comoponents/Sidebar/Sidebar";
import BangladeshMap from "../../comoponents/Heatmap/BangladeshMap";
import PartyBar from "../../comoponents/Charts/PartyBar";
import PlatformBar from "../../comoponents/Charts/PlatformBar";
import BullyingDoughnut from "../../comoponents/Charts/BullyingDoughnut";
import CountDown from "../../comoponents/CountDown/CountDown";
import TacticsBar from "../../comoponents/Charts/TacticsBar";
import {
  Chart as ChartJS,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  Title,
} from "chart.js";

export default function Dashboard() {
  ChartJS.register(
    BarElement,
    LineElement,
    PointElement,
    ArcElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend,
    Title
  );

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

            <div className="grid grid-cols-2 max-[850px]:grid-cols-1 gap-4 h-full">
              <div className="grid grid-cols-2 gap-2">
                <BullyingDoughnut className="h-full" />
                <PlatformBar className="h-full" />
              </div>
              <TacticsBar />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
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
