// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Login from "./pages/Login";
// import Quiz from "./pages/Quiz";
// import Register from "./pages/Register";
// import Admin from "./pages/Admin";
// import AnswerGiving from "./pages/AnswerGiving";
// import UserResult from "./pages/UserResult";
// import ThankYou from "./pages/Thankyou";
// import AdminPanel from "./pages/AdminPanel";
// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Login />} />
//         <Route path="/quiz" element={<Quiz />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/admin" element={<Admin />} />
//         <Route path="/answer" element={<AnswerGiving />} />
//         <Route path="/result" element={<UserResult />} />
//         <Route path="/thank-you" element={<ThankYou />} />
//         <Route path="/adminpanel" element={<AdminPanel/>} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;



// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Login from "./pages/Login";
// import Quiz from "./pages/Quiz";
// import Register from "./pages/Register";
// import ThankYou from "./pages/Thankyou";
// import AdminPanel from "./pages/AdminPanel";
// import Logout from "./pages/Logout";

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Login />} />
//         <Route path="/logout" element={<Logout />} />
//         <Route path="/quiz" element={<Quiz />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/thank-you" element={<ThankYou />} />
//         <Route path="/admin/*" element={<AdminPanel />} /> {/* Nested AdminPanel */}
//       </Routes>
//     </Router>
//   );
// }

// export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Quiz from "./pages/Quiz";
import Register from "./pages/Register";
import ThankYou from "./pages/Thankyou";
import AdminPanel from "./pages/AdminPanel";
import Logout from "./pages/Logout";
import AdminLogin from "./pages/AdminLogin";
import ProtectedRoute from "./pages/ProtectedRoute";
import TermsAndCondition from "./pages/TermsandCondition";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/register" element={<Register />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/termsandcondition" element={<TermsAndCondition />} />
        {/* Protected Admin Route */}
        <Route element={<ProtectedRoute />}>
          <Route path="/admin/*" element={<AdminPanel />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
