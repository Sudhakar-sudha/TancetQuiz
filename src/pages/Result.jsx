import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Result = () => {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const username = localStorage.getItem("username");

  useEffect(() => {
    if (!username) {
      navigate("/login"); // Redirect to login if user is not authenticated
      return;
    }

    const fetchResult = async () => {
      try {
        const response = await fetch(`https://backendsampleclg.onrender.com/api/result?username=${username}`);
        const data = await response.json();
        
        if (response.ok) {
          setResult(data);
        } else {
          alert(data.message || "Error fetching results.");
        }
      } catch (error) {
        console.error("Error fetching results:", error);
        alert("Server error. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchResult();
  }, [navigate, username]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <p className="text-gray-700 text-lg font-semibold">Loading results...</p>
      </div>
    );
  }

  if (!result) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <p className="text-red-500 text-lg font-semibold">No result found. Please try again later.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg text-center">
        <h2 className="text-3xl font-bold text-blue-600 mb-4">Quiz Results</h2>
        <p className="text-gray-700 text-lg mb-4">Hello, <span className="font-semibold text-black">{username}</span>!</p>

        <div className="bg-gray-200 p-4 rounded-lg mb-4">
          <p className="text-xl font-semibold">Your Score: <span className="text-green-600">{result.score} / {result.totalQuestions}</span></p>
          <p className="text-gray-600">Correct Answers: {result.correctAnswers}</p>
          <p className="text-gray-600">Incorrect Answers: {result.incorrectAnswers}</p>
        </div>

        <button
          onClick={() => navigate("/")}
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold transition"
        >
          Go to Dashboard
        </button>
      </div>
    </div>
  );
};

export default Result;
