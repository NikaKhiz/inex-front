import { TheWrapper } from 'src/components';
import { getUsers } from 'src/services';
import { useAuthState } from 'src/state';

const Dashboard = () => {
  const accessToken = useAuthState((state) => state.accessToken);
  const getUserInfo = () => {
    getUsers(accessToken)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };
  return (
    <TheWrapper>
      <div className='bg-primaryWhite text-primaryBlack text-2xl text-center'>
        dashboard
        <button onClick={getUserInfo}>get user info</button>
      </div>
    </TheWrapper>
  );
};

export default Dashboard;
