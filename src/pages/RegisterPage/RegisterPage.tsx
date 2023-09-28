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
import { useTranslation } from 'react-i18next';

const RegisterPage = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

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
          <FormHeading title={t('register.title')} />
          <div className='flex flex-col gap-4 md:gap-6 text-start'>
            <FormGroup
              type='text'
              label={t('register.username')}
              placeholder={t('register.placeholder_username')}
              error={errors.username}
              {...register('username')}
            />
            <FormGroup
              type='text'
              label={t('register.email')}
              placeholder={t('register.placeholder_email')}
              error={errors.email}
              {...register('email')}
            />
            <FormGroup
              type='password'
              label={t('register.password')}
              placeholder={t('register.placeholder_password')}
              error={errors.password}
              {...register('password')}
            />
            <FormGroup
              type='password'
              label={t('register.password_confirmation')}
              placeholder={t('register.placeholder_password_confirmation')}
              error={errors.passwordConfirmation}
              {...register('passwordConfirmation')}
            />
            <Button type='filled'>{t('register.sign_up')}</Button>
          </div>
          <p className='text-sm text-darkGray'>
            {t('register.have_account')}{' '}
            <Link to='/login' className='text-darkBlue font-medium'>
              {t('register.log_in')}
            </Link>
          </p>
        </>
      </TheForm>
    </TheWrapper>
  );
};

export default RegisterPage;
