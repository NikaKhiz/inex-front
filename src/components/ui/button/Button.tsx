import { PropsType } from './types';

const Button = (props: PropsType) => {
  return (
    <button
      className={`capitalize font-normal px-6 py-1 text-primaryWhite bg-${
        props.type === 'filled' ? 'primaryRed' : 'transparent'
      } border border-${
        props.type === 'filled' ? 'primaryRed' : 'primaryWhite'
      } rounded-md`}
    >
      {props.children}
    </button>
  );
};

export default Button;
