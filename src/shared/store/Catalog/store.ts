import {IGame} from '~shared/types/IGame';
import {createEvent, createStore} from 'effector';

type Store = {
  selectedGame: IGame | null;
};

export const setSelectedGame = createEvent<IGame | null>();

export const storeSelectedGame = createStore<Store>({selectedGame: null}).on(
  setSelectedGame,
  (state, selectedGame) => ({...state, selectedGame}),
);
