import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function BarChart({ incomeOpeeration, expenseOpeeration }) {
  const chartData = {
    labels: ["Доходы", "Расходы"],
    datasets: [
      {
        label: ["Финансы"],
        data: [incomeOpeeration, expenseOpeeration],
        backgroundColor: ["green", "red"],
        borderRadius: 6,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,

    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Сравнение доходов и расходов",
      },
    },
  };

  return <Bar data={chartData} options={options} />;
}
