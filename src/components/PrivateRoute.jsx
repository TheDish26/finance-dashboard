import { Navigate } from 'react-router-dom';
import { useAuth } from '../services/AuthContext';

const PrivateRoute = ({ children }) => {
  const { user } = useAuth();

  return user ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
// This component serves as a wrapper for private routes, redirecting to the login page if the user is not authenticated.