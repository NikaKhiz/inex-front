import * as Yup from 'yup';

export const loginFormValidationSchema = Yup.object({
  email: Yup.string()
    .required('email field is required')
    .email('please provide valid email address'),
  password: Yup.string().required('password field is required'),
});
