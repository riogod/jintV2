import { action, makeObservable, observable } from 'mobx';
import { IAppStore } from './interfaces';
import BaseStore from '../BaseStore/BaseStore';
import { getAppSettings } from '../../services/app';

export default class AppStore extends BaseStore implements IAppStore {
  loading = false;
  features = {};

  get isLoading(): boolean {
    return this.loading;
  }

  constructor() {
    super();
    makeObservable(this, {
      loading: observable,
      setLoading: action.bound,
      getFeatures: action.bound
    });
  }

  setLoading(value: boolean): void {
    this.loading = value;
  }

  async getFeatures(): Promise<void> {
    const settings = await getAppSettings();
    this.features = settings.featureToggles;
  }
}
