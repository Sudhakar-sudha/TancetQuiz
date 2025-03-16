import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import myImage1 from "/thankyou.gif"
const showPopup = () => {
  Swal.fire({
      title: 'Thank you for participating.',
      text: '',
    
      imageUrl: myImage1,
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: 'Success Image',
      confirmButtonText: 'OK',
      customClass: {
          popup: 'rounded-lg shadow-lg',
          title: 'text-lg font-bold',
          confirmButton: 'bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded'
      }
  });
};

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("username"); // Remove stored user
    localStorage.removeItem("quizStartTime"); // Remove stored user
    localStorage.removeItem("quizCompleted");
    
    localStorage.removeItem("quizStartTime");
    showPopup();
    navigate("/"); // Redirect to login
  };

  return (
    <button 
      onClick={handleLogout} 
      className="bg-red-500 cursor-pointer text-white py-2 px-4 rounded hover:bg-red-600"
    >
      Logout
    </button>
  );
};

export default Logout;