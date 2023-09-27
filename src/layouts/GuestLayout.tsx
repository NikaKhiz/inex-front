import { Navigate, Outlet } from 'react-router-dom';
import { useAuthState } from 'src/state';

const GuestLayout = () => {
  const authStatus = useAuthState((state) => state.authStatus);

  return !authStatus ? <Outlet /> : <Navigate to='/dashboard' />;
};
export default GuestLayout;
