import { api } from '../api';

//TODO fix any
export const getAppSettings = (): any => {
  return api.get('/app').then((res) => res.data.body);
};
