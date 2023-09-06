import {Base} from '~shared/api/Base';
import {AxiosRequestConfig} from 'axios';
import {IReview} from '~shared/types/IReview';

export class Reviews extends Base {
  constructor(baseUrl: string, apiKey?: string) {
    super(baseUrl, apiKey);
  }

  async getReviewsByServiceName(serviceName: string): Promise<{records: IReview[]}> {
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: `/Reviews?fields%5B%5D=assigneeName&fields%5B%5D=assigneeIcon&fields%5B%5D=content&filterByFormula=(%7BserviceName%7D+%3D+'${serviceName}')`,
    };

    return this.makeRequest<{records: IReview[]}>(config);
  }
}
