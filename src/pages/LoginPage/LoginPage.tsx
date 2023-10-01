import { TheWrapper } from 'src/components';
import { Button } from 'src/components';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { TheForm } from 'src/components';
import { FormHeading } from 'src/components';
import { FormGroup } from 'src/components/formgroup';
import { FormData } from './types';
import { loginFormValidationSchema } from 'src/schemas';
import { yupResolver } from '@hookform/resolvers/yup';
import { login } from 'src/services';
import { useAuthState, useUserState } from 'src/state';
import { AxiosResponse } from 'axios';
import { useTranslation } from 'react-i18next';

const LoginPage = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const {
    register,
    formState: { errors },
    handleSubmit,
    setError,
  } = useForm<FormData>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: yupResolver(loginFormValidationSchema(t)),
  });

  const updateUser = useUserState((state) => state.updateUser);
  const updateAccessToken = useAuthState((state) => state.updateAccessToken);
  const updateAuthStatus = useAuthState((state) => state.updateAuthStatus);

  const onSubmit = (data: FormData) => {
    login(data)
      .then((response: AxiosResponse) => {
        updateUser(response.data.user);
        updateAccessToken(response.data['access_token']);
        updateAuthStatus(true);
        navigate('/dashboard');
      })
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
          <FormHeading title={t('login.title')} />
          <div className='flex flex-col gap-4 md:gap-6 text-start'>
            <FormGroup
              type='text'
              label={t('login.email')}
              placeholder={t('login.placeholder_email')}
              {...register('email')}
              error={errors.email}
            />
            <FormGroup
              type='password'
              label={t('login.password')}
              placeholder={t('login.placeholder_password')}
              {...register('password')}
              error={errors.password}
            />
            <Button type='filled'>{t('login.log_in')}</Button>
          </div>
          <p className='text-sm text-darkGray'>
            {t('login.no_account')}{' '}
            <Link to='/register' className='text-darkBlue font-medium'>
              {t('login.register')}
            </Link>
          </p>
        </>
      </TheForm>
    </TheWrapper>
  );
};

export default LoginPage;
