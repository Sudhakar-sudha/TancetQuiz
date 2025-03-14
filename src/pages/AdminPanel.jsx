
import { Routes, Route, Link } from "react-router-dom";
import Admin from "./Admin";
import AnswerGiving from "./AnswerGiving";
import UserResult from "./UserResult";

const AdminPanel = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navigation Bar */}
      <nav className="bg-blue-600 text-white p-4 flex justify-center space-x-6">
        <Link to="/admin" className="hover:text-gray-300">Manage Users</Link>
        <Link to="/admin/answers" className="hover:text-gray-300">Set Answers</Link>
        <Link to="/admin/results" className="hover:text-gray-300">Check Results</Link>
      </nav>

      {/* Page Content */}
      <div className="p-6">
        <Routes>
          <Route index element={<Admin />} /> {/* Default Page */}
          <Route path="answers" element={<AnswerGiving />} />
          <Route path="results" element={<UserResult />} />
        </Routes>
      </div>
    </div>
  );
};

export default AdminPanel;
