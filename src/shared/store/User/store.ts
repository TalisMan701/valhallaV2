import {IUserLogin, IUserSimple} from '~shared/types/IUser';
import {createEvent, createStore} from 'effector';

type Store = {
  user: IUserSimple | null;
  isAuth: boolean;
};

const initialState: Store = {
  user: null,
  isAuth: false,
};

export const setUser = createEvent<IUserSimple | null>();
export const setUserSimple = createEvent<IUserSimple>();

export const storeUser = createStore<Store>(initialState)
  .on(setUser, (state, user) => ({
    ...state,
    user,
    isAuth: true,
  }))
  .on(setUserSimple, (state, user) => ({
    ...state,
    user,
    isAuth: true,
  }));
