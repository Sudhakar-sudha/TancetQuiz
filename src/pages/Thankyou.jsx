

// import { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import confetti from "canvas-confetti";
// import Logout from "./Logout";
// import Swal from "sweetalert2";

// const showPopup = () => {
//   Swal.fire({
//     title: "Thank you for your feedback!",
//     text: "Your response has been recorded.",
//     icon: "success",
//     confirmButtonText: "OK",
//     customClass: {
//       popup: "rounded-lg shadow-lg",
//       title: "text-lg font-bold",
//       confirmButton: "bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded",
//     },
//   });
// };

// const ThankYou = () => {
//   const [username, setUsername] = useState("");
//   const [feedback, setFeedback] = useState("");
//   const [loading, setLoading] = useState(false); // Loading state

//   useEffect(() => {
//     const storedUsername = localStorage.getItem("username");
//     if (storedUsername) setUsername(storedUsername);

//     // Confetti animation
//     confetti({ particleCount: 200, spread: 80, origin: { y: 0.6 } });
//   }, []);

//   const handleSubmit = async () => {
//     if (!feedback.trim()) {
//       Swal.fire("Oops!", "Please enter your feedback.", "warning");
//       return;
//     }
//     if (!username) {
//       Swal.fire("Error!", "Username not found. Please log in again.", "error");
//       return;
//     }

//     setLoading(true); // Start loading

//     try {
//       const response = await fetch("https://backendsampleclg.onrender.com/api/feedback", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ username, feedback }),
//       });

//       if (response.ok) {
//         showPopup();
//         setFeedback(""); // Clear input after success
//       } else {
//         Swal.fire("Error!", "Failed to submit feedback.", "error");
//       }
//     } catch (error) {
//       Swal.fire("Error!", "Something went wrong.", "error");
//     } finally {
//       setLoading(false); // Stop loading
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-green-500 to-green-300 text-white px-4">
//       {/* Animated Title */}
//       <motion.h1
//         className="text-5xl font-extrabold bg-clip-text text-white text-center"
//         initial={{ opacity: 0, scale: 0.8 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 2, ease: "easeOut" }}
//       >
//         🎉 Thank You! 🎉
//       </motion.h1>

//       {/* Subtitle */}
//       <motion.p
//         className="text-2xl mt-4 text-center"
//         initial={{ opacity: 0, y: 10 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 1, duration: 1 }}
//       >
//         All the best for your{" "}
//         <span className="font-semibold text-blue-600 text-3xl">TANCET exam!</span>
//       </motion.p>
//     {/* Subtitle */}
//     <motion.p
//         className="text-2xl mt-4 text-center"
//         initial={{ opacity: 0, y: 10 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 1, duration: 1 }}
//       >
//         All the best for your{" "}
//         <span className="font-semibold text-blue-600 text-3xl">The winner’s result will be displayed on the homepage at 6 PM, along with their name.</span>
//       </motion.p>
//       {/* Feedback Form */}
//       <motion.div
//         className="mt-6 bg-white p-6 rounded-lg shadow-xl w-full max-w-md"
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 1.5, duration: 1 }}
//       >
//         <h2 className="text-lg font-bold text-gray-800 text-center">
//           Feedback for attending this TANCET quiz: Was it good or bad? Please share your suggestions to improve this website.
//         </h2>

//         <textarea
//           className="w-full p-3 border rounded mt-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-400"
//           placeholder="Enter your feedback..."
//           value={feedback}
//           onChange={(e) => setFeedback(e.target.value)}
//           rows={4}
//         ></textarea>

//         <button
//           className={`w-full mt-4 py-2 rounded text-white font-semibold transition ${
//             loading
//               ? "bg-gray-400 cursor-not-allowed"
//               : "bg-blue-600 hover:bg-blue-800 cursor-pointer"
//           }`}
//           onClick={handleSubmit}
//           disabled={loading}
//         >
//           {loading ? "Submitting..." : "Submit Feedback"}
//         </button>
//       </motion.div>

//       {/* Logout Button */}
//       <motion.div
//         className="mt-6"
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 2, duration: 1 }}
//       >
//         <Logout />
//       </motion.div>
//     </div>
//   );
// };

// export default ThankYou;

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import Logout from "./Logout";
import Swal from "sweetalert2";
import Footer from "./Footer";

const showPopup = () => {
  Swal.fire({
    title: "Thank you for your feedback!",
    text: "Your response has been recorded.",
    icon: "success",
    confirmButtonText: "OK",
    customClass: {
      popup: "rounded-lg shadow-lg",
      title: "text-lg font-bold",
      confirmButton: "bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded",
    },
  });
};

const ThankYou = () => {
  const [username, setUsername] = useState("");
  const [feedback, setFeedback] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) setUsername(storedUsername);

    setTimeout(() => {
      confetti({ particleCount: 100, spread: 90, origin: { y: 0.6 } });
    }, 500);
  }, []);

  const handleSubmit = async () => {
    if (!feedback.trim()) {
      Swal.fire("Oops!", "Please enter your feedback.", "warning");
      return;
    }
    if (!username) {
      Swal.fire("Error!", "Username not found. Please log in again.", "error");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("https://backendsampleclg.onrender.com/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, feedback }),
      });

      if (response.ok) {
        showPopup();
        setFeedback("");
      } else {
        Swal.fire("Error!", "Failed to submit feedback.", "error");
      }
    } catch (error) {
      Swal.fire("Error!", "Something went wrong.", "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-6">
      <motion.h1 className="text-5xl font-extrabold text-center" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.5 }}>
        🎉 Thank You! 🎉
      </motion.h1>

      <motion.p className="text-2xl mt-4 text-center" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 1 }}>
        Best wishes for your <span className="font-bold text-yellow-300">TANCET exam!</span>
      </motion.p>

      <motion.p className="text-lg mt-4 bg-white text-black px-6 py-3 rounded-lg shadow-md" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1, duration: 1 }}>
        🏆 Winner's results will be displayed on the homepage at <span className="font-bold text-blue-600">6 PM</span>.
      </motion.p>

      <motion.p className="text-lg mt-4 bg-white text-black px-6 py-3 rounded-lg shadow-md" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2, duration: 1 }}>
        If you know your score, logout and login again with your details to view your score.
      </motion.p>

      <motion.div className="mt-6 bg-white p-6 rounded-lg shadow-lg w-full max-w-lg" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.5, duration: 1 }}>
        <h2 className="text-lg font-bold text-gray-800 text-center mb-3">📝 Feedback for the TANCET Quiz</h2>
        <p className="text-sm text-gray-600 text-center mb-4">Share your suggestions to help improve this website.</p>

        <textarea className="w-full p-3 border rounded-lg mt-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-400" placeholder="Enter your feedback..." value={feedback} onChange={(e) => setFeedback(e.target.value)} rows={4}></textarea>

        <button className={`w-full mt-4 py-2 rounded text-white font-semibold transition ${loading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-800"}`} onClick={handleSubmit} disabled={loading}>
          {loading ? "Submitting..." : "Submit Feedback"}
        </button>
      </motion.div>

      <motion.div className="mt-6" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2, duration: 1 }}>
        <Logout />
      </motion.div>
      <Footer/>
    </div>
  );
};

export default ThankYou;