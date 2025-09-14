import { Bar } from "react-chartjs-2";
import femaleCandidates from "../../assets/candidate";

export default function PartyBar() {
  // Count candidates by party
  const partyCounts = femaleCandidates.reduce((acc, candidate) => {
    const party = candidate.party;
    acc[party] = (acc[party] || 0) + 1;
    return acc;
  }, {});

  // Separate labels & values
  const labels = Object.keys(partyCounts);
  const values = Object.values(partyCounts);

  const partyBarData = {
    labels,
    datasets: [
      {
        label: "Female Candidates",
        data: values,
        backgroundColor: [
          "#3b82f6", // blue
          "#f59e0b", // amber
          "#10b981", // green
          "#8b5cf6", // purple
          "#ef4444", // red
          "#14b8a6", // teal
        ],
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
        ticks: {
          precision: 0, // prevent decimal labels
        },
      },
    },
  };

  return (
    <div className="bg-gray-800 rounded-lg p-4 h-full flex items-center justify-center">
      <div className="w-full">
        <h2 className="text-lg font-semibold mb-4 text-center text-white">
          Female Candidates by Party
        </h2>
        <Bar data={partyBarData} options={partyBarOptions} className="w-full" />
      </div>
    </div>
  );
}
