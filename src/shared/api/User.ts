import {Base} from '~shared/api/Base';
import {AxiosRequestConfig} from 'axios/index';

export class User extends Base {
  constructor(baseUrl: string, apiKey?: string) {
    super(baseUrl, apiKey);
  }
}
