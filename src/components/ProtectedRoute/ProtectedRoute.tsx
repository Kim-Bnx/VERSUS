import { useNavigate } from 'react-router-dom';
import { ReactNode, useEffect } from 'react';
import { useAppSelector } from '../../hooks/redux';

interface ProtectedRouteProps {
  children: ReactNode;
}

function ProtectedRoute({ children }: ProtectedRouteProps) {
  const isConnected = useAppSelector((state) => state.login.isConnected);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isConnected) {
      navigate('/sign-in');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isConnected]);

  return children;
}

export default ProtectedRoute;
