import { AxiosResponse } from 'axios';
import { axios } from 'src/services/axios';
import { RegisterType, LoginType } from 'src/types';

export const signUp = async ({
  username,
  email,
  password,
  passwordConfirmation,
}: RegisterType): Promise<AxiosResponse<string>> => {
  const response = await axios.post('/api/register', {
    username,
    email,
    password,
    password_confirmation: passwordConfirmation,
  });
  return response;
};
export const login = async ({
  email,
  password,
}: LoginType): Promise<AxiosResponse<string>> => {
  const response = await axios.post('/api/login', {
    email,
    password,
  });
  return response;
};
