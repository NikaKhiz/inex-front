import { PropsType } from './types';

const Button = (props: PropsType) => {
  return (
    <button
      onClick={props.onClick}
      className={`w-full capitalize font-normal px-6 py-1 text-primaryWhite ${
        props.type === 'filled' ? 'bg-primaryRed' : 'bg-transparent'
      } border ${
        props.type === 'filled' ? 'border-primaryRed' : 'border-primaryWhite'
      } rounded-md`}
    >
      {props.children}
    </button>
  );
};

export default Button;
