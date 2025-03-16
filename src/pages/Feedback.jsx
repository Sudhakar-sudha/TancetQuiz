import { useEffect, useState } from "react";

const Feedback = () => {
  const [feedbackList, setFeedbackList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    // Fetch feedback from the backend
    const fetchFeedback = async () => {
      try {
        const response = await fetch("https://backendsampleclg.onrender.com/api/feedback");
        const data = await response.json();

        if (response.ok) {
          setFeedbackList(data);
        } else {
          setError(data.error || "Failed to fetch feedback");
        }
      } catch (err) {
        setError("Error fetching feedback");
      } finally {
        setLoading(false);
      }
    };

    fetchFeedback();
  }, []);

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <h2 className="text-2xl font-bold mb-4 text-center text-blue-600">
        User Feedbacks
      </h2>

      {loading ? (
        <p className="text-center text-gray-500">Loading feedback...</p>
      ) : error ? (
        <p className="text-center text-red-500">{error}</p>
      ) : feedbackList.length === 0 ? (
        <p className="text-center text-gray-500">No feedback available.</p>
      ) : (
        <ul className="space-y-4">
          {feedbackList.map((item, index) => (
            <li
              key={index}
              className="p-4 border border-gray-300 rounded-lg bg-gray-100"
            >
              <p className="font-semibold text-green-700">{item.username}</p>
              <p className="text-gray-800 mt-1">{item.feedback}</p>
              <p className="text-xs text-gray-500 mt-1">
                {new Date(item.createdAt).toLocaleString()}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Feedback;
