import { AxiosResponse } from 'axios';
import { axios } from 'src/services/axios';

export const getUsers = async (
  accesToken: string,
): Promise<AxiosResponse<string>> => {
  const response = await axios.get('/api/user', {
    headers: {
      Authorization: `Bearer ${accesToken}`,
    },
  });
  return response;
};
