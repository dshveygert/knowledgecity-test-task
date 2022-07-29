import { httpRequest } from './httpRequest';
import { User } from '../models';

const urlPath = '/app/profile';
export const userInfo = (): Promise<User | void> => {
  console.log('API userInfo', httpRequest.defaults.headers.common);
  return httpRequest.get(`${urlPath}`).then((r) => r.data);
};
