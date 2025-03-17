import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import myImage1 from "/Register.gif"
import Footer from "./Footer";
const showPopup = () => {
  Swal.fire({
      title: 'Register Successfully ',
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

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const response = await fetch("https://backendsampleclg.onrender.com/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();

    if (response.ok) {
      // alert("Registration successful! Please login.");
      showPopup();
      navigate("/");
    } else {
      alert(data.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-green-500 to-green-300 ">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center mb-4">Register</h2>
        <form onSubmit={handleRegister} className="space-y-4">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            required
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            required
          />
          <button
            type="submit"
            className="w-full cursor-pointer bg-blue-500 text-white py-2 rounded hover:bg-green-600"
          >
            Register
          </button>
        </form>
     
      </div>
      <Footer/>
    </div>
  );
};

export default Register;
