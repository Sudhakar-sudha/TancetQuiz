

import { useState, useEffect } from "react";

const UserResult = () => {
  const [username, setUsername] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = () => {
    fetch("https://backendsampleclg.onrender.com/api/students")
      .then((res) => res.json())
      .then((data) => setStudents(data))
      .catch((error) => console.error("Error fetching students:", error));
  };

  const deleteStudent = (id) => {
    if (!window.confirm("Are you sure you want to delete this result?")) return;

    fetch(`https://backendsampleclg.onrender.com/api/students/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        alert("Student result deleted successfully!");
        fetchStudents();
      })
      .catch((error) => console.error("Error deleting student:", error));
  };

  const fetchUserResult = async () => {
    if (!username) {
      setError("Please enter a username");
      return;
    }

    try {
      const response = await fetch(`https://backendsampleclg.onrender.com/api/evaluate/${username}`);
      const data = await response.json();

      if (response.ok) {
        setResult(data);
        setError("");
      } else {
        setError(data.error);
        setResult(null);
      }
    } catch (error) {
      console.error("Error fetching result:", error);
      setError("Failed to fetch user result.");
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-center mb-4">📋 Student Results</h1>
      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Enter username"
          className="border p-2 rounded mr-2"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button
          className="px-4 py-2 cursor-pointer bg-green-500 text-white rounded-lg"
          onClick={fetchUserResult}
        >
          Get Result
        </button>
      </div>

      {error && <p className="text-red-500 text-center mt-4">{error}</p>}

      {result && (
        <div className="mt-6 p-4 border rounded bg-white shadow-md">
          <h2 className="text-xl font-bold">User: {result.username}</h2>
          <p>Total Questions: {result.totalQuestions}</p>
          <p>Correct Answers: {result.correctAnswers}</p>
          <p>Wrong Answers: {result.wrongAnswers}</p>
          <p>Unanswered Questions: {result.unanswered}</p>
          <p className="font-bold text-lg">Score: {result.score}</p>
        </div>
      )}

      <div className="overflow-x-auto mt-6">
        <table className="min-w-full bg-white border border-gray-200 shadow-md">
          <thead>
            <tr className="bg-blue-500 text-white">
              <th className="py-2 px-4 border">Username</th>
              <th className="py-2 px-4 border">Total Score</th>
              <th className="py-2 px-4 border">Total Questions</th>
              <th className="py-2 px-4 border">Correct Answers</th>
              <th className="py-2 px-4 border">Wrong Answers</th>
              <th className="py-2 px-4 border">Unanswered</th>
              <th className="py-2 px-4 border">Submitted At</th>
              <th className="py-2 px-4 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.length > 0 ? (
              students.map((student) => (
                <tr key={student._id} className="text-center border-b hover:bg-gray-100">
                  <td className="py-2 px-4 border">{student.username}</td>
                  <td className="py-2 px-4 border">{student.totalScore}</td>
                  <td className="py-2 px-4 border">{student.totalQuestions}</td>
                  <td className="py-2 px-4 border">{student.correctAnswers}</td>
                  <td className="py-2 px-4 border">{student.wrongAnswers}</td>
                  <td className="py-2 px-4 border">{student.unanswered}</td>
                  <td className="py-2 px-4 border">
                    {new Date(student.submittedAt).toLocaleString()}
                  </td>
                  <td className="py-2 px-4 border">
                    <button
                      onClick={() => deleteStudent(student._id)}
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700"
                    >
                      🗑️ Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="text-center py-4 text-gray-500">
                  No students found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserResult;