import React from 'react';
import { stores, storesContext } from '../store';

//TODO fix any
export const useStores = (): any => React.useContext(storesContext);

export const useStore = <T extends keyof typeof stores>(
  store: T
): typeof stores[T] => React.useContext(storesContext)[store];
