import { TheWrapper } from 'src/components';
import { useUserState } from 'src/state';

const Dashboard = () => {
  const username = useUserState((state) => state.username);
  const email = useUserState((state) => state.email);
  return (
    <TheWrapper>
      <div className='bg-neutralBlack  flex flex-col gap-4 p-4 text-primaryBrown  text-center text-xl md:text-3xl capitalize '>
        <p>
          welcome, <span className='text-darkBlue'>{username}</span>
        </p>
        <p>
          your current email adress is :{' '}
          <span className='text-darkBlue'>{email}</span>
        </p>
      </div>
    </TheWrapper>
  );
};

export default Dashboard;
