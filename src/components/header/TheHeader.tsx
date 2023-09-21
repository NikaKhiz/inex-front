import { HiMenu } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { LanguageDropdown } from 'src/components';
import { Button } from 'src/components';
const TheHeader = () => {
  return (
    <header className='px-4 py-2 md:px-8 md:py-4 flex justify-between items-center text-primaryWhite'>
      <p className='capitalize text-2xl'>Some awesome logo</p>
      <div className='flex items-center justify-between gap-4'>
        <LanguageDropdown />
        <nav className='hidden md:flex items-center gap-4'>
          <Link to='register'>
            <Button type='filled'>sign up</Button>
          </Link>
          <Link to='login'>
            <Button type='outline'>log in</Button>
          </Link>
        </nav>
        <button className='w-6 h-6 block md:hidden'>
          <HiMenu className='block w-full h-full bg-cover' />
        </button>
      </div>
    </header>
  );
};

export default TheHeader;
