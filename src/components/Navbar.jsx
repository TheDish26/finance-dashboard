import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md p-4 flex gap-4">
      <Link to="/" className="text-blue-600 font-semibold">Dashboard</Link>
      <Link to="/transactions" className="text-blue-600 font-semibold">Transactions</Link>
    </nav>
  );
};

export default Navbar;
// This component serves as the navigation bar for the application.