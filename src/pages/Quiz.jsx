
// import { useState, useEffect } from "react";

// const Quiz = () => {
//   const [username, setUsername] = useState("");
//   const [selectedOption, setSelectedOption] = useState({});

//   // Dummy questions (Only showing numbers & options)
//   const questions = [
//     { id: 1, options: ["A", "B", "C", "D"] },
//     { id: 2, options: ["A", "B", "C", "D"] },
//     { id: 3, options: ["A", "B", "C", "D"] },
//     { id: 4, options: ["A", "B", "C", "D"] },
//     { id: 5, options: ["A", "B", "C", "D"] },
//   ];

//   useEffect(() => {
//     // Get the username from local storage
//     const storedUsername = localStorage.getItem("username") || "Guest";
//     setUsername(storedUsername);
//   }, []);

//   const handleOptionChange = (questionId, option) => {
//     setSelectedOption((prev) => ({
//       ...prev,
//       [questionId]: option,
//     }));
//   };

//   return (
//     <div className="min-h-screen bg-green-100">
//       {/* Header */}
//       <header className="bg-green-500 text-white p-4 flex justify-between items-center">
//         <h1 className="text-2xl font-bold">TANCET Model Quiz</h1>
//         <span className="text-lg">Welcome, {username}</span>
//       </header>

//       {/* Main Content */}
//       <div className="flex flex-col md:flex-row items-center justify-center p-8 gap-6">
//         {/* Left Side - Image */}
//         <div className="md:w-1/2 w-full flex justify-center">
//           <img
//             src="/1.png"
//             alt="Quiz Illustration"
//             className="rounded-lg shadow-lg"
//           />
//         </div>

//         {/* Right Side - Quiz Questions (Single Row Format) */}
//         <div className="md:w-1/2 w-full bg-white p-6 rounded-lg shadow-lg">
//           <h2 className="text-xl font-semibold mb-4">Choose the correct options:</h2>
//           {questions.map((q) => (
//             <div key={q.id} className="mb-4 flex items-center space-x-6">
//               {/* Question Number */}
//               <span className="text-lg font-medium">{q.id})</span>

//               {/* Options in a Single Row */}
//               <div className="flex space-x-4">
//                 {q.options.map((option, index) => (
//                   <label key={index} className="flex items-center space-x-2">
//                     <input
//                       type="radio"
//                       name={`question-${q.id}`}
//                       value={option}
//                       checked={selectedOption[q.id] === option}
//                       onChange={() => handleOptionChange(q.id, option)}
//                       className="form-radio text-green-500"
//                     />
//                     <span>{option}</span>
//                   </label>
//                 ))}
//               </div>
//             </div>
//           ))}
//           <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded-lg">Submit</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Quiz;



// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// const Quiz = () => {
//   const [username, setUsername] = useState("");
//   const [selectedOption, setSelectedOption] = useState({});
//   const [timeLeft, setTimeLeft] = useState(2 * 60 * 60); // 2 hours in seconds
//   const [quizCompleted, setQuizCompleted] = useState(false);
//   const [submitted, setSubmitted] = useState(false);
//   const navigate = useNavigate();
//   // Dummy questions (Only numbers & options)
//   const questions = [
//     { id: 1, options: ["A", "B", "C", "D"] },
//     { id: 2, options: ["A", "B", "C", "D"] },
//     { id: 3, options: ["A", "B", "C", "D"] },
//     { id: 4, options: ["A", "B", "C", "D"] },
//     { id: 5, options: ["A", "B", "C", "D"] },
//   ];

//   useEffect(() => {
//     // Get the username from local storage
//     const storedUsername = localStorage.getItem("username") || "Guest";
//     setUsername(storedUsername);

//     // Timer Countdown
//     const timer = setInterval(() => {
//       setTimeLeft((prev) => {
//         if (prev <= 1) {
//           clearInterval(timer);
//           handleSubmit(); // Auto-submit when timer reaches 0
//           return 0;
//         }
//         return prev - 1;
//       });
//     }, 1000);

//     return () => clearInterval(timer);
//   }, []);

//   // Convert seconds to HH:MM:SS format
//   const formatTime = (seconds) => {
//     const h = Math.floor(seconds / 3600);
//     const m = Math.floor((seconds % 3600) / 60);
//     const s = seconds % 60;
//     return `${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
//   };
//   const handleOptionChange = (questionId, option) => {
//     setSelectedOption((prev) => {
//       const updatedSelection = {
//         ...prev,
//         [questionId]: option,
//       };

//       // Check if all questions have been answered
//       if (Object.keys(updatedSelection).length === questions.length) {
//         setQuizCompleted(true);
//       }

//       return updatedSelection;
//     });
//   };

//   const handleSubmit = async () => {
//     if (Object.keys(selectedOption).length < questions.length) {
//       alert("Please answer all questions before submitting.");
//       return;
//     }

//     setQuizCompleted(true);
//     try {
//       const response = await fetch("http://localhost:3000/api/submit", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ username, responses: selectedOption }),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         setSubmitted(true);
//         navigate("/thank-you");
//       } else {
//         alert(data.error);
//       }
//     } catch (error) {
//       console.error("Error submitting quiz:", error);
//     }
//   };


//   return (
//     <div className="h-screen flex flex-col bg-green-100">
//       {/* Sticky Navbar */}
//       <header className="sticky top-0 left-0 right-0 bg-green-500 text-white p-4 flex justify-between items-center shadow-lg z-50">
//         <h1 className="text-xl font-bold">TANCET Model Quiz</h1>
//         <span className="text-lg font-semibold">{formatTime(timeLeft)}</span>
//         <span className="text-lg">Welcome, {username}</span>
//       </header>

//       {/* Main Content - Full Height Split */}
//       <div className="flex flex-1 h-full">
//         {/* Left Side - Scrollable Image Section */}
//         <div className="w-1/2 h-full overflow-y-auto p-4 bg-white shadow-lg">
//           <img src="/1.png" alt="Quiz Illustration" className="w-full h-auto rounded-lg shadow-lg" />
//         </div>

//         {/* Right Side - Fixed Quiz Questions */}
//         <div className="w-1/2 h-full bg-white p-6 rounded-lg shadow-lg flex flex-col justify-center">
//           <h2 className="text-xl font-semibold mb-4">Choose the correct options:</h2>
//           <div className="overflow-hidden">
//             {questions.map((q) => (
//               <div key={q.id} className="mb-4 flex items-center space-x-6">
//                 {/* Question Number */}
//                 <span className="text-lg font-medium">{q.id})</span>

//                 {/* Options in a Single Row */}
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

//           {/* Submit Button (Only shows when all questions are answered) */}
//           {quizCompleted && (
//             <button
//               className="mt-4 px-4 py-2 bg-green-500 text-white rounded-lg"
//               onClick={handleSubmit}
//             >
//               Submit Quiz
//             </button>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Quiz;



// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// const Quiz = () => {
//   const [username, setUsername] = useState("");
//   const [selectedOption, setSelectedOption] = useState({});
//   const [timeLeft, setTimeLeft] = useState( 120); // 2 hours in seconds
//   const [quizCompleted, setQuizCompleted] = useState(false);
//   const navigate = useNavigate();

//   // Dummy questions (Only numbers & options)
//   const questions = [
//     { id: 1, options: ["A", "B", "C", "D"] },
//     { id: 2, options: ["A", "B", "C", "D"] },
//     { id: 3, options: ["A", "B", "C", "D"] },
//     { id: 4, options: ["A", "B", "C", "D"] },
//     { id: 5, options: ["A", "B", "C", "D"] },
//   ];

//   useEffect(() => {
//     const storedUsername = localStorage.getItem("username") || "Guest";
//     setUsername(storedUsername);

//     // Check if the timer has started before
//     const startTime = localStorage.getItem("quizStartTime");
//     if (!startTime) {
//       // If not started, store the start time in localStorage
//       const newStartTime = Date.now();
//       localStorage.setItem("quizStartTime", newStartTime);
//     }

//     // Calculate remaining time based on stored start time
//     const interval = setInterval(() => {
//       const startTime = parseInt(localStorage.getItem("quizStartTime"), 10);
//       const elapsed = Math.floor((Date.now() - startTime) / 1000);
//       const remaining = Math.max(120 - elapsed, 0); // Ensure it doesn't go negative

//       setTimeLeft(remaining);

//       if (remaining === 0) {
//         clearInterval(interval);
//         handleSubmit();
//       }
//     }, 1000);

//     return () => clearInterval(interval);
//   }, []);

//   // Convert seconds to HH:MM:SS format
//   const formatTime = (seconds) => {
//     const h = Math.floor(seconds / 3600);
//     const m = Math.floor((seconds % 3600) / 60);
//     const s = seconds % 60;
//     return `${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
//   };

//   const handleOptionChange = (questionId, option) => {
//     setSelectedOption((prev) => {
//       const updatedSelection = {
//         ...prev,
//         [questionId]: option,
//       };

//       if (Object.keys(updatedSelection).length === questions.length) {
//         setQuizCompleted(true);
//       }

//       return updatedSelection;
//     });
//   };

//   const handleSubmit = async () => {
//     if (Object.keys(selectedOption).length < questions.length) {
//       alert("Please answer all questions before submitting.");
//       return;
//     }
// console.log(selectedOption);
//     // const allResponses = {};
//     // questions.forEach((q) => {
//     //   allResponses[q.id] = selectedOption[q.id] || null; // Default to null if not answered
//     // });

    

//     try {
//       const response = await fetch("http://localhost:3000/api/submit", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ username, responses: selectedOption }),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         navigate("/thank-you");
//       } else {
//         alert(data.error);
//       }
//     } catch (error) {
//       console.error("Error submitting quiz:", error);
//     }
//   };

//   return (
//     <div className="h-screen flex flex-col bg-green-100">
//       {/* Sticky Navbar */}
//       <header className="sticky top-0 left-0 right-0 bg-green-500 text-white p-4 flex justify-between items-center shadow-lg z-50">
//         <h1 className="text-xl font-bold">TANCET Model Quiz</h1>
//         <span className="text-lg font-semibold">{formatTime(timeLeft)}</span>
//         <span className="text-lg">Welcome, {username}</span>
//       </header>

//       {/* Main Content - Full Height Split */}
//       <div className="flex flex-1 h-full">
//         {/* Left Side - Scrollable Image Section */}
//         <div className="w-1/2 h-full overflow-y-auto p-4 bg-white shadow-lg">
//           <img src="/1.png" alt="Quiz Illustration" className="w-full h-auto rounded-lg shadow-lg" />
//         </div>

//         {/* Right Side - Fixed Quiz Questions */}
//         <div className="w-1/2 h-full bg-white p-6 rounded-lg shadow-lg flex flex-col justify-center">
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

//           {quizCompleted && (
//             <button
//               className="mt-4 px-4 py-2 bg-green-500 text-white rounded-lg"
//               onClick={handleSubmit}
//             >
//               Submit Quiz
//             </button>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Quiz;



// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// const Quiz = () => {
//   const [username, setUsername] = useState("");
//   const [selectedOption, setSelectedOption] = useState({});
//   const [timeLeft, setTimeLeft] = useState(120); // 2 minutes in seconds
//   const [quizCompleted, setQuizCompleted] = useState(false);
//   const navigate = useNavigate();
// console.log(username);
//   // Dummy questions (Only numbers & options)
//   const questions = [
//     { id: 1, options: ["A", "B", "C", "D"] },
//     { id: 2, options: ["A", "B", "C", "D"] },
//     { id: 3, options: ["A", "B", "C", "D"] },
//     { id: 4, options: ["A", "B", "C", "D"] },
//     { id: 5, options: ["A", "B", "C", "D"] },
//   ];

//   const handleSubmit = async () => {
//     try {
//       // Ensure all questions are recorded (store null for unanswered ones)
//       const allResponses = questions.reduce((acc, q) => {
//         acc[q.id] = selectedOption[q.id] || null;
//         return acc;
//       }, {});
  
//       console.log("Submitting responses:", allResponses);
  
//       const response = await fetch("http://localhost:3000/api/submit", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ username, responses: allResponses }),
//       });
  
//       const data = await response.json();
  
//       if (!response.ok) {
//         throw new Error(data.error || "Failed to submit quiz");
//       }
  
//       console.log("Quiz submitted successfully");
  
//       // Remove quiz-related data from local storage
//       localStorage.removeItem("quizData");
//       localStorage.removeItem("quizStartTime");
  
//       // Navigate to the thank-you page after submission
//       navigate("/thank-you");
//     } catch (error) {
//       console.error("Error submitting quiz:", error);
//       alert(error.message || "Something went wrong! Please try again.");
//     }
//   };

//   useEffect(() => {
//     const storedUsername = localStorage.getItem("username") || "Guest";
//     setUsername(storedUsername);

//     const storedQuizData = localStorage.getItem("quizData");
//     if (!storedQuizData) {
//       // If no quiz data exists, store it to prevent reloading issues
//       localStorage.setItem("quizData", JSON.stringify({ username, selectedOption }));
//     }

//     // Start the quiz timer
//     const startTime = localStorage.getItem("quizStartTime");
//     if (!startTime) {
//       localStorage.setItem("quizStartTime", Date.now());
//     }

//     const interval = setInterval(() => {
//       const quizStartTime = parseInt(localStorage.getItem("quizStartTime"), 10);
//       const elapsed = Math.floor((Date.now() - quizStartTime) / 1000);
//       const remaining = Math.max(120 - elapsed, 0); // Ensure non-negative time

//       setTimeLeft(remaining);

//       if (remaining === 0) {
//         clearInterval(interval);
//         handleSubmit(); // Auto-submit when time is up
//       }
//     }, 1000);

//     return () => clearInterval(interval);
//   }, []);

//   // Convert seconds to MM:SS format
//   const formatTime = (seconds) => {
//     const m = Math.floor(seconds / 60);
//     const s = seconds % 60;
//     return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
//   };

//   const handleOptionChange = (questionId, option) => {
//     setSelectedOption((prev) => {
//       const updatedSelection = {
//         ...prev,
//         [questionId]: option,
//       };

//       localStorage.setItem("quizData", JSON.stringify({ username, selectedOption: updatedSelection }));

//       if (Object.keys(updatedSelection).length === questions.length) {
//         setQuizCompleted(true);
//       }

//       return updatedSelection;
//     });
//   };

  
//   return (
//     <div className="h-screen flex flex-col bg-green-100">
//       {/* Sticky Navbar */}
//       <header className="sticky top-0 left-0 right-0 bg-green-500 text-white p-4 flex justify-between items-center shadow-lg z-50">
//         <h1 className="text-xl font-bold">TANCET Model Quiz</h1>
//         <span className="text-lg font-semibold">{formatTime(timeLeft)}</span>
//         <span className="text-lg">Welcome, {username}</span>
//       </header>

//       {/* Main Content - Full Height Split */}
//       <div className="flex flex-1 h-full">
//         {/* Left Side - Scrollable Image Section */}
//         <div className="w-1/2 h-full overflow-y-auto p-4 bg-white shadow-lg">
//           <img src="/1.png" alt="Quiz Illustration" className="w-full h-auto rounded-lg shadow-lg" />
//         </div>

//         {/* Right Side - Fixed Quiz Questions */}
//         <div className="w-1/2 h-full bg-white p-6 rounded-lg shadow-lg flex flex-col justify-center">
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

//           <button
//             className="mt-4 px-4 py-2 bg-green-500 text-white rounded-lg"
//             onClick={handleSubmit}
//           >
//             Submit Quiz
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Quiz;


// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// const Quiz = () => {
//   const [username, setUsername] = useState("");
//   const [selectedOption, setSelectedOption] = useState({});
//   const [timeLeft, setTimeLeft] = useState(120);
//   const navigate = useNavigate();
//   const [quizCompleted, setQuizCompleted] = useState(false);

//   const questions = [
//     { id: 1, options: ["A", "B", "C", "D"] },
//     { id: 2, options: ["A", "B", "C", "D"] },
//     { id: 3, options: ["A", "B", "C", "D"] },
//     { id: 4, options: ["A", "B", "C", "D"] },
//     { id: 5, options: ["A", "B", "C", "D"] },
//   ];



//   useEffect(() => {
//     const storedUsername = localStorage.getItem("username") || "Guest";
//     setUsername(storedUsername);
  
//     const storedQuizData = localStorage.getItem("quizData");
//     if (storedQuizData) {
//       const parsedData = JSON.parse(storedQuizData);
//       setSelectedOption(parsedData.selectedOption || {});
//     } else {
//       localStorage.setItem("quizData", JSON.stringify({ username, selectedOption: {} }));
//     }
  
//     // Start the quiz timer
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
//         handleSubmit();
//       }
//     }, 1000);
  
//     return () => clearInterval(interval);
//   }, []);

//   const handleSubmit = async () => {
//     try {
//       const storedUsername = localStorage.getItem("username") || "Guest";
  
//       // Ensure correct format for selected options
//       const allResponses = questions.reduce((acc, q) => {
//         acc[q.id] = selectedOption[q.id] || null;
//         return acc;
//       }, {});
  
//       console.log("Submitting responses:", { username: storedUsername, selectedOption: allResponses });
  
//       const response = await fetch("http://localhost:3000/api/submit", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ username: storedUsername, selectedOption: allResponses }), // Fix variable name
//       });
  
//       const data = await response.json();
//       if (!response.ok) throw new Error(data.error || "Submission failed");
  
//       console.log("Quiz submitted successfully");
//       localStorage.removeItem("quizData");
//       localStorage.removeItem("quizStartTime");
//       navigate("/thank-you");
  
//     } catch (error) {
//       console.error("Error submitting quiz:", error);
//       alert(error.message || "Submission failed");
//     }
//   };
  
  


//   const handleOptionChange = (questionId, option) => {
//     setSelectedOption((prev) => {
//       const updatedSelection = { ...prev, [questionId]: option };
  
//       // Store the updated selection along with username in local storage
//       localStorage.setItem("quizData", JSON.stringify({ username, selectedOption: updatedSelection }));
  
//       if (Object.keys(updatedSelection).length === questions.length) {
//         setQuizCompleted(true);
//       }
  
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
//           <img src="/1.png" alt="Quiz Illustration" className="w-full h-auto rounded-lg shadow-lg" />
//         </div>

//         <div className="w-1/2 h-full bg-white p-6 rounded-lg shadow-lg flex flex-col justify-center">
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
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Quiz;


// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// const Quiz = () => {
//   const [username, setUsername] = useState("");
//   const [selectedOption, setSelectedOption] = useState({});
//   const [timeLeft, setTimeLeft] = useState(120);
//   const [quizCompleted, setQuizCompleted] = useState(false);
//   const navigate = useNavigate();

//   const questions = [
//     { id: 1, options: ["A", "B", "C", "D"] },
//     { id: 2, options: ["A", "B", "C", "D"] },
//     { id: 3, options: ["A", "B", "C", "D"] },
//     { id: 4, options: ["A", "B", "C", "D"] },
//     { id: 5, options: ["A", "B", "C", "D"] },
//   ];

//   useEffect(() => {
//     const storedUsername = localStorage.getItem("username") || "Guest";
//     setUsername(storedUsername);

//     const storedQuizData = localStorage.getItem("quizData");
//     if (storedQuizData) {
//       const parsedData = JSON.parse(storedQuizData);
//       setSelectedOption(parsedData.selectedOption || {});
//     }

//     const completed = localStorage.getItem("quizCompleted");
//     if (completed === "true") {
//       navigate("/thank-you"); // Redirect if quiz is already completed
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
//         handleSubmit();
//       }
//     }, 1000);

//     return () => clearInterval(interval);
//   }, []);

//   const handleSubmit = async () => {
//     try {
//       const storedUsername = localStorage.getItem("username") || "Guest";
//       const allResponses = questions.reduce((acc, q) => {
//         acc[q.id] = selectedOption[q.id] || null;
//         return acc;
//       }, {});

//       console.log("Submitting responses:", { username: storedUsername, selectedOption: allResponses });

//       const response = await fetch("http://localhost:3000/api/submit", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ username: storedUsername, selectedOption: allResponses }),
//       });

//       const data = await response.json();
//       if (!response.ok) throw new Error(data.error || "Submission failed");

//       console.log("Quiz submitted successfully");
//       localStorage.setItem("quizCompleted", "true"); // Mark quiz as completed
//       localStorage.removeItem("quizData");
//       localStorage.removeItem("quizStartTime");
//       localStorage.removeItem("username");
//       navigate("/thank-you"); // Redirect to results page

//     } catch (error) {
//       console.error("Error submitting quiz:", error);
//       alert(error.message || "Submission failed");
//     }
//   };

//   const handleOptionChange = (questionId, option) => {
//     setSelectedOption((prev) => {
//       const updatedSelection = { ...prev, [questionId]: option };

//       localStorage.setItem("quizData", JSON.stringify({ username, selectedOption: updatedSelection }));

//       if (Object.keys(updatedSelection).length === questions.length) {
//         setQuizCompleted(true);
//       }

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
//           <img src="/1.png" alt="Quiz Illustration" className="w-full h-auto rounded-lg shadow-lg" />
//         </div>

//         <div className="w-1/2 h-full bg-white p-6 rounded-lg shadow-lg flex flex-col justify-center">
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
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Quiz;



// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// const Quiz = () => {
//   const [username, setUsername] = useState("");
//   const [selectedOption, setSelectedOption] = useState({});
//   const [timeLeft, setTimeLeft] = useState(120);
//   const navigate = useNavigate();

//   const questions = [
//     { id: 1, options: ["A", "B", "C", "D"] },
//     { id: 2, options: ["A", "B", "C", "D"] },
//     { id: 3, options: ["A", "B", "C", "D"] },
//     { id: 4, options: ["A", "B", "C", "D"] },
//     { id: 5, options: ["A", "B", "C", "D"] },
//   ];

//   useEffect(() => {
//     const storedUsername = localStorage.getItem("username") || "Guest";
//     setUsername(storedUsername);

//     const storedQuizData = localStorage.getItem("quizData");
//     if (storedQuizData) {
//       const parsedData = JSON.parse(storedQuizData);
//       setSelectedOption(parsedData.selectedOption || {});
//     }

//     const completed = localStorage.getItem("quizCompleted");
//     if (completed === "true") {
//       navigate("/thank-you"); // Redirect if quiz is already completed
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
//         handleSubmit(); // Auto-submit on timeout
//       }
//     }, 1000);

//     return () => clearInterval(interval);
//   }, []);

//   const handleSubmit = async () => {
//     try {
//       const storedUsername = localStorage.getItem("username") || "Guest";
      
//       // Ensure all unanswered questions are stored as null
//       const allResponses = questions.reduce((acc, q) => {
//         acc[q.id] = selectedOption[q.id] || null;
//         return acc;
//       }, {});

//       console.log("Submitting responses:", { username: storedUsername, selectedOption: allResponses });

//       const response = await fetch("http://localhost:3000/api/submit", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ username: storedUsername, selectedOption: allResponses }),
//       });

//       const data = await response.json();
//       if (!response.ok) throw new Error(data.error || "Submission failed");

//       console.log("Quiz submitted successfully");
//       localStorage.setItem("quizCompleted", "true"); // Mark quiz as completed
//       localStorage.removeItem("quizData");
//       localStorage.removeItem("quizStartTime");
//       localStorage.removeItem("username");
//       navigate("/thank-you"); // Redirect to results page

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
//           {/* <img src="/1.png" alt="Quiz Illustration" className="w-full h-auto rounded-lg shadow-lg" /> */}
//           <iframe
//   src="/MCA 2024.pdf"
//   className="w-full h-full rounded-lg shadow-lg"
//   title="Quiz PDF"
// />

//         </div>

//         <div className="w-1/2 h-full bg-white p-6 rounded-lg shadow-lg flex flex-col justify-center">
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
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Quiz;






// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// const Quiz = () => {
//   const [username, setUsername] = useState("");
//   const [selectedOption, setSelectedOption] = useState({});
//   const [timeLeft, setTimeLeft] = useState(120);
//   const navigate = useNavigate();

//   const questions = [
//     { id: 1, options: ["A", "B", "C", "D"] },
//     { id: 2, options: ["A", "B", "C", "D"] },
//     { id: 3, options: ["A", "B", "C", "D"] },
//     { id: 4, options: ["A", "B", "C", "D"] },
//     { id: 5, options: ["A", "B", "C", "D"] },
//   ];

//   useEffect(() => {
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
//         handleSubmit(); // Auto-submit when time runs out
//       }
//     }, 1000);

//     return () => clearInterval(interval);
//   }, []);

//   const handleSubmit = async () => {
//     try {
//       const storedUsername = localStorage.getItem("username") || "Guest";
//       const storedQuizData = JSON.parse(localStorage.getItem("quizData")) || { selectedOption: {} };
//       const latestSelectedOption = storedQuizData.selectedOption || {};

//       // Ensure that only unanswered questions are set to null
//       const allResponses = questions.reduce((acc, q) => {
//         acc[q.id] = latestSelectedOption[q.id] !== undefined ? latestSelectedOption[q.id] : null;
//         return acc;
//       }, {});

//       console.log("Submitting responses:", { username: storedUsername, selectedOption: allResponses });

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
//           <iframe
//             src="/MCA 2024.pdf"
//             className="w-full h-full rounded-lg shadow-lg"
//             title="Quiz PDF"
//           />
//         </div>

//         <div className="w-1/2 h-full bg-white p-6 rounded-lg shadow-lg flex flex-col justify-center">
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
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Quiz;


import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Quiz = () => {
  const [username, setUsername] = useState("");
  const [selectedOption, setSelectedOption] = useState({});
  const [timeLeft, setTimeLeft] = useState(120);
  const navigate = useNavigate();

   // Generate 100 questions dynamically
  const questions = Array.from({ length: 100 }, (_, i) => ({
    id: i + 1,
    options: ["A", "B", "C", "D"],
  }));
  useEffect(() => {
    // Load username and previous quiz data
    const storedUsername = localStorage.getItem("username") || "Guest";
    setUsername(storedUsername);

    const storedQuizData = localStorage.getItem("quizData");
    if (storedQuizData) {
      const parsedData = JSON.parse(storedQuizData);
      setSelectedOption(parsedData.selectedOption || {});
    }

    const completed = localStorage.getItem("quizCompleted");
    if (completed === "true") {
      navigate("/thank-you");
    }

    const startTime = localStorage.getItem("quizStartTime");
    if (!startTime) {
      localStorage.setItem("quizStartTime", Date.now());
    }

    const interval = setInterval(() => {
      const quizStartTime = parseInt(localStorage.getItem("quizStartTime"), 10);
      const elapsed = Math.floor((Date.now() - quizStartTime) / 1000);
      const remaining = Math.max(120 - elapsed, 0);

      setTimeLeft(remaining);

      if (remaining === 0) {
        clearInterval(interval);
        handleAutoSubmit(); // Auto-submit on timer expiry
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleAutoSubmit = async () => {
    try {
      const storedUsername = localStorage.getItem("username") || "Guest";
      const storedQuizData = JSON.parse(localStorage.getItem("quizData")) || { selectedOption: {} };
      const latestSelectedOption = storedQuizData.selectedOption || {};

      // Ensure unanswered questions are set to null
      const allResponses = questions.reduce((acc, q) => {
        acc[q.id] = latestSelectedOption[q.id] !== undefined ? latestSelectedOption[q.id] : null;
        return acc;
      }, {});

      console.log("Auto Submitting responses:", { username: storedUsername, selectedOption: allResponses });

      const response = await fetch("http://localhost:3000/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: storedUsername, selectedOption: allResponses }),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Submission failed");

      console.log("Quiz auto-submitted successfully");
      localStorage.setItem("quizCompleted", "true");
      localStorage.removeItem("quizData");
      localStorage.removeItem("quizStartTime");
      localStorage.removeItem("username");
      navigate("/thank-you");

    } catch (error) {
      console.error("Error auto-submitting quiz:", error);
      alert(error.message || "Submission failed");
    }
  };

  const handleSubmit = async () => {
    try {
      const storedUsername = localStorage.getItem("username") || "Guest";
      const storedQuizData = JSON.parse(localStorage.getItem("quizData")) || { selectedOption: {} };
      const latestSelectedOption = storedQuizData.selectedOption || {};

      const allResponses = questions.reduce((acc, q) => {
        acc[q.id] = latestSelectedOption[q.id] !== undefined ? latestSelectedOption[q.id] : null;
        return acc;
      }, {});

      console.log("Manually Submitting responses:", { username: storedUsername, selectedOption: allResponses });

      const response = await fetch("http://localhost:3000/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: storedUsername, selectedOption: allResponses }),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Submission failed");

      console.log("Quiz submitted successfully");
      localStorage.setItem("quizCompleted", "true");
      localStorage.removeItem("quizData");
      localStorage.removeItem("quizStartTime");
      localStorage.removeItem("username");
      navigate("/thank-you");

    } catch (error) {
      console.error("Error submitting quiz:", error);
      alert(error.message || "Submission failed");
    }
  };

  const handleOptionChange = (questionId, option) => {
    setSelectedOption((prev) => {
      const updatedSelection = { ...prev, [questionId]: option };
      localStorage.setItem("quizData", JSON.stringify({ username, selectedOption: updatedSelection }));
      return updatedSelection;
    });
  };

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  return (
    <div className="h-screen flex flex-col bg-green-100">
      <header className="sticky top-0 left-0 right-0 bg-green-500 text-white p-4 flex justify-between items-center shadow-lg z-50">
        <h1 className="text-xl font-bold">TANCET Model Quiz</h1>
        <span className="text-lg font-semibold">{formatTime(timeLeft)}</span>
        <span className="text-lg">Welcome, {username}</span>
      </header>

      <div className="flex flex-1 h-full">
        <div className="w-1/2 h-full overflow-y-auto p-4 bg-white shadow-lg">
          <iframe src="/MCA 2024.pdf" className="w-full h-full rounded-lg shadow-lg" title="Quiz PDF" />
        </div>

        <div className="w-1/2 h-full p-6 overflow-y-auto bg-white">
          <h2 className="text-xl font-semibold mb-4">Choose the correct options:</h2>
          <div className="grid grid-cols-2 gap-6">
            {questions.map((q) => (
              <div key={q.id} className="mb-4 flex items-center space-x-6">
                <span className="text-lg font-medium">{q.id})</span>
                <div className="flex flex-wrap space-x-4">
                  {q.options.map((option, index) => (
                    <label key={index} className="flex items-center space-x-2">
                      <input
                        type="radio"
                        name={`question-${q.id}`}
                        value={option}
                        checked={selectedOption[q.id] === option}
                        onChange={() => handleOptionChange(q.id, option)}
                        className="form-radio text-green-500"
                      />
                      <span>{option}</span>
                    </label>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded-lg" onClick={handleSubmit}>
            Submit Quiz
          </button>
        </div>
      </div>
    </div>
  );
};

export default Quiz;

