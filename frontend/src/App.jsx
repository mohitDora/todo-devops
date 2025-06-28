import { Routes, Route } from 'react-router';
import Signup from './pages/Signup';
import Login from './pages/Login';
import AuthRoute from './components/auth/AuthRoute';
import Todo from './pages/Todo';

function App() {
  return (
    <Routes>
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/todo"
        element={
          <AuthRoute>
            <Todo />
          </AuthRoute>
        }
      />
    </Routes>
  );
}

export default App;
