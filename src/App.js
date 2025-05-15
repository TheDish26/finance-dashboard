import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Transactions from './pages/Transactions';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="p-6">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/transactions" element={<Transactions />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
// This is the main entry point of the application.
import './index.css'; // ✅ Import your CSS at the top

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
    <h1 className="text-3xl font-bold text-blue-600">Finance Dashboard</h1>
    </div>
  );
}

export default App; // ✅ Export your component at the bottom


