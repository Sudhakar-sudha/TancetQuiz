import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function WaitingPage() {
  const navigate = useNavigate();
  const targetTime = new Date("2025-03-17T14:00:00").getTime(); // March 17, 2 PM

  const [timeLeft, setTimeLeft] = useState(targetTime - Date.now());

  useEffect(() => {
    const interval = setInterval(() => {
      const remaining = targetTime - Date.now();
      setTimeLeft(remaining);

      if (remaining <= 0) {
        clearInterval(interval);
        navigate("/login"); // Redirect to quiz when time is up
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [navigate]);

  const formatTime = (ms) => {
    const totalSeconds = Math.floor(ms / 1000);
    const days = Math.floor(totalSeconds / 86400);
    const hours = Math.floor((totalSeconds % 86400) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    return { days, hours, minutes, seconds };
  };

  const { days, hours, minutes, seconds } = formatTime(timeLeft);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-yellow-400 to-orange-500 text-white">
      <h1 className="text-4xl font-bold mb-4">TANCET Test Starts Soon!</h1>
      <p className="text-lg mb-6">The test will begin on March 17 at 2 PM.</p>

      <div className="flex space-x-4 text-center text-3xl font-semibold">
        <div className="bg-white text-gray-900 px-6 py-4 rounded-lg">
          <p>{days}</p>
          <span className="text-sm">Days</span>
        </div>
        <div className="bg-white text-gray-900 px-6 py-4 rounded-lg">
          <p>{hours}</p>
          <span className="text-sm">Hours</span>
        </div>
        <div className="bg-white text-gray-900 px-6 py-4 rounded-lg">
          <p>{minutes}</p>
          <span className="text-sm">Minutes</span>
        </div>
        <div className="bg-white text-gray-900 px-6 py-4 rounded-lg">
          <p>{seconds}</p>
          <span className="text-sm">Seconds</span>
        </div>
      </div>

      <p className="mt-6 text-lg">Please wait patiently. The login will open automatically.</p>
    </div>
  );
}
