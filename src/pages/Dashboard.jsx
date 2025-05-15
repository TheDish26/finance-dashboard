import ExpenseChart from '../components/ExpenseChart';

const Dashboard = () => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Expenses Overview</h2>
      <ExpenseChart />
    </div>
  );
};

export default Dashboard;
// This component serves as the main dashboard for the application.