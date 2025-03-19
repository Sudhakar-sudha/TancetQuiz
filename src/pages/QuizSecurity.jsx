


import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import for navigation
import Swal from "sweetalert2";

const QuizSecurity = ({ onAutoSubmit }) => {
  const [violations, setViolations] = useState(0);
  const maxViolations = 5; // Auto-submit after 5 violations
  const navigate = useNavigate(); // Hook for navigation

  const enableFullScreen = () => {
    const elem = document.documentElement;
    if (elem.requestFullscreen) elem.requestFullscreen();
    else if (elem.mozRequestFullScreen) elem.mozRequestFullScreen();
    else if (elem.webkitRequestFullscreen) elem.webkitRequestFullscreen();
    else if (elem.msRequestFullscreen) elem.msRequestFullscreen();
  };

  useEffect(() => {
    enableFullScreen(); // Force fullscreen on start

    const handleViolation = () => {
      setViolations((prev) => {
        const newCount = prev + 1;

        if (newCount >= maxViolations) {
          Swal.fire({
                      title: "Security Alert!",
                      // text: `${message} (${newCount}/${maxViolations})`,
                      icon: "warning",
                      confirmButtonText: "OK",
                    });
          onAutoSubmit(); // Auto-submit the quiz
          navigate("/thankyou"); // Redirect to Thank You page
        }

        return newCount;
      });
    };

    const handleVisibilityChange = () => {
      if (document.hidden) handleViolation();
    };

    const handleKeyDown = (event) => {
      if (event.ctrlKey && ["t", "n", "w", "r"].includes(event.key)) {
        event.preventDefault();
        handleViolation();
      }
      if (event.key === "F12" || (event.ctrlKey && event.shiftKey && event.key === "I")) {
        event.preventDefault();
        handleViolation();
      }
    };

    const handleContextMenu = (event) => {
      event.preventDefault();
      handleViolation();
    };

    const handleBlur = () => handleViolation();

    document.addEventListener("visibilitychange", handleVisibilityChange);
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("contextmenu", handleContextMenu);
    window.addEventListener("blur", handleBlur);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("contextmenu", handleContextMenu);
      window.removeEventListener("blur", handleBlur);
    };
  }, [onAutoSubmit, navigate]);

  return null; // No UI, just security handling
};

export default QuizSecurity;
