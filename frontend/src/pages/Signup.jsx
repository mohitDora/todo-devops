import AuthForm from '@/components/shared/AuthForm';
import { register } from '@/lib/api';
import { useAuth } from '@/context/AuthContext';

export default function Signup() {
  const { login } = useAuth();

  const handleSignup = async (data) => {
    try {
      const res = await register(data);
      login(res.data.token);
    } catch (err) {
      alert(err.response?.data?.error || 'Signup failed');
    }
  };

  return (
    <div className="max-w-sm h-screen flex items-center mx-auto">
      <AuthForm type="signup" onSubmit={handleSignup} />
    </div>
  );
}
