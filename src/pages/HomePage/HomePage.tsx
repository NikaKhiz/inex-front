import { TheWrapper } from 'src/components';
import { Link } from 'react-router-dom';
import { Button } from 'src/components';
import { useTranslation } from 'react-i18next';

const HomePage = () => {
  const { t } = useTranslation();
  return (
    <TheWrapper>
      <div className='flex flex-col text-center text-primaryWhite font-medium text-lg gap-8'>
        <h1 className='text-5xl  capitalize font-semibold'>
          {t('home.inex_group')}
        </h1>
        <h2 className='text-3xl'>{t('home.career_awaits')}</h2>
        <div className='flex flex-col gap-2 text-primaryBrown text-lg'>
          <p>{t('home.no_account')}</p>
          <p>{t('home.waiting_for')}</p>
        </div>
        <div>
          <Link to='register'>
            <Button type='filled'>{t('home.get_started')}</Button>
          </Link>
        </div>
      </div>
    </TheWrapper>
  );
};

export default HomePage;
