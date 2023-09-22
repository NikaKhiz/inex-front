import { TheWrapper } from 'src/components';
import { Button } from 'src/components';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { TheForm } from 'src/components';
import { FormHeading } from 'src/components';
import { FormGroup } from 'src/components/formgroup';
import { FormData } from './types';
import { loginFormValidationSchema } from 'src/schemas';
import { yupResolver } from '@hookform/resolvers/yup';

const LoginPage = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormData>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: yupResolver(loginFormValidationSchema),
  });

  const onSubmit = (data: FormData) => {
    console.log('submitted', data);
  };

  return (
    <TheWrapper>
      <TheForm onSubmit={handleSubmit(onSubmit)}>
        <>
          <FormHeading title='log in to your account' />
          <div className='flex flex-col gap-4 md:gap-6 text-start'>
            <FormGroup
              type='text'
              label='email'
              placeholder='enter your email'
              {...register('email')}
              error={errors.email}
            />
            <FormGroup
              type='password'
              label='password'
              placeholder='enter your password'
              {...register('password')}
              error={errors.password}
            />
            <Button type='filled'>sign in</Button>
          </div>
          <p className='text-sm text-darkGray'>
            still dont have an account ?{' '}
            <Link to='/register' className='text-darkBlue font-medium'>
              register now
            </Link>
          </p>
        </>
      </TheForm>
    </TheWrapper>
  );
};

export default LoginPage;
