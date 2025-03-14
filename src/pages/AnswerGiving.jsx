// import { useState } from "react";

// const AnswerGiving = () => {
//   const [correctAnswers, setCorrectAnswers] = useState({});

//   const handleAnswerChange = (questionId, answer) => {
//     setCorrectAnswers((prev) => ({
//       ...prev,
//       [questionId]: answer,
//     }));
//   };

//   const handleSubmit = async () => {
//     try {
//       const response = await fetch("http://localhost:3000/api/set-answers", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ answers: correctAnswers }),
//       });

//       const data = await response.json();
//       alert(data.message);
//     } catch (error) {
//       console.error("Error saving answers:", error);
//     }
//   };

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold mb-4">Admin - Set Correct Answers</h1>
//       {[1, 2, 3, 4, 5].map((id) => (
//         <div key={id} className="mb-4 flex space-x-4">
//           <span className="text-lg font-medium">{id})</span>
//           {["A", "B", "C", "D"].map((option) => (
//             <label key={option} className="flex items-center space-x-2">
//               <input
//                 type="radio"
//                 name={`answer-${id}`}
//                 value={option}
//                 checked={correctAnswers[id] === option}
//                 onChange={() => handleAnswerChange(id, option)}
//               />
//               <span>{option}</span>
//             </label>
//           ))}
//         </div>
//       ))}
//       <button
//         className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg"
//         onClick={handleSubmit}
//       >
//         Save Answers
//       </button>
//     </div>
//   );
// };

// export default AnswerGiving;


import { useState } from "react";

const AnswerGiving = () => {
  const [correctAnswers, setCorrectAnswers] = useState({});

  const handleAnswerChange = (questionId, answer) => {
    setCorrectAnswers((prev) => ({
      ...prev,
      [questionId]: answer,
    }));
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/set-answers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ answers: correctAnswers }),
      });

      const data = await response.json();
      alert(data.message);
    } catch (error) {
      console.error("Error saving answers:", error);
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-center">Admin - Set Correct Answers</h1>
      <div className="grid grid-cols-2 gap-6 overflow-y-auto h-[70vh] p-4 border rounded-lg shadow-lg bg-white">
        {Array.from({ length: 100 }, (_, i) => i + 1).map((id) => (
          <div key={id} className="mb-4 flex items-center space-x-4">
            <span className="text-lg font-medium">{id})</span>
            <div className="flex space-x-4">
              {["A", "B", "C", "D"].map((option) => (
                <label key={option} className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name={`answer-${id}`}
                    value={option}
                    checked={correctAnswers[id] === option}
                    onChange={() => handleAnswerChange(id, option)}
                  />
                  <span>{option}</span>
                </label>
              ))}
            </div>
          </div>
        ))}
      </div>
      <button
        className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-lg block mx-auto"
        onClick={handleSubmit}
      >
        Save Answers
      </button>
    </div>
  );
};

export default AnswerGiving;