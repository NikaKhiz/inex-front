import * as Yup from 'yup';

export const loginFormValidationSchema = Yup.object({
  email: Yup.string()
    .required('email field is required')
    .email('please provide valid email address'),
  password: Yup.string().required('password field is required'),
});

export const singupFormValidationSchema = Yup.object({
  username: Yup.string()
    .required('username field is required')
    .min(6, 'username must be min 6 characters')
    .max(15, 'username must be max 15 characters'),
  email: Yup.string()
    .required('email field is required')
    .email('please provide valid email address'),
  password: Yup.string()
    .required('password field is required')
    .min(8, 'password field must be min 8 characters')
    .max(20, 'password field must be max 20 characters'),
  passwordConfirmation: Yup.string()
    .required('password confirmation field is required')
    .oneOf([Yup.ref('password')], 'password confirmation must be matched'),
});
