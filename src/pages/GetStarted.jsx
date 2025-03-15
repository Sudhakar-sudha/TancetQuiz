// import { useState } from "react";
// import { motion } from "framer-motion";
// import { useNavigate } from "react-router-dom";

// export default function GetStartedPage() {
//     const navigate = useNavigate();
//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-yellow-400 to-orange-500 px-6 relative">
//       {/* Heading at the top center */}
//       <motion.div
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         className="absolute top-8 text-center"
//       >
//         <h1 className="text-4xl font-bold text-white drop-shadow-lg mt-10">
//           Welcome to <span className="text-gray-900">TANCET Quiz</span>
//         </h1>
//       </motion.div>

//       {/* Main Box */}
//       <motion.div
//         initial={{ scale: 0.8, opacity: 0 }}
//         animate={{ scale: 1, opacity: 1 }}
//         transition={{ duration: 0.5 }}
//         className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md text-center mt-24"
//       >
//         {/* Motivational Text */}
//         <p className="text-gray-700 text-lg mb-6 font-medium">
//           Believe in yourself! Every question is a step closer to success. 
//           Stay focused, stay determined!
//         </p>

//         {/* Login & Register Buttons */}
//         <div className="mt-6 flex flex-col gap-4">
//         <button
//             onClick={() => navigate("/login")}
//             className="w-full py-3 text-white font-semibold rounded-lg bg-green-500 hover:bg-green-600 transition duration-300"
//           >
//             Login
//           </button>
//           <button
//             onClick={() => navigate("/register")}
//             className="w-full py-3 text-white font-semibold rounded-lg bg-blue-500 hover:bg-blue-600 transition duration-300"
//           >
//             Register
//           </button>
//         </div>
//       </motion.div>
//     </div>
//   );
// }
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function GetStartedPage() {
  const navigate = useNavigate();
  const [userCount, setUserCount] = useState(0);
  const [submissionCount, setSubmissionCount] = useState(0);

  // Fetch total registered users
  useEffect(() => {
    fetch("https://backendsampleclg.onrender.com/user-count")
      .then((res) => res.json())
      .then((data) => setUserCount(data.totalUsers))
      .catch((error) => console.error("Error fetching user count:", error));
  }, []);

  // Fetch quiz submission count
  useEffect(() => {
    fetch("https://backendsampleclg.onrender.com/api/quiz-submissions/count")
      .then((res) => res.json())
      .then((data) => setSubmissionCount(data.totalUsersCompleted))
      .catch((error) => console.error("Error fetching submission count:", error));
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-yellow-400 to-orange-500 px-6">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-8"
      >
        <h1 className="text-4xl font-bold text-white drop-shadow-lg md:mb-20 md:-mt-10 ">
          Welcome to <span className="text-gray-900">TANCET Quiz</span>
        </h1>
      </motion.div>

      {/* Responsive Cards */}
      <div className="flex flex-col lg:flex-row lg:gap-40 items-center lg:items-start w-full  max-w-14xl">
        {/* Login & Register Box (First on Mobile, Center on Desktop) */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white shadow-2xl rounded-2xl p-8 w-full h-full max-w-sm text-center order-1 lg:order-2"
        >
          {/* Motivational Text */}
          <p className="text-gray-700 text-lg mb-6 font-medium">
            Believe in yourself! Every question is a step closer to success. 
            Stay focused, stay determined!
          </p>

          {/* Login & Register Buttons */}
          <div className="mt-6 flex flex-col gap-4">
            <button
              onClick={() => navigate("/login")}
              className="w-full py-3 text-white font-semibold rounded-lg bg-green-500 hover:bg-green-600 transition duration-300"
            >
              Login
            </button>
            <button
              onClick={() => navigate("/register")}
              className="w-full py-3 text-white font-semibold rounded-lg bg-blue-500 hover:bg-blue-600 transition duration-300"
            >
              Register
            </button>
          </div>
        </motion.div>

        {/* Total Registered Users Card (Second on Mobile, Left on Desktop) */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gray-100 shadow-md rounded-lg p-6 w-full  max-w-sm text-center order-2 lg:order-1 md:mt-0 mt-10"
        >
          <h2 className="text-xl font-semibold text-gray-900">
            Total Registered Users:{" "}
            <span className="text-blue-600 font-bold">{userCount}</span>
          </h2>
        </motion.div>

        {/* Quiz Submission Count Card (Third on Mobile, Right on Desktop) */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white shadow-lg rounded-lg p-6 w-full max-w-sm text-center order-3 lg:order-3 md:mt-0 mt-10 "
        >
          <h2 className="text-xl font-bold text-gray-800">Quiz Submissions</h2>
          <p className="text-3xl font-semibold text-blue-500 mt-2">
            {submissionCount}
          </p>
          <p className="text-gray-600">Users have completed the quiz</p>
        </motion.div>
      </div>
    </div>
  );
}
