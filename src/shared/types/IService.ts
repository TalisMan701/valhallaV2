export interface IService {
  id: string;
  createdTime: string;
  fields: Fields;
}

interface Fields {
  name: string;
  prices: string[];
  reviews: string[];
  averageTradeValue: number;
  monthlyUses: string;
  description: string;
  numOfReviews: number;
  tags: string[];
  totalTransactions: number;
  promoted: boolean;
  promocode: string;
  serviceLink: string;
  previewImg: PreviewImg[];
  gamesPrices: string[];
}

interface PreviewImg {
  id: string;
  width: number;
  height: number;
  url: string;
  filename: string;
  size: number;
  type: string;
}
