


import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import confetti from "canvas-confetti";

const Result = () => {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const username = localStorage.getItem("username");

  useEffect(() => {
    if (!username) {
      navigate("/login"); // Redirect if not logged in
      return;
    }

    const fetchResult = async () => {
      try {
        const response = await fetch(`https://backendsampleclg.onrender.com/api/evaluate/${username}`);
        const data = await response.json();

        if (response.ok) {
          setResult(data);
          setTimeout(triggerConfetti, 500); // 🎉 Trigger confetti after data loads
        } else {
          console.error("Error fetching results:", data.error);
          setError("Server error. Please try again later.");
        }
      } catch (error) {
        console.error("Error fetching result:", error);
        setError("Failed to fetch user result.");
      } finally {
        setLoading(false);
      }
    };

    fetchResult();
  }, [navigate, username]);

  // 🎉 Confetti trigger function
  const triggerConfetti = () => {
    confetti({
      particleCount: 950,
      spread: 150,
      origin: { y: 0.6 },
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <p className="text-gray-700 text-lg font-semibold">Loading results...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <p className="text-red-500 text-lg font-semibold">{error}</p>
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
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-500 to-indigo-600 p-6 text-white">
      <div className="flex flex-row items-center justify-center gap-40">
        {/* Left: Download TANCET Questions */}
        <div className="bg-white shadow-lg rounded-lg p-6 w-64 text-center">
          <h3 className="text-xl font-semibold text-black mb-3">TANCET Questions</h3>
          <a
            href="/TANCET.pdf"
            download
            className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-800 transition duration-300"
          >
            📄 Download PDF
          </a>
        </div>

        {/* Center: Quiz Result */}
        <div className="bg-white shadow-lg rounded-lg p-8 w-96 h-auto text-center animate-fadeIn text-black">
          <h2 className="text-3xl font-bold text-blue-600 mb-4">🎉 Quiz Results</h2>
          <p className="text-gray-700 text-2xl mb-6">Hello, <span className="font-semibold text-black">{username}</span>!</p>
          <div className="bg-gray-200 p-4 rounded-lg">
            <p className="text-xl font-semibold mb-2">Your Score: <span className="text-green-600">{result.score}</span></p>
            <p className="text-gray-600 mb-2">✅ Correct Answers: {result.correctAnswers}</p>
            <p className="text-gray-600 mb-2">❌ Incorrect Answers: {result.wrongAnswers}</p>
            <p className="text-gray-600 mb-2">⏳ Unanswered: {result.unanswered}</p>
          </div>
        </div>

        {/* Right: Download TANCET Questions with Answer Key */}
        <div className="bg-white shadow-lg rounded-lg p-6 w-64 text-center">
          <h3 className="text-xl font-semibold text-black mb-3">TANCET Answer Key</h3>
          <a
            href="/AnswerSheet For Tancet Mock.pdf"
            download
            className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-800 transition duration-300"
          >
            📄 Download PDF
          </a>
        </div>
      </div>
    </div>
  );
};

export default Result;