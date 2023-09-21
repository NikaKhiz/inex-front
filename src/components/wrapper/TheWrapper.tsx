import { PropsType } from './types';
const TheWrapper = (props: PropsType) => {
  return (
    <div className=' w-full max-w-lg md:max-w-2xl mx-auto mt-20 pt-10 pb-20 px-10'>
      {props.children}
    </div>
  );
};

export default TheWrapper;
