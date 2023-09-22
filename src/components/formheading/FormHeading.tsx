import { PropsType } from './types';
const FormHeading = ({ title }: PropsType) => {
  return (
    <p className='capitalize font-semibold text-xl md:text-2xl'>{title}</p>
  );
};
export default FormHeading;
