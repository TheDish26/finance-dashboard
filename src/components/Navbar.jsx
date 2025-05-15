import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../services/AuthContext';

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="bg-white shadow-md p-4 flex justify-between">
      <div className="flex gap-4">
        <Link to="/" className="text-blue-600 font-semibold">Dashboard</Link>
        <Link to="/transactions" className="text-blue-600 font-semibold">Transactions</Link>
      </div>
      {user && (
        <button onClick={handleLogout} className="text-sm text-red-600">
          Logout ({user})
        </button>
      )}
    </nav>
  );
};

export default Navbar;
// This component serves as the navigation bar for the application, providing links to the dashboard and transactions pages, as well as a logout button.