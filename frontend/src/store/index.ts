import { createContext } from 'react';
import AppStore from './AppStore/AppStore';
import { IRootStore } from './interfaces';

export const stores: IRootStore = Object.freeze({
  app: new AppStore()
});
export const storesContext = createContext<IRootStore>(stores);

export const StoresProvider = storesContext.Provider;
