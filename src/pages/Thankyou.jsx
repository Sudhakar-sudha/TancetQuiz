// import Logout from "./Logout";

// const ThankYou = () => {
//     return (
//       <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
//         <h1 className="text-3xl font-bold text-green-600">Thank You!</h1>
//         <p className="text-lg mt-4">All the best for your TANCET exam!</p>
//         <Logout/>
//       </div>
//     );
//   };
  
//   export default ThankYou;
  


  


import { useEffect } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import Logout from "./Logout";

const ThankYou = () => {
  useEffect(() => {
    // Trigger confetti effect when page loads
    confetti({
      particleCount: 200,
      spread: 80,
      origin: { y: 0.6 },
    });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-green-500 to-green-300 text-white">
      {/* Animated Title */}
      <motion.h1
        className="text-5xl font-extrabold bg-clip-text  bg-gradient-to-r text-white"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        🎉 Thank You! 🎉
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        className="text-2xl mt-4"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
      >
        All the best for your <span className="font-semibold text-blue-600 text-3xl">TANCET exam!</span>
      </motion.p>

      {/* Logout Button with Animation */}
      <motion.div
        className="mt-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <Logout />
      </motion.div>
    </div>
  );
};

export default ThankYou;
