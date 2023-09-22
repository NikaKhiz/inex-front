import { TheWrapper } from 'src/components';
import { Button } from 'src/components';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { TheForm } from 'src/components';
import { FormHeading } from 'src/components';
import { FormGroup } from 'src/components/formgroup';
import { FormData } from './types';

const RegisterPage = () => {
  const { register, handleSubmit } = useForm<FormData>({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      passwordConfirmation: '',
    },
  });

  const onSubmit = (data: FormData) => {
    console.log('submitted', data);
  };

  return (
    <TheWrapper>
      <TheForm onSubmit={handleSubmit(onSubmit)}>
        <>
          <FormHeading title='create a new account' />
          <div className='flex flex-col gap-4 md:gap-6 text-start'>
            <FormGroup
              type='text'
              label='username'
              placeholder='john doe'
              {...register('firstName')}
            />
            <FormGroup
              type='text'
              label='email'
              placeholder='enter your email'
              {...register('email')}
            />
            <FormGroup
              type='password'
              label='password'
              placeholder='enter your password'
              {...register('password')}
            />
            <FormGroup
              type='password'
              label='confrm password'
              placeholder='confirm password'
              {...register('passwordConfirmation')}
            />
            <Button type='filled'>sign in</Button>
          </div>
          <p className='text-sm text-darkGray'>
            already have an account ?{' '}
            <Link to='/login' className='text-darkBlue font-medium'>
              login
            </Link>
          </p>
        </>
      </TheForm>
    </TheWrapper>
  );
};

export default RegisterPage;
