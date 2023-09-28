import { useState } from 'react';
import { HiMenu } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { LanguageDropdown } from 'src/components';
import { TheSidebar } from 'src/components';
import TheNavigation from 'src/components/TheNavigation';

const TheHeader = () => {
  const [isSidebar, setIsSidebar] = useState<boolean>(false);

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
        <TheNavigation sidebar={false} />
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
