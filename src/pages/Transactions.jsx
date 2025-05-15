
import transactionsData from '../data/transactions';
import { useAuth } from '../services/AuthContext';

const Transactions = () => {
  const { user } = useAuth();
  const data = transactionsData[user.toLowerCase()] || [];

  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Transaction History</h1>

      <div className="overflow-x-auto bg-white rounded-xl shadow p-4">
        <table className="w-full text-left table-auto">
          <thead>
            <tr className="text-sm text-gray-600 border-b">
              <th className="p-2">Date</th>
              <th className="p-2">Description</th>
              <th className="p-2">Category</th>
              <th className="p-2 text-right">Amount</th>
            </tr>
          </thead>
          <tbody>
            {data.map((tx) => (
              <tr key={tx.id} className="border-b text-sm text-gray-800 hover:bg-gray-50">
                <td className="p-2">{tx.date}</td>
                <td className="p-2">{tx.description}</td>
                <td className="p-2">{tx.category}</td>
                <td className={`p-2 text-right ${tx.amount < 0 ? 'text-red-600' : 'text-green-600'}`}>
                  {tx.amount < 0 ? `-$${Math.abs(tx.amount).toFixed(2)}` : `$${tx.amount.toFixed(2)}`}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Transactions;
