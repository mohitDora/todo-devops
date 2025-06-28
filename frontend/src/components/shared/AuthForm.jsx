import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useNavigate } from 'react-router';

export default function AuthForm({
  className,
  type = 'login',
  onSubmit,
  ...props
}) {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const isLogin = type === 'login';

  return (
    <div className={cn('flex flex-col gap-6', className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">
            {isLogin ? 'Login' : 'Sign Up'}
          </CardTitle>
          <CardDescription>
            {isLogin
              ? 'Enter your email below to login to your account'
              : 'Create your account by providing your email and password'}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
              <Button type="submit" className="w-full">
                {isLogin ? 'Login' : 'Sign Up'}
              </Button>
            </div>
            <div className="mt-4 text-center text-sm">
              {isLogin ? (
                <>
                  Don&apos;t have an account?{' '}
                  <a
                    onClick={() => navigate('/signup')}
                    className="underline underline-offset-4 cursor-pointer"
                  >
                    Sign up
                  </a>
                </>
              ) : (
                <>
                  Already have an account?{' '}
                  <a
                    onClick={() => navigate('/login')}
                    className="underline underline-offset-4 cursor-pointer"
                  >
                    Login
                  </a>
                </>
              )}
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
