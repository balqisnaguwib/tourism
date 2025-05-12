// Next, React, Tw
import React, { ReactNode } from 'react';
import { useSelector } from 'react-redux';

// Mui
import { CircularProgress } from '@mui/material';

// Components
import Login from '@/components/Login';

// Others

// Interfaces
interface AuthGuardProps {
  children: ReactNode;
}

const AuthGuard: React.FC<AuthGuardProps> = ({ children }) => {
  // Standard and Vars
  const { isInitialized, isAuthenticated } = useSelector((state: any) => state.auth);

  // if (!isInitialized) {
  //   return <CircularProgress />;
  // }

  if (!isAuthenticated) {
    return <Login />;
  }

  return children;
};

export default AuthGuard;
