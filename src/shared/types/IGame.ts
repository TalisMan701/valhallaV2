import {ITag} from '~shared/types/ITag';

export interface IGame {
  id: string;
  title: string;
  image: string;
  tags: ITag[];
}
