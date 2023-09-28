import { useEffect, useRef, useState } from 'react';
import { HiChevronDown, HiChevronUp } from 'react-icons/hi';

const availableLocales = ['En', 'Ka'];

const LanguageDropdown = () => {
  const [isLocalesOpen, setIsLocalesOpen] = useState<boolean>(false);
  const [isBtnClicked, setIsBtnClicked] = useState<boolean>(false);
  const localesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: Event) => {
      if (!localesRef.current?.contains(e.target as Node) && !isBtnClicked) {
        setIsLocalesOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => {
      document.removeEventListener('mousedown', handler);
    };
  });
  return (
    <div className='relative px-1'>
      <button
        className='flex items-center'
        onClick={() => {
          setIsLocalesOpen(!isLocalesOpen);
          setIsBtnClicked(!isBtnClicked);
        }}
      >
        <span>En</span>
        {!isLocalesOpen ? <HiChevronDown /> : <HiChevronUp />}
      </button>
      {isLocalesOpen && (
        <div
          className='absolute border rounded-md w-full top-full left-0 '
          ref={localesRef}
        >
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
      )}
    </div>
  );
};

export default LanguageDropdown;
