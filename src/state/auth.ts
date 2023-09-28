import { create } from 'zustand';

interface AuthType {
  accessToken: string;
  authStatus: boolean;
  updateAccessToken: (token: string) => void;
  updateAuthStatus: (status: boolean) => void;
}
const useAuthState = create<AuthType>((set) => ({
  accessToken: JSON.parse(localStorage.getItem('accessToken')) ?? '',
  authStatus: JSON.parse(localStorage.getItem('authStatus')) ?? false,
  updateAccessToken: (token: string) => {
    set(() => ({
      accessToken: token,
    }));
    localStorage.setItem('accessToken', JSON.stringify(token));
  },
  updateAuthStatus: (status: boolean) => {
    set(() => ({
      authStatus: status,
    })),
      localStorage.setItem('authStatus', JSON.stringify(status));
  },
}));

export default useAuthState;
