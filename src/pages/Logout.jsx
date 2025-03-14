import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("username"); // Remove stored user
    localStorage.removeItem("quizStartTime"); // Remove stored user
    localStorage.removeItem("quizCompleted");
    
    localStorage.removeItem("quizStartTime");
    navigate("/"); // Redirect to login
  };

  return (
    <button 
      onClick={handleLogout} 
      className="bg-red-500 cursor-pointer text-white py-2 px-4 rounded hover:bg-red-600"
    >
      Logout
    </button>
  );
};

export default Logout;