import React from 'react';
import { Button } from '../ui/button';
import { useAuth } from '@/context/AuthContext';

export const Navbar = () => {
  const { logout } = useAuth();
  return (
    <div className="flex justify-between border border-b px-4 py-2">
      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
        Todo App
      </h3>
      <Button onClick={logout}>Logout</Button>
    </div>
  );
};
