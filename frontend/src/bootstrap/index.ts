import { initAPI } from './initAPI';
import { stores } from '../store';

export const initBootstrap = async (): Promise<void> => {
  stores.app.setLoading(true);
  await initAPI();
};
