import { Navigate, Outlet } from 'react-router-dom';
import { useAuthState } from 'src/state';

const AuthLayout = () => {
  const authStatus = useAuthState((state) => state.authStatus);

  return authStatus ? <Outlet /> : <Navigate to='/login' />;
};
export default AuthLayout;
