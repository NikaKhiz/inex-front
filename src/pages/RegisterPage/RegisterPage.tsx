import { TheWrapper } from 'src/components';
import { Button } from 'src/components';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { TheForm } from 'src/components';
import { FormHeading } from 'src/components';
import { FormGroup } from 'src/components/formgroup';
import { FormData } from './types';
import { singupFormValidationSchema } from 'src/schemas';
import { yupResolver } from '@hookform/resolvers/yup';
import { signUp } from 'src/services';

const RegisterPage = () => {
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
    setError,
  } = useForm<FormData>({
    defaultValues: {
      username: '',
      email: '',
      password: '',
      passwordConfirmation: '',
    },
    resolver: yupResolver(singupFormValidationSchema),
  });

  const onSubmit = (data: FormData) => {
    signUp(data)
      .then(() => navigate('/'))
      .catch((error) => {
        const errorsObj = error.response.data.errors;
        for (const fieldName in errorsObj) {
          if (Object.prototype.hasOwnProperty.call(errorsObj, fieldName)) {
            const errorMessage = errorsObj[fieldName];
            setError(fieldName as keyof FormData, {
              type: 'message',
              message: errorMessage,
            });
          }
        }
      });
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
              error={errors.username}
              {...register('username')}
            />
            <FormGroup
              type='text'
              label='email'
              placeholder='enter your email'
              error={errors.email}
              {...register('email')}
            />
            <FormGroup
              type='password'
              label='password'
              placeholder='enter your password'
              error={errors.password}
              {...register('password')}
            />
            <FormGroup
              type='password'
              label='confrm password'
              placeholder='confirm password'
              error={errors.passwordConfirmation}
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
