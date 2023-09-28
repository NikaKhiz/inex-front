import { useTranslation } from 'react-i18next';
import { TheWrapper } from 'src/components';
import { useUserState } from 'src/state';

const Dashboard = () => {
  const username = useUserState((state) => state.username);
  const email = useUserState((state) => state.email);
  const { t } = useTranslation();

  return (
    <TheWrapper>
      <div className='bg-neutralBlack  flex flex-col gap-4 p-4 text-primaryBrown  text-center text-xl md:text-3xl capitalize '>
        <p>
          {t('dashboard.welcome')},{' '}
          <span className='text-darkBlue'>{username}</span>
        </p>
        <p>
          {t('dashboard.current_email')}{' '}
          <span className='text-darkBlue'>{email}</span>
        </p>
      </div>
    </TheWrapper>
  );
};

export default Dashboard;
