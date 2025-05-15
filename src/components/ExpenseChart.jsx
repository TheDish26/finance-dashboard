import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const ExpenseChart = () => {
  const data = {
    labels: ['Rent', 'Food', 'Utilities', 'Transport'],
    datasets: [
      {
        label: 'Expenses',
        data: [1200, 600, 300, 150],
        backgroundColor: 'rgba(59, 130, 246, 0.5)',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default ExpenseChart;
// This component uses Chart.js to create a bar chart that visualizes expenses.