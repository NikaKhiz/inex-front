import { Navigate, Outlet } from 'react-router-dom';
import { useAuthState } from 'src/state';

const AuthLayout = () => {
  const isLoggedIn = useAuthState((state) => state.authStatus);

  return isLoggedIn ? <Outlet /> : <Navigate to='/login' />;
};
export default AuthLayout;
