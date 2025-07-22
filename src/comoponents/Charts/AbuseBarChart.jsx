import { Bar } from "react-chartjs-2";

export default function AbuseBarChart() {
  const data = {
    labels: ["Slut-shaming", "Doxxing", "Deepfake", "Threats", "Harassment"],
    datasets: [
      {
        label: "Number of Cases",
        data: [45, 30, 12, 25, 50],
        backgroundColor: "#e11d48",
      },
    ],
  };

  const options = {
    indexAxis: "y", // Horizontal bar
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Frequent Types of Abuse",
      },
    },
  };

  return (
    <>
      <Bar options={options} data={data} />
    </>
  );
}
