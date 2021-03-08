import React from 'react';
import { stores, storesContext } from '../store';
import { IRootStore } from '../store/interfaces';

export const useStores = (): IRootStore => React.useContext(storesContext);

export const useStore = <T extends keyof typeof stores>(
  store: T
): typeof stores[T] => React.useContext(storesContext)[store];
