import axios, {AxiosInstance, AxiosRequestConfig, AxiosResponse} from 'axios';
import {IResponseWrapper} from '~shared/types/IResponseWrapper';

export class Base {
  protected apiWithAuth: AxiosInstance;

  constructor(baseUrl: string, apiKey?: string) {
    this.apiWithAuth = axios.create({
      baseURL: baseUrl,
      headers: {
        Authorization: 'Bearer ' + apiKey,
      },
    });
  }

  protected async makeRequest<T>(config: AxiosRequestConfig): Promise<T> {
    try {
      const response: AxiosResponse<T> = await this.apiWithAuth.request(config);
      return response.data;
    } catch (error: any) {
      throw new Error(error.response.data.error);
    }
  }
}
