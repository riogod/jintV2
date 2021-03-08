import { IAppFeatures } from './AppStore.model';

export interface IAppStore {
  loading: boolean;
  features: IAppFeatures;

  isLoading: boolean;

  setLoading: (value: boolean) => void;
  getFeatures: () => void;
  setFeatures: (feature: IAppFeatures) => void;
}
