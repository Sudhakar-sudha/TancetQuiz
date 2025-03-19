// import { useState, useEffect } from "react";

// export default function UserResponses() {
//   const [responses, setResponses] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetch("http://localhost:3000/api/quiz-submissions") // Use correct backend URL
//       .then((res) => {
//         if (!res.ok) {
//           throw new Error(`Failed to fetch responses: ${res.status}`);
//         }
//         return res.json();
//       })
//       .then((data) => setResponses(data.data))
//       .catch((err) => setError(err.message))
//       .finally(() => setLoading(false));
//   }, []);
  

//   return (
//     <div className="p-6 bg-gray-100 min-h-screen">
//       <h1 className="text-2xl font-bold text-center mb-4">📋 User Responses</h1>

//       {loading && <p className="text-center text-blue-500">Loading...</p>}
//       {error && <p className="text-center text-red-500">{error}</p>}

//       {!loading && !error && (
//         <div className="overflow-x-auto">
//           <table className="min-w-full bg-white border border-gray-200 shadow-md">
//             <thead>
//               <tr className="bg-blue-500 text-white">
//                 <th className="py-2 px-4 border">#</th>
//                 <th className="py-2 px-4 border">Username</th>
//                 <th className="py-2 px-4 border">Question ID</th>
//                 <th className="py-2 px-4 border">Selected Option</th>
//                 <th className="py-2 px-4 border">Submitted At</th>
//               </tr>
//             </thead>
//             <tbody>
//               {responses.length > 0 ? (
//                 responses.map((response, index) => (
//                   <tr key={response._id} className="text-center border-b hover:bg-gray-100">
//                     <td className="py-2 px-4 border">{index + 1}</td>
//                     <td className="py-2 px-4 border">{response.username}</td>
//                     <td className="py-2 px-4 border">{response.questionId}</td>
//                     <td className="py-2 px-4 border">{response.selectedOption}</td>
//                     <td className="py-2 px-4 border">
//                       {new Date(response.submittedAt).toLocaleString()}
//                     </td>
//                   </tr>
//                 ))
//               ) : (
//                 <tr>
//                   <td colSpan="5" className="text-center py-4 text-gray-500">
//                     No user responses found.
//                   </td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   );
// }



import { useState, useEffect } from "react";

export default function UserResponse() {
  const [responses, setResponses] = useState([]);
  const [selectedUser, setSelectedUser] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch all user responses
  useEffect(() => {
    fetch("http://localhost:3000/api/quiz-submissions") // Use your correct backend URL
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Failed to fetch responses: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setResponses(data.data);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  // Get unique usernames for dropdown
  const uniqueUsers = [...new Set(responses.map((user) => user.username))];

  // Delete all responses for a selected username
  const deleteUserResponses = async () => {
    if (!selectedUser) {
      alert("Please select a user first!");
      return;
    }

    if (!window.confirm(`Are you sure you want to delete all responses from ${selectedUser}?`)) return;

    try {
      const res = await fetch(`http://localhost:3000/api/quiz-submissions/delete/${selectedUser}`, {
        method: "DELETE",
      });

      if (!res.ok) {
        throw new Error("Failed to delete responses");
      }

      // Update state after deletion
      setResponses(responses.filter((user) => user.username !== selectedUser));
      setSelectedUser(""); // Reset selection
      alert(`All responses from ${selectedUser} have been deleted!`);
    } catch (error) {
      console.error("Error deleting responses:", error);
      alert("Error deleting responses!");
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-center mb-4">📋 User Responses</h1>

      {/* Select User Dropdown */}
      <div className="flex justify-center mb-6">
        <select
          className="border p-2 rounded mr-2"
          value={selectedUser}
          onChange={(e) => setSelectedUser(e.target.value)}
        >
          <option value="">Select a User</option>
          {uniqueUsers.map((user, index) => (
            <option key={index} value={user}>
              {user}
            </option>
          ))}
        </select>

        <button
          onClick={deleteUserResponses}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
        >
          🗑️ Delete All Responses
        </button>
      </div>

      {loading && <p className="text-center">Loading...</p>}
      {error && <p className="text-red-500 text-center mt-4">{error}</p>}

      {/* User Responses Table */}
      <div className="overflow-x-auto mt-6">
        <table className="min-w-full bg-white border border-gray-200 shadow-md">
          <thead>
            <tr className="bg-blue-500 text-white">
              <th className="py-2 px-4 border">#</th>
              <th className="py-2 px-4 border">Username</th>
              <th className="py-2 px-4 border">Question ID</th>
              <th className="py-2 px-4 border">Selected Option</th>
            </tr>
          </thead>
          <tbody>
            {responses.length > 0 ? (
              responses.map((user, index) => (
                <tr key={user._id} className="text-center border-b hover:bg-gray-100">
                  <td className="py-2 px-4 border">{index + 1}</td>
                  <td className="py-2 px-4 border">{user.username}</td>
                  <td className="py-2 px-4 border">{user.questionId}</td>
                  <td className="py-2 px-4 border">{user.selectedOption}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center py-4 text-gray-500">
                  No responses found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
