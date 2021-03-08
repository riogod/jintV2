import { action, makeObservable, observable } from 'mobx';
import { IAppStore } from './interfaces';
import BaseStore from '../BaseStore/BaseStore';
import { getAppSettings } from '../../services/app';
import { IAppFeatures } from './AppStore.model';

export default class AppStore extends BaseStore implements IAppStore {
  loading = false;
  features = {
    main: false
  };

  get isLoading(): boolean {
    return this.loading;
  }

  constructor() {
    super();
    makeObservable(this, {
      loading: observable,
      features: observable,
      setLoading: action.bound,
      getFeatures: action.bound,
      setFeatures: action.bound
    });
  }

  setLoading(value: boolean): void {
    this.loading = value;
  }

  async getFeatures(): Promise<void> {
    const settings = await getAppSettings();

    this.setFeatures(settings.featureToggles);
  }

  setFeatures(feature: IAppFeatures): void {
    this.features = feature;
  }
}
