import { api } from '../api';
import { IAppSettings } from './interfaces';

export const getAppSettings = (): Promise<IAppSettings> => {
  return api.get('/app').then((res) => res.data.body);
};
