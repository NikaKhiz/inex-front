import { HiChevronDown, HiChevronUp } from 'react-icons/hi';

const availableLocales = ['En', 'Ka'];

const LanguageDropdown = () => {
  return (
    <div className='relative px-1'>
      <button className='flex items-center'>
        <span>En</span>
        <HiChevronDown />
      </button>
      <div className='absolute border rounded-md w-full top-full left-0 hidden'>
        <ul>
          {availableLocales.map((item, index) => {
            return (
              <li
                key={index}
                className='text-xs px-2 py-1 cursor-pointer hover:opacity-80 '
              >
                {item}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default LanguageDropdown;
