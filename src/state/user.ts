import { create } from 'zustand';
import { UserType } from 'src/types';

interface UserState extends UserType {
  updateUser: (user: UserType) => void;
}
const useUserState = create<UserState>((set) => ({
  username: '',
  email: '',
  updateUser: (user: UserType) =>
    set(() => ({
      username: user.username,
      email: user.email,
    })),
}));

export default useUserState;
