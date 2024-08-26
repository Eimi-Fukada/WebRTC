import React from 'react';
import { TabBarData } from '../components/tabBar/const';

interface GlobalContextTabDTO {
  defaultColor: string;
  activeColor: string;
  data: TabBarData[];
}

export interface IGlobalContext {
  name: string;
  tab: GlobalContextTabDTO;
  dispatch(
    key: keyof IGlobalContext,
    value: IGlobalContext[keyof IGlobalContext]
  ): void;
}

export const defaultGlobalContextValue = {
  name: '',
  tab: {
    defaultColor: 'rgba(118, 118, 118, 1.00)',
    activeColor: 'rgba(234, 121, 118, 1.00)',
    data: [],
  },
  cartCount: 0,
  user: {} as any,
  dispatch() {},
};

export default React.createContext<IGlobalContext>(defaultGlobalContextValue);
