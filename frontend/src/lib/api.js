import axios from "axios";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
const TODO_API_BASE = `${BACKEND_URL}/api/todos`;
const AUTH_API_BASE = `${BACKEND_URL}/api/auth`;

// Helper to get auth headers
const authHeader = () => {
  const token = localStorage.getItem("token");
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};

// Todo APIs with token
export const getTodos = () => axios.get(TODO_API_BASE, authHeader());
export const createTodo = (text) => axios.post(TODO_API_BASE, { text }, authHeader());
export const deleteTodo = (id) => axios.delete(`${TODO_API_BASE}/${id}`, authHeader());
export const toggleTodo = (id) => axios.put(`${TODO_API_BASE}/${id}`,null, authHeader());

// Auth APIs without token
export const register = (data) => axios.post(`${AUTH_API_BASE}/register`, data);
export const login = (data) => axios.post(`${AUTH_API_BASE}/login`, data);
