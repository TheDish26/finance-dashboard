import transactions from '../data/transactions';

const Transactions = () => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Transaction History</h2>
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b">
            <th className="p-2">Date</th>
            <th className="p-2">Description</th>
            <th className="p-2">Category</th>
            <th className="p-2">Amount</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(tx => (
            <tr key={tx.id} className="border-b">
              <td className="p-2">{tx.date}</td>
              <td className="p-2">{tx.description}</td>
              <td className="p-2">{tx.category}</td>
              <td className="p-2 text-right">{tx.amount < 0 ? `-$${Math.abs(tx.amount)}` : `$${tx.amount}`}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Transactions;
// This component displays a table of transactions.