import { Link, useNavigate } from 'react-router-dom';
import { Button } from '.';
import { useAuthState, useUserState } from 'src/state';
import { logout } from 'src/services';

const TheNavigation = (props: { sidebar: boolean }) => {
  const isLoggedIn = useAuthState((state) => state.authStatus);
  const accessToken = useAuthState((state) => state.accessToken);
  const updateUser = useUserState((state) => state.updateUser);
  const updateAccessToken = useAuthState((state) => state.updateAccessToken);
  const updateAuthStatus = useAuthState((state) => state.updateAuthStatus);
  const navigate = useNavigate();

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
            <Button type='filled'>sign up</Button>
          </Link>
          <Link to='login'>
            <Button type='outline'>log in</Button>
          </Link>
        </>
      ) : (
        <button onClick={logoutUser}>log out</button>
      )}
    </nav>
  );
};

export default TheNavigation;