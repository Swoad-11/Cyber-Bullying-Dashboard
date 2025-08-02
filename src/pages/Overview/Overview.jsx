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
import AbuseBarChart from "../../comoponents/Charts/AbuseBarChart";
import ActionsTaken from "../../comoponents/ActionsTaken/ActionsTaken";
import { ReportsContext } from "../../comoponents/Provider/ReportProvider";
import { useContext } from "react";

export default function Overview() {
  const { reports, loading } = useContext(ReportsContext);

  console.log(reports);

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
            <TargetedCandidates reports={reports} loading={loading} />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <BullyingDoughnut />
            <PlatformBar />
          </div>
          <TacticsBar />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center">
          <div className="bg-gray-800 rounded-lg p-4">
            <AbuseBarChart />
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <ActionsTaken
              title={"Government Response"}
              total={21}
              actionsTaken={7}
              noAction={14}
            />
            <ActionsTaken
              title={"Platform Response"}
              total={30}
              actionsTaken={17}
              noAction={13}
            />
          </div>
        </div>
      </main>
    </>
  );
}
