import {IUserLogin} from '~shared/types/IUser';
import {createEvent, createStore} from 'effector';

type Store = {
  user: IUserLogin | null;
  isAuth: boolean;
};

const initialState: Store = {
  user: null,
  isAuth: false,
};

export const setUser = createEvent<IUserLogin | null>();

export const storeUser = createStore<Store>(initialState).on(setUser, (state, user) => ({
  ...state,
  user,
  isAuth: true,
}));
