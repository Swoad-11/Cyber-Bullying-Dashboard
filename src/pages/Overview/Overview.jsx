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
import TargetedCandidates from "../../comoponents/Table/TargetedCandidates";

export default function Overview() {
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
      <title>Dashboard | Overview</title>
      <main className="flex-1 p-6 space-y-6 max-[915px]:mt-12">
        <h1 className="text-3xl max-[825px]:text-lg font-bold text-center">
          Online Gender-Based Violence Against Female Election Candidates
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex flex-col gap-4">
            <PartyBar />
            <CountDown />
          </div>
          <div className="md:col-span-2">
            <BangladeshMap />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <BullyingDoughnut />
            <PlatformBar />
          </div>
          <TacticsBar />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <TargetedCandidates />
          <div className="grid grid-cols-2 gap-2 text-center">
            <div className="bg-gray-800 rounded-lg p-6 flex flex-col items-center justify-center">
              <h3 className="text-lg font-semibold mb-4">
                Actions by Government
              </h3>
              <p className="text-6xl max-[450px]:text-3xl font-bold text-pink-500">
                6
              </p>
            </div>
            <div className="bg-gray-800 rounded-lg p-6 flex flex-col items-center justify-center">
              <h3 className="text-lg  font-semibold mb-4">
                Actions by Platforms
              </h3>
              <p className="text-6xl max-[450px]:text-3xl font-bold text-pink-500">
                15
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
