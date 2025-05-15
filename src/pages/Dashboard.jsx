import { useAuth } from '../services/AuthContext';
import transactionsData from '../data/transactions';
import ExpenseChart from '../components/ExpenseChart';

const Dashboard = () => {
  const { user } = useAuth();
  const data = transactionsData[user.toLowerCase()] || [];

  const totalIncome = data
    .filter((t) => t.amount > 0)
    .reduce((sum, t) => sum + t.amount, 0);

  const totalExpenses = data
    .filter((t) => t.amount < 0)
    .reduce((sum, t) => sum + t.amount, 0);

  return (
    <div className="max-w-5xl mx-auto">
      {/* Header */}
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Welcome, {user} 👋
      </h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
        <div className="bg-green-100 p-4 rounded-xl shadow">
          <h2 className="text-sm font-medium text-green-800">Total Income</h2>
          <p className="text-2xl font-bold text-green-900">${totalIncome.toFixed(2)}</p>
        </div>
        <div className="bg-red-100 p-4 rounded-xl shadow">
          <h2 className="text-sm font-medium text-red-800">Total Expenses</h2>
          <p className="text-2xl font-bold text-red-900">${Math.abs(totalExpenses).toFixed(2)}</p>
        </div>
      </div>

      {/* Chart */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h3 className="text-lg font-semibold mb-4 text-gray-700">Spending Breakdown</h3>
        <ExpenseChart data={data} />
      </div>
    </div>
  );
};

export default Dashboard;
