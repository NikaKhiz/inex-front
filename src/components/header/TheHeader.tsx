import { useState } from 'react';
import { HiMenu } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { LanguageDropdown } from 'src/components';
import { Button } from 'src/components';
import { TheSidebar } from 'src/components';
import { useAuthState } from 'src/state';
const TheHeader = () => {
  const [isSidebar, setIsSidebar] = useState<boolean>(false);
  const isLoggedIn = useAuthState((state) => state.authStatus);

  const logout = () => {
    console.log('logout');
  };
  const toggleSidebar = () => {
    return setIsSidebar(!isSidebar);
  };
  const closeSidebar = () => {
    return setIsSidebar(false);
  };

  return (
    <header className='px-4 py-2 md:px-8 md:py-4 flex justify-between items-center text-primaryWhite'>
      <Link to='/' className='capitalize text-2xl'>
        Some awesome logo
      </Link>
      <div className='flex items-center justify-between gap-4'>
        <LanguageDropdown />
        <nav className='hidden md:flex items-center gap-4'>
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
            <form onSubmit={logout}>
              <Button type='outline'>log out</Button>
            </form>
          )}
        </nav>
        <button
          className='w-6 h-6 block md:hidden'
          onClick={() => setIsSidebar(!isSidebar)}
        >
          <HiMenu className='block w-full h-full bg-cover' />
        </button>
        {isSidebar && (
          <TheSidebar
            toggleSidebar={toggleSidebar}
            closeSidebar={closeSidebar}
          />
        )}
      </div>
    </header>
  );
};

export default TheHeader;
