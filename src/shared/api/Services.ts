import {Base} from '~shared/api/Base';
import {AxiosRequestConfig} from 'axios';
import {IService} from '~shared/types/IService';
import {IStrapiResponseWrapper} from '~shared/types/IStrapiResponseWrapper';

export class Services extends Base {
  constructor(baseUrl: string, apiKey?: string) {
    super(baseUrl, apiKey);
  }

  async getPromotedServices(): Promise<IStrapiResponseWrapper<IService[]>> {
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: '/places?filters%5BisPromoted%5D[$eq]=true&populate[0]=tags',
    };

    return this.makeRequest<IStrapiResponseWrapper<IService[]>>(config);
  }

  async getServiceById(serviceId: string): Promise<IStrapiResponseWrapper<IService>> {
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: `/places/${serviceId}?populate[tags]=*&populate[promo_code]=*&populate[reviews][populate][2]=user`,
    };

    return this.makeRequest<IStrapiResponseWrapper<IService>>(config);
  }
}
