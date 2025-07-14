import { Bar } from "react-chartjs-2";

export default function TacticsBar() {
  const tacticsData = {
    labels: ["Hate-speech", "Disinformation", "Harassment", "Doxxing", "Other"],
    datasets: [
      {
        label: "Cases",
        data: [13, 23, 18, 5, 9],
        backgroundColor: "#f43f5e",
      },
    ],
  };
  return (
    <>
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
    </>
  );
}
