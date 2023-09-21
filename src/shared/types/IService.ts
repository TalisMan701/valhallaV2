import {ITag} from '~shared/types/ITag';
import {IReview} from '~shared/types/IReview';
import {IPromoCode} from '~shared/types/IPromoCode';

export interface IService {
  id: number;
  attributes: IAttributes;
}

interface IAttributes {
  name: string;
  description: string;
  totalCountTransaction: string;
  volume: string;
  isPromoted: boolean;
  link: string | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  img: string | null;
  tags?: {data: ITag[]};
  reviews?: {data: IReview[]};
  promo_code?: {data: IPromoCode | null};
}
