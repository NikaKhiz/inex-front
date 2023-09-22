import { Link } from 'react-router-dom';
import { Button } from 'src/components';
import { HiOutlineX } from 'react-icons/hi';
import { PropsType } from './types';
import { useEffect, useRef } from 'react';

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
        <div className='flex flex-col w-fit  gap-2'>
          <Link to='register'>
            <Button type='filled'>sign up</Button>
          </Link>
          <Link to='login'>
            <Button type='outline'>log in</Button>
          </Link>
          <Link to='/'>
            <Button type='filled'>go home</Button>
          </Link>
        </div>
      </div>
    </aside>
  );
};
export default TheSidebar;
