import { TheWrapper } from 'src/components';
import { Link } from 'react-router-dom';
import { Button } from 'src/components';
const HomePage = () => {
  return (
    <TheWrapper>
      <div className='flex flex-col text-center text-primaryWhite font-medium text-lg gap-8'>
        <h1 className='text-5xl  capitalize font-semibold'>Inex Group</h1>
        <h2 className='text-3xl'>your carreer awaits here!</h2>
        <div className='flex flex-col gap-2 text-primaryBrown text-lg'>
          <p>dont you have an accaunt yet?</p>
          <p>what are you waiting for?</p>
        </div>
        <div>
          <Link to='register'>
            <Button type='filled'>Get Started</Button>
          </Link>
        </div>
      </div>
    </TheWrapper>
  );
};

export default HomePage;
