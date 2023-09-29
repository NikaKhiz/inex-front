import { i18n } from 'src/i18n';
import * as Yup from 'yup';

export const loginFormValidationSchema = Yup.object({
  email: Yup.string()
    .required(i18n.t('validation.email_is_required'))
    .email(i18n.t('validation.email_must_be_valid')),
  password: Yup.string().required(i18n.t('validation.password_is_required')),
});

export const singupFormValidationSchema = Yup.object({
  username: Yup.string()
    .required(i18n.t('validation.username_is_required'))
    .min(6, i18n.t('validation.username_min_length'))
    .max(15, i18n.t('validation.username_max_length')),
  email: Yup.string()
    .required(i18n.t('validation.email_is_required'))
    .email(i18n.t('validation.email_must_be_valid')),
  password: Yup.string()
    .required(i18n.t('validation.password_is_required'))
    .min(8, i18n.t('validation.password_min_length'))
    .max(20, i18n.t('validation.password_max_length')),
  passwordConfirmation: Yup.string()
    .required(i18n.t('validation.password_confirm_is_required'))
    .oneOf(
      [Yup.ref('password')],
      i18n.t('validation.password_must_be_matched'),
    ),
});
