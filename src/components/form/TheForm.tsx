import { PropsType } from './types';

const TheForm = (props: PropsType) => {
  return (
    <form
      onSubmit={props.onSubmit}
      className='flex text-center flex-col gap-8 bg-neutralBlack text-primaryWhite px-10 pt-8 pb-14  rounded-lg'
    >
      {props.children}
    </form>
  );
};
export default TheForm;
