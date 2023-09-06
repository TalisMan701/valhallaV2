import {Base} from '~shared/api/Base';
import {AxiosRequestConfig} from 'axios';
import {IService} from '~shared/types/IService';
import {IPost} from '~shared/types/IPost';

export class Blog extends Base {
  constructor(baseUrl: string, apiKey?: string) {
    super(baseUrl, apiKey);
  }

  async getPosts(): Promise<{records: IPost[]}> {
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: '/Posts?fields%5B%5D=image&fields%5B%5D=preview&fields%5B%5D=content&fields%5B%5D=headline',
    };

    return this.makeRequest<{records: IPost[]}>(config);
  }

  async getPostById(postId: string): Promise<IPost> {
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: `/Posts/${postId}`,
    };

    return this.makeRequest<IPost>(config);
  }
}
