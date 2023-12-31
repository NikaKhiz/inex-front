import { TheHeader } from 'src/components';
import TheFooter from 'src/components/TheFooter';
import { HomePage, LoginPage, RegisterPage, Dashboard } from 'src/pages';
import { Routes, Route } from 'react-router-dom';
import { AuthLayout, GuestLayout } from 'src/layouts';
import { getUsers } from 'src/services';
import { useAuthState, useUserState } from './state';
import { useEffect, Suspense } from 'react';
import { AxiosResponse } from 'axios';
import './i18n';

function App() {
  const updateUser = useUserState((state) => state.updateUser);
  const updateAuthStatus = useAuthState((state) => state.updateAuthStatus);
  const accessToken = useAuthState((state) => state.accessToken);

  useEffect(() => {
    getUsers(accessToken)
      .then((response: AxiosResponse) => {
        updateUser(response.data.user);
        updateAuthStatus(true);
      })
      .catch(() => {
        updateUser({
          username: '',
          email: '',
        });
        updateAuthStatus(false);
      });
  }, []);

  return (
    <Suspense fallback='Loading...'>
      <main className='min-h-screen bg-gradientPrimary relative'>
        <TheHeader />
        <Routes>
          <Route element={<GuestLayout />}>
            <Route path='/' element={<HomePage />} />
            <Route path='login' element={<LoginPage />} />
            <Route path='register' element={<RegisterPage />} />
          </Route>
          <Route element={<AuthLayout />}>
            <Route path='dashboard' element={<Dashboard />} />
          </Route>
        </Routes>
        <TheFooter />
      </main>
    </Suspense>
  );
}

export default App;
