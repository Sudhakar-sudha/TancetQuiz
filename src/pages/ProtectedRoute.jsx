import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const adminToken = localStorage.getItem("adminToken");
  return adminToken ? <Outlet /> : <Navigate to="/admin-login" />;
};

export default ProtectedRoute;
