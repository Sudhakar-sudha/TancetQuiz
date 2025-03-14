import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import myImage1 from "/allthebest.gif"

const showPopup = () => {
  Swal.fire({
      title: 'Start The Exam ',
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

const TermsAndCondition = () => {
  const navigate = useNavigate(); // Initialize navigation

  const startQuiz = () => {
    showPopup();
    navigate("/quiz"); // Redirects to the quiz page
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-green-600 p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-4xl">
        <h2 className="text-3xl font-bold text-center text-green-500 mb-4">
          Terms & Conditions
        </h2>
        <p className="text-black text-center mb-6">
          Please read the following rules carefully before starting the TANCET Mock Test.
        </p>

        <ul className="list-disc text-black space-y-2 pl-6 mb-6">
          <li>The quiz consists of multiple-choice questions.</li>
          <li>Each question has only one correct answer.</li>
          <li>A one-fourth negative mark will be deducted for incorrect answers.</li>
          <li>You must complete the quiz within the given time limit; otherwise, it will be submitted automatically.</li>
          <li>Results will be displayed after 6 PM.</li>
          <li>Do not refresh or leave the quiz page once the test has started.</li>
          <li>Any form of cheating may result in disqualification.</li>
        </ul>

        <div className="flex justify-center">
          <button
            onClick={startQuiz}
            className="bg-red-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg font-semibold transition"
          >
            I Agree & Start Quiz
          </button>
        </div>
      </div>
    </div>
  );
};

export default TermsAndCondition;
