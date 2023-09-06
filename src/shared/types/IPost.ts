export interface IPost {
  id: string;
  createdTime: string;
  fields: Fields;
}

interface Fields {
  image: Image[];
  preview: string;
  headline: string;
  content: string;
}

interface Image {
  id: string;
  width: number;
  height: number;
  url: string;
  filename: string;
  size: number;
  type: string;
}
