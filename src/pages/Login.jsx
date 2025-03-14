


import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaUser, FaLock } from "react-icons/fa"; // Icons for username & password

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Redirect if user is already logged in
  useEffect(() => {
    const storedUser = localStorage.getItem("username");
    if (storedUser) {
      navigate("/quiz");
    }
  }, [navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://backendsampleclg.onrender.com/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("username", data.username);
         // Check if user has already submitted the quiz
         const checkResponse = await fetch(
          `https://backendsampleclg.onrender.com/api/check-submission?username=${data.username}`
        );
        const checkData = await checkResponse.json();

        if (checkData.alreadySubmitted) {
          localStorage.setItem("quizCompleted", "true");
          navigate("/result"); // Redirect to results if quiz is already submitted
        } else {
          navigate("/termsandcondition"); // Otherwise, go to Terms & Conditions
        }
      } else {
        alert(data.message || "Invalid login credentials");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Server error. Please try again later.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-green-500 to-green-300 p-6">
      <div className="bg-white p-10 rounded-lg shadow-lg w-auto h-auto ">
        <h2 className="text-3xl font-bold text-center text-green-600 mb-4">Login</h2>
        <p className="text-black text-center mb-6">Enter your credentials to Attend the Mock Test</p>

        <form onSubmit={handleLogin} className="space-y-5">
          <div className="relative">
            <FaUser className="absolute left-3 top-3 text-gray-500" />
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full pl-10 pr-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <div className="relative">
            <FaLock className="absolute left-3 top-3 text-gray-500" />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full pl-10 pr-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 rounded-lg font-semibold text-lg transition duration-300 hover:bg-blue-600 focus:ring-2 focus:ring-blue-300"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
