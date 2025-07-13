import { Bar } from "react-chartjs-2";

export default function PartyBar() {
  const partyBarData = {
    labels: ["NCP", "BNP", "Jatiya Party", "BJI", "Others"],
    datasets: [
      {
        label: "Female Candidates",
        data: [35, 22, 10, 1, 8],
        backgroundColor: ["#3b82f6", "#f59e0b", "#10b981", "#8b5cf6"],
      },
    ],
  };

  const partyBarOptions = {
    indexAxis: "y",
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

  return (
    <>
      <div className="bg-gray-800 rounded-lg p-4 h-full flex items-center justify-center">
        <div className="w-full">
          <h2 className="text-lg font-semibold mb-4 text-center">
            Female Candidates by Party
          </h2>
          <Bar
            data={partyBarData}
            options={partyBarOptions}
            className="w-full"
          />
        </div>
      </div>
    </>
  );
}
