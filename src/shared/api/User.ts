import {Base} from '~shared/api/Base';
import {AxiosRequestConfig} from 'axios/index';
import {IStrapiResponseWrapper} from '~shared/types/IStrapiResponseWrapper';
import {IUserLogin} from '~shared/types/IUser';

export class User extends Base {
  constructor(baseUrl: string, apiKey?: string) {
    super(baseUrl, apiKey);
  }

  async login(identifier: string, password: string): Promise<IStrapiResponseWrapper<IUserLogin>> {
    const config: AxiosRequestConfig = {
      method: 'POST',
      url: '/auth/local',
      data: {
        identifier,
        password,
      },
    };

    return this.makeRequest<IStrapiResponseWrapper<IUserLogin>>(config);
  }

  async signup(
    email: string,
    username: string,
    password: string,
  ): Promise<IStrapiResponseWrapper<IUserLogin>> {
    const config: AxiosRequestConfig = {
      method: 'POST',
      url: '/auth/local/register',
      data: {
        email,
        username,
        password,
      },
    };

    return this.makeRequest<IStrapiResponseWrapper<IUserLogin>>(config);
  }

  async authVKCallback(query: string): Promise<IUserLogin> {
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: '/auth/vk/callback?' + query,
    };

    return this.makeRequest<IUserLogin>(config);
  }
}
