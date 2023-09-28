import { Link, useNavigate } from 'react-router-dom';
import { Button } from '.';
import { useAuthState, useUserState } from 'src/state';
import { logout } from 'src/services';
import { useTranslation } from 'react-i18next';

const TheNavigation = (props: { sidebar: boolean }) => {
  const isLoggedIn = useAuthState((state) => state.authStatus);
  const accessToken = useAuthState((state) => state.accessToken);
  const updateUser = useUserState((state) => state.updateUser);
  const updateAccessToken = useAuthState((state) => state.updateAccessToken);
  const updateAuthStatus = useAuthState((state) => state.updateAuthStatus);
  const navigate = useNavigate();
  const { t } = useTranslation();

  const logoutUser = () => {
    logout(accessToken)
      .then(() => {
        updateUser({
          username: '',
          email: '',
        });
        updateAccessToken('');
        updateAuthStatus(false);
        navigate('/');
      })
      .catch((error) => console.log(error));
  };
  return (
    <nav
      className={
        !props.sidebar
          ? 'hidden md:flex items-center gap-4'
          : 'flex flex-col w-fit gap-4'
      }
    >
      {!isLoggedIn ? (
        <>
          <Link to='register'>
            <Button type='filled'>{t('navigation.sign_up')}</Button>
          </Link>
          <Link to='login'>
            <Button type='outline'>{t('navigation.log_in')}</Button>
          </Link>
        </>
      ) : (
        <Button onClick={logoutUser} type='outline'>
          {t('navigation.log_out')}
        </Button>
      )}
    </nav>
  );
};

export default TheNavigation;
