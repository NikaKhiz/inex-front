import { PropsType } from './types';
import React from 'react';
const FormGroup = React.forwardRef<HTMLInputElement, PropsType>(
  ({ label, type, name, placeholder, onChange, onBlur }, ref) => {
    return (
      <div className='flex flex-col gap-1 md:gap-2'>
        <label htmlFor={label} className='capitalize text-base md:text-lg'>
          {label}
        </label>
        <input
          type={type}
          id={name}
          name={name}
          ref={ref}
          placeholder={placeholder}
          onChange={onChange}
          onBlur={onBlur}
          className='p-1 md:p-2 outline-none caret-darkGray text-mediumBlack border border-darkGray rounded-md focus:ring-2 ring-indigo-400 bg-neutralGray'
        />
      </div>
    );
  },
);
export default FormGroup;
