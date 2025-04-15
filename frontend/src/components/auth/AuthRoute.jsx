import { Navigate } from "react-router";
import { useAuth } from "@/context/AuthContext";

export default function AuthRoute({ children }) {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? children : <Navigate to="/login" replace />;
}
