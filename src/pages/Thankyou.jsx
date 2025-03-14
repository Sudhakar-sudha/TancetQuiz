import Logout from "./Logout";

const ThankYou = () => {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <h1 className="text-3xl font-bold text-green-600">Thank You!</h1>
        <p className="text-lg mt-4">All the best for your TANCET exam!</p>
        <Logout/>
      </div>
    );
  };
  
  export default ThankYou;
  


  
// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// const Quiz = () => {
//   const [username, setUsername] = useState("");
//   const [selectedOption, setSelectedOption] = useState({});
//   const [timeLeft, setTimeLeft] = useState(120);
//   const navigate = useNavigate();

//    // Generate 100 questions dynamically
//    const questions = Array.from({ length: 100 }, (_, i) => ({
//     id: i + 1,
//     options: ["A", "B", "C", "D"],
//   }));
//   useEffect(() => {
//     // Load username and previous quiz data
//     const storedUsername = localStorage.getItem("username") || "Guest";
//     setUsername(storedUsername);

//     const storedQuizData = localStorage.getItem("quizData");
//     if (storedQuizData) {
//       const parsedData = JSON.parse(storedQuizData);
//       setSelectedOption(parsedData.selectedOption || {});
//     }

//     const completed = localStorage.getItem("quizCompleted");
//     if (completed === "true") {
//       navigate("/thank-you");
//     }

//     const startTime = localStorage.getItem("quizStartTime");
//     if (!startTime) {
//       localStorage.setItem("quizStartTime", Date.now());
//     }

//     const interval = setInterval(() => {
//       const quizStartTime = parseInt(localStorage.getItem("quizStartTime"), 10);
//       const elapsed = Math.floor((Date.now() - quizStartTime) / 1000);
//       const remaining = Math.max(120 - elapsed, 0);

//       setTimeLeft(remaining);

//       if (remaining === 0) {
//         clearInterval(interval);
//         handleAutoSubmit(); // Auto-submit on timer expiry
//       }
//     }, 1000);

//     return () => clearInterval(interval);
//   }, []);

//   const handleAutoSubmit = async () => {
//     try {
//       const storedUsername = localStorage.getItem("username") || "Guest";
//       const storedQuizData = JSON.parse(localStorage.getItem("quizData")) || { selectedOption: {} };
//       const latestSelectedOption = storedQuizData.selectedOption || {};

//       // Ensure unanswered questions are set to null
//       const allResponses = questions.reduce((acc, q) => {
//         acc[q.id] = latestSelectedOption[q.id] !== undefined ? latestSelectedOption[q.id] : null;
//         return acc;
//       }, {});

//       console.log("Auto Submitting responses:", { username: storedUsername, selectedOption: allResponses });

//       const response = await fetch("http://localhost:3000/api/submit", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ username: storedUsername, selectedOption: allResponses }),
//       });

//       const data = await response.json();
//       if (!response.ok) throw new Error(data.error || "Submission failed");

//       console.log("Quiz auto-submitted successfully");
//       localStorage.setItem("quizCompleted", "true");
//       localStorage.removeItem("quizData");
//       localStorage.removeItem("quizStartTime");
//       localStorage.removeItem("username");
//       navigate("/thank-you");

//     } catch (error) {
//       console.error("Error auto-submitting quiz:", error);
//       alert(error.message || "Submission failed");
//     }
//   };

//   const handleSubmit = async () => {
//     try {
//       const storedUsername = localStorage.getItem("username") || "Guest";
//       const storedQuizData = JSON.parse(localStorage.getItem("quizData")) || { selectedOption: {} };
//       const latestSelectedOption = storedQuizData.selectedOption || {};

//       const allResponses = questions.reduce((acc, q) => {
//         acc[q.id] = latestSelectedOption[q.id] !== undefined ? latestSelectedOption[q.id] : null;
//         return acc;
//       }, {});

//       console.log("Manually Submitting responses:", { username: storedUsername, selectedOption: allResponses });

//       const response = await fetch("http://localhost:3000/api/submit", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ username: storedUsername, selectedOption: allResponses }),
//       });

//       const data = await response.json();
//       if (!response.ok) throw new Error(data.error || "Submission failed");

//       console.log("Quiz submitted successfully");
//       localStorage.setItem("quizCompleted", "true");
//       localStorage.removeItem("quizData");
//       localStorage.removeItem("quizStartTime");
//       localStorage.removeItem("username");
//       navigate("/thank-you");

//     } catch (error) {
//       console.error("Error submitting quiz:", error);
//       alert(error.message || "Submission failed");
//     }
//   };

//   const handleOptionChange = (questionId, option) => {
//     setSelectedOption((prev) => {
//       const updatedSelection = { ...prev, [questionId]: option };
//       localStorage.setItem("quizData", JSON.stringify({ username, selectedOption: updatedSelection }));
//       return updatedSelection;
//     });
//   };

//   const formatTime = (seconds) => {
//     const m = Math.floor(seconds / 60);
//     const s = seconds % 60;
//     return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
//   };

//   return (
//     <div className="h-screen flex flex-col bg-green-100">
//       <header className="sticky top-0 left-0 right-0 bg-green-500 text-white p-4 flex justify-between items-center shadow-lg z-50">
//         <h1 className="text-xl font-bold">TANCET Model Quiz</h1>
//         <span className="text-lg font-semibold">{formatTime(timeLeft)}</span>
//         <span className="text-lg">Welcome, {username}</span>
//       </header>

//       <div className="flex flex-1 h-full">
//         <div className="w-1/2 h-full overflow-y-auto p-4 bg-white shadow-lg">
//           <iframe src="/MCA 2024.pdf" className="w-full h-full rounded-lg shadow-lg" title="Quiz PDF" />
//         </div>

//         {/* <div className="w-1/2 h-full bg-white p-6 rounded-lg shadow-lg flex flex-col justify-center">
//           <h2 className="text-xl font-semibold mb-4">Choose the correct options:</h2>
//           <div className="overflow-hidden">
//             {questions.map((q) => (
//               <div key={q.id} className="mb-4 flex items-center space-x-6">
//                 <span className="text-lg font-medium">{q.id})</span>
//                 <div className="flex space-x-4">
//                   {q.options.map((option, index) => (
//                     <label key={index} className="flex items-center space-x-2">
//                       <input
//                         type="radio"
//                         name={`question-${q.id}`}
//                         value={option}
//                         checked={selectedOption[q.id] === option}
//                         onChange={() => handleOptionChange(q.id, option)}
//                         className="form-radio text-green-500"
//                       />
//                       <span>{option}</span>
//                     </label>
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </div>

//           <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded-lg" onClick={handleSubmit}>
//             Submit Quiz
//           </button>
//         </div> */}


// <div className="w-1/2 h-full p-6 overflow-y-auto bg-white">
//   <h2 className="text-xl font-semibold mb-4">Choose the correct options:</h2>
//   <div className="grid grid-cols-2 gap-6">
//     {questions.map((q) => (
//       <div key={q.id} className="mb-4 flex items-center space-x-4">
//         <span className="text-lg font-medium">{q.id})</span>
//         <div className="flex flex-wrap space-x-4">
//           {q.options.map((option, index) => (
//             <label key={index} className="flex items-center space-x-2">
//               <input
//                 type="radio"
//                 name={`question-${q.id}`}
//                 value={option}
//                 checked={selectedOption[q.id] === option}
//                 onChange={() => setSelectedOption((prev) => ({ ...prev, [q.id]: option }))}
//               />
//               <span>{option}</span>
//             </label>
//           ))}
//         </div>
//       </div>
//     ))}
//   </div>
//   <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded-lg" onClick={handleSubmit}>
//     Submit Quiz
//   </button>
// </div>



//       </div>
//     </div>
//   );
// };

// export default Quiz;

