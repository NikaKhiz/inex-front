import { HiOutlineX } from 'react-icons/hi';
import { PropsType } from './types';
import { useEffect, useRef } from 'react';
import TheNavigation from 'src/components/TheNavigation';

const TheSidebar = ({ toggleSidebar, closeSidebar }: PropsType) => {
  const sidebarRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handler = (e: Event) => {
      if (!sidebarRef.current?.contains(e.target as Node)) {
        closeSidebar();
      }
    };
    document.addEventListener('mousedown', handler);
    return () => {
      document.removeEventListener('mousedown', handler);
    };
  });
  return (
    <aside
      className='absolute right-0 top-0 bg-neutralBlack w-72 h-4/5'
      ref={sidebarRef}
    >
      <div
        className='w-10 h-10 absolute right-2 top-2 cursor-pointer'
        onClick={toggleSidebar}
      >
        <HiOutlineX className='block w-full h-full object-cover' />
      </div>
      <div className='flex flex-col gap-4 p-4'>
        <p className='font-semibold text-xl capitalize'>inex group</p>
        <TheNavigation sidebar={true} />
      </div>
    </aside>
  );
};
export default TheSidebar;
