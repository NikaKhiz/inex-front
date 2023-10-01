import { TFunction } from 'i18next';
import * as Yup from 'yup';

export const loginFormValidationSchema = (t: TFunction) => {
  return Yup.object().shape({
    email: Yup.string()
      .required(t('validation.email_is_required'))
      .email(t('validation.email_must_be_valid')),
    password: Yup.string().required(t('validation.password_is_required')),
  });
};

export const singupFormValidationSchema = (t: TFunction) => {
  return Yup.object().shape({
    username: Yup.string()
      .required(t('validation.username_is_required'))
      .min(6, t('validation.username_min_length'))
      .max(15, t('validation.username_max_length')),
    email: Yup.string()
      .required(t('validation.email_is_required'))
      .email(t('validation.email_must_be_valid')),
    password: Yup.string()
      .required(t('validation.password_is_required'))
      .min(8, t('validation.password_min_length'))
      .max(20, t('validation.password_max_length')),
    passwordConfirmation: Yup.string()
      .required(t('validation.password_confirm_is_required'))
      .oneOf([Yup.ref('password')], t('validation.password_must_be_matched')),
  });
};
