import {Base} from '~shared/api/Base';
import {AxiosRequestConfig} from 'axios';
import {IService} from '~shared/types/IService';

export class Services extends Base {
  constructor(baseUrl: string, apiKey?: string) {
    super(baseUrl, apiKey);
  }

  async getPromotedServices(): Promise<{records: IService[]}> {
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: '/Services?filterByFormula=Promoted',
    };

    return this.makeRequest<{records: IService[]}>(config);
  }

  async getServiceById(serviceId: string): Promise<IService> {
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: `/Services/${serviceId}`,
    };

    return this.makeRequest<IService>(config);
  }
}
