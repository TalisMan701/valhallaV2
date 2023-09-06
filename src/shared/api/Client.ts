import {backendURL} from '~shared/config/constants';
import {User} from '~shared/api/User';
import {Services} from '~shared/api/Services';
import {Games} from '~shared/api/Games';
import {Reviews} from '~shared/api/Reviews';

class Client {
  services: Services;
  games: Games;
  user: User;
  reviews: Reviews;

  constructor(baseUrl: string, apiKey?: string) {
    this.user = new User(baseUrl, apiKey);
    this.games = new Games(baseUrl, apiKey);
    this.services = new Services(baseUrl, apiKey);
    this.reviews = new Reviews(baseUrl, apiKey);
  }
}

export const client = new Client(
  backendURL,
  'patPzBfflFJreae7M.3b106ef0f37ffab865a09493ffcd2f61f787dac61c63022080f733b0da6fffe3',
);
