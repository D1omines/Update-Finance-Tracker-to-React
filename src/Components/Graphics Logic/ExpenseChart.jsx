import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export function ExpenseChart({ data }) {
  const chartData = {
    labels: data.map((item) => item.category),
    datasets: [
      {
        label: "Расходы по категориям",
        data: data.map((item) => item.amount),
        backgroundColor: [
          "#ff6384",
          "#36a2eb",
          "#ffce56",
          "#4bc0c0",
          "#9966ff",
          "#ff9f40",
        ],
        borderWidth: 1,
      },
    ],
  };

  return <Pie data={chartData} />;
}
