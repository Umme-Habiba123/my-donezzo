import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  
  console.log("🔒 ProtectedRoute check:", { 
    hasToken: !!token,
    token: token ? token.substring(0, 20) + "..." : null 
  });

  if (!token) {
    console.log("❌ No token found, redirecting to login");
    return <Navigate to="/" replace />;
  }

  console.log("✅ Token found, rendering protected content");
  return children;
};

export default ProtectedRoute;