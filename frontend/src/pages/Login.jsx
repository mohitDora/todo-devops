import AuthForm from "@/components/shared/AuthForm";
import { login as loginApi } from "@/lib/api";
import { useAuth } from "@/context/AuthContext";

export default function Login() {
  const { login } = useAuth();

  const handleLogin = async (data) => {
    try {
      const res = await loginApi(data);
      login(res.data.token);
    } catch (err) {
      alert(err.response?.data?.error || "Login failed");
    }
  };

  return (
    <div className="max-w-sm h-screen flex items-center mx-auto">
      <AuthForm type="login" onSubmit={handleLogin} />
    </div>
  );
}
