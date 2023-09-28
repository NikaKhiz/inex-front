import { Navigate, Outlet } from 'react-router-dom';
import { useAuthState } from 'src/state';

const GuestLayout = () => {
  const isLoggedIn = useAuthState((state) => state.authStatus);

  return !isLoggedIn ? <Outlet /> : <Navigate to='/dashboard' />;
};
export default GuestLayout;
