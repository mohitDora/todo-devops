import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const navigate = useNavigate();

  const login = (newToken) => {
    localStorage.setItem("token", newToken);
    setToken(newToken);
    navigate("/todo");
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
    navigate("/login");
  };

  const isAuthenticated = !!token;

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
    else{
      navigate("/todo");
    }
  }, [token]);

  return (
    <AuthContext.Provider value={{ token, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
