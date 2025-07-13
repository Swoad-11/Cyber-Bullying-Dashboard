import { Doughnut } from "react-chartjs-2";

const data = {
  labels: ["NCP", "BNP", "Jatiya Party", "BJI", "Others"],
  datasets: [
    {
      data: [12, 7, 3, 1, 2],
      backgroundColor: ["#E53935", "#1E88E5", "#43A047", "#8E24AA"],
    },
  ],
};

const options = {
  plugins: {
    legend: {
      display: false, // hide the labels
    },
    tooltip: {
      enabled: true, // show tooltips on hover
    },
  },
};

export default function BullyingDoughnut() {
  return (
    <div className="bg-gray-800 rounded-lg shadow p-6">
      <h2 className="text-xl font-semibold mb-4 text-center">
        Party Victimized by Cyberbullying
      </h2>
      <Doughnut data={data} options={options} />
    </div>
  );
}
