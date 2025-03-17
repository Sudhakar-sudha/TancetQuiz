// import { useEffect } from "react";
// import confetti from "canvas-confetti";
// import { motion } from "framer-motion";

// const winners = [
//   { name: "Manimala", score: 67.5, rank: 1 },
//   { name: "Ramya Devi", score: 63.75, rank: 2 },
//   { name: "Satheesh Baabu", score: 61.25, rank: 3 },
//   { name: "Padmapriya", score: 59.75, rank: 4 },
//   { name: "Vinitha", score: 55.75, rank: 5 },
// ];

// const feedbacks = [
//   { user: "Karthik", message: "The number allocation are collapsing Make one by one dont make side by side Remaining was tooooooo gooood // ,question and options order are not same. it is difficult to put options.", reply: "Thanks for your feedback! 😊 We will fix the number issue and make sure they appear one by one. Glad you liked the rest! 🎉" },
//   { user: "Pranav", message: "Good but the question isnt visible", reply: "Thank you for your feedback! 😊 We’ll check the issue and make sure all questions are clearly visible. Your input helps us improve! 👍" },
//   { user: "Pranav", message: "Really so helpful.. Good looking UI. Thankyou! //,good //,Very useful and good work keep it up//,superbbb//,Thankyou for the opportunity to attend the practice mock test for tancet.Definitelt this would be helpful in exam time to keep time management.Fantastic web application by the way.Kudos to your work!!//,perfect and amazing!//,Nice Website UI.. Keep Building new websites//,thank you da sudhakar valuable experience..// nice,", reply: "Thank you all for your wonderful feedback! 😊 I'm really happy that you found the mock test helpful . Your support and kind words motivate me to keep improving and building better experiences! 🚀💙 Keep practicing, and all the best for your TANCET exam! 🎯🔥" },
// ];

// const badgeColors = ["bg-yellow-400", "bg-gray-400", "bg-orange-400", "bg-blue-400", "bg-green-400"];

// const WinnersPage = () => {
//   useEffect(() => {
//     confetti({ particleCount: 150, spread: 100, origin: { y: 0.6 } });
//   }, []);

//   return (
//     <div className="min-h-screen bg-gradient-to-r from-blue-700 to-purple-600 p-6 text-white flex flex-col items-center">
//       <motion.h1
//         className="text-5xl font-extrabold text-center mb-8"
//         initial={{ opacity: 0, scale: 0.8 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 1.5 }}
//       >
//         🏆 TANCET Top 5 Winners 🏆
//       </motion.h1>

//       {/* Winner Cards */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//         {winners.map((winner, index) => (
//           <motion.div
//             key={index}
//             className={`relative bg-white text-black p-6 rounded-2xl shadow-lg transform hover:scale-105 transition flex flex-col items-center w-72`}
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: index * 0.2 }}
//           >
//             {/* Rank Badge */}
//             <span
//               className={`absolute -top-4 right-4 text-lg font-bold text-white px-4 py-1 rounded-full ${badgeColors[index]}`}
//             >
//               #{winner.rank}
//             </span>
//             <h2 className="text-2xl font-bold text-center">{winner.name}</h2>
//             <p className="text-lg text-center mt-2">Score: <span className="font-semibold text-blue-600">{winner.score}</span></p>
//           </motion.div>
//         ))}
//       </div>

//     {/* Feedback Section */}
// <motion.h2
//   className="text-3xl font-bold text-center mt-12"
//   initial={{ opacity: 0 }}
//   animate={{ opacity: 1 }}
//   transition={{ duration: 1 }}
// >
//   💬 User Feedback
// </motion.h2>

// <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
//   {feedbacks.map((feedback, index) => (
//     <motion.div
//       key={index}
//       className="bg-white text-black p-4 rounded-lg shadow-md"
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6, delay: index * 0.2 }}
//     >
//       <p className="italic">"{feedback.message}"</p>
//       <p className="text-blue-700 font-medium mt-2">{feedback.reply}</p>
//     </motion.div>
//   ))}
// </div>

//     </div>
//   );
// };

// export default WinnersPage;



import { useEffect } from "react";
import confetti from "canvas-confetti";
import { motion } from "framer-motion";

const winners = [
  { name: "Manimala", score: 67.5, rank: 1 },
  { name: "Ramya Devi", score: 63.75, rank: 2 },
  { name: "Satheesh Baabu", score: 61.25, rank: 3 },
  { name: "Padmapriya", score: 59.75, rank: 4 },
  { name: "Vinitha", score: 55.75, rank: 5 },
];

const feedbacks = [
  { user: "Karthik", message: "The number allocation are collapsing Make one by one dont make side by side Remaining was tooooooo gooood // ,question and options order are not same. it is difficult to put options.", reply: "Thanks for your feedback! 😊 We will fix the number issue and make sure they appear one by one. Glad you liked the rest! 🎉" },
  { user: "Pranav", message: "Good but the question isnt visible", reply: "Thank you for your feedback! 😊 We’ll check the issue and make sure all questions are clearly visible. Your input helps us improve! 👍" },
  { user: "Pranav", message: "Really so helpful.. Good looking UI. Thankyou! //,good //,Very useful and good work keep it up//,superbbb//,Thankyou for the opportunity to attend the practice mock test for tancet.Definitely this would be helpful in exam time to keep time management.Fantastic web application by the way.Kudos to your work!!//,perfect and amazing!//,Nice Website UI.. Keep Building new websites//,thank you da sudhakar valuable experience..// nice,", reply: "Thank you all for your wonderful feedback! 😊 I'm really happy that you found the mock test helpful. Your support and kind words motivate me to keep improving and building better experiences! 🚀💙 Keep practicing, and all the best for your TANCET exam! 🎯🔥" },
];

const badgeColors = ["bg-yellow-500", "bg-gray-500", "bg-orange-500", "bg-blue-500", "bg-green-500"];

const WinnersPage = () => {
  useEffect(() => {
    const fireConfetti = () => {
      confetti({ particleCount: 150, spread: 100, origin: { y: 0.6 } });
    };

    fireConfetti();
    const interval = setInterval(fireConfetti, 30000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-800 to-purple-600 p-6 text-white flex flex-col items-center">
      {/* Title */}
      <motion.h1
        className="text-4xl md:text-5xl font-extrabold text-center mb-8"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
      >
        🏆 TANCET Top 5 Winners 🏆
      </motion.h1>

      {/* Winners Section */}
      <div className="flex flex-col items-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {winners.slice(0, 3).map((winner, index) => (
            <motion.div
              key={index}
              className="relative bg-white text-black p-6 rounded-2xl shadow-lg transform hover:scale-105 transition-all flex flex-col items-center w-72"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              {/* Rank Badge */}
              <span
                className={`absolute -top-4 right-4 text-lg font-bold text-white px-4 py-1 rounded-full ${badgeColors[index]}`}
              >
                #{winner.rank}
              </span>
              <h2 className="text-2xl font-bold text-center">{winner.name}</h2>
              <p className="text-lg text-center mt-2">
                Score: <span className="font-semibold text-blue-600">{winner.score}</span>
              </p>
            </motion.div>
          ))}
        </div>

        {/* Second row with 2 winners (centered) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {winners.slice(3, 5).map((winner, index) => (
            <motion.div
              key={index}
              className="relative bg-white text-black p-6 rounded-2xl shadow-lg transform hover:scale-105 transition-all flex flex-col items-center w-72"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: (index + 3) * 0.2 }}
            >
              {/* Rank Badge */}
              <span
                className={`absolute -top-4 right-4 text-lg font-bold text-white px-4 py-1 rounded-full ${badgeColors[index + 3]}`}
              >
                #{winner.rank}
              </span>
              <h2 className="text-2xl font-bold text-center">{winner.name}</h2>
              <p className="text-lg text-center mt-2">
                Score: <span className="font-semibold text-blue-600">{winner.score}</span>
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Feedback Section */}
      <motion.h2
        className="text-3xl font-bold text-center mt-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        💬 User Feedback
      </motion.h2>

      <div className="mt-6 w-full flex flex-col items-center">
        {/* Desktop: Feedbacks in a Single Row */}
        <div className="hidden md:flex justify-center space-x-6 max-w-6xl">
          {feedbacks.map((feedback, index) => (
            <motion.div
              key={index}
              className="bg-white text-black p-4 rounded-lg shadow-md w-72"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <p className="italic">"{feedback.message}"</p>
              <p className="text-blue-700 font-medium mt-2">{feedback.reply}</p>
            </motion.div>
          ))}
        </div>

        {/* Mobile: Feedbacks in Single Column */}
        <div className="md:hidden flex flex-col space-y-6">
          {feedbacks.map((feedback, index) => (
            <motion.div
              key={index}
              className="bg-white text-black p-4 rounded-lg shadow-md w-80 mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <p className="italic">"{feedback.message}"</p>
              <p className="text-blue-700 font-medium mt-2">{feedback.reply}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WinnersPage;
