
// import { Routes, Route, Link } from "react-router-dom";
// import Admin from "./Admin";
// import AnswerGiving from "./AnswerGiving";
// import UserResult from "./UserResult";

// const AdminPanel = () => {
//   return (
//     <div className="min-h-screen bg-gray-100">
//       {/* Navigation Bar */}
//       <nav className="bg-blue-600 text-white p-4 flex justify-center space-x-6">
//         <Link to="/admin" className="hover:text-gray-300">Manage Users</Link>
//         <Link to="/admin/answers" className="hover:text-gray-300">Set Answers</Link>
//         <Link to="/admin/results" className="hover:text-gray-300">Check Results</Link>
//       </nav>

//       {/* Page Content */}
//       <div className="p-6">
//         <Routes>
//           <Route index element={<Admin />} /> {/* Default Page */}
//           <Route path="answers" element={<AnswerGiving />} />
//           <Route path="results" element={<UserResult />} />
//         </Routes>
//       </div>
//     </div>
//   );
// };

// export default AdminPanel;


import { Routes, Route, Link } from "react-router-dom";
import Admin from "./Admin";
import AnswerGiving from "./AnswerGiving";
import UserResult from "./UserResult";
import { useNavigate } from "react-router-dom";

const AdminPanel = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("username"); // Remove stored user
    localStorage.removeItem("quizStartTime"); // Remove stored user
    localStorage.removeItem("quizCompleted");
    
    localStorage.removeItem("quizStartTime");
    navigate("/"); // Redirect to login
  };
  return (
    <div className="min-h-screen bg-gray-100">
     {/* Navigation Bar */}
<nav className="bg-blue-700 text-white flex justify-between items-center px-6 py-4 shadow-lg">
  {/* Left Section - Navigation Links */}
  <div className="flex space-x-6">
    <Link to="/admin" className="text-lg font-semibold hover:bg-amber-600 transition px-4 py-2 rounded-lg">
      Manage Users
    </Link>
    <Link to="/admin/answers" className="text-lg font-semibold hover:bg-amber-600 transition px-4 py-2 rounded-lg">
      Set Answers
    </Link>
    <Link to="/admin/results" className="text-lg font-semibold  hover:bg-amber-600 px-4 py-2 rounded-lg transition">
      Check Results
    </Link>
  </div>

  {/* Right Section - Logout Button */}
  <button 
    onClick={handleLogout} 
    className="bg-red-500 text-white text-lg font-semibold px-5 py-2 rounded-lg shadow-md hover:bg-red-600 transition-all"
  >
    Logout
  </button>
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
