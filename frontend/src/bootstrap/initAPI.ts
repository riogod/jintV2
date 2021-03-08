import { stores } from '../store';

export const initAPI = async (): Promise<void> => {
  await stores.app.getFeatures();
};
