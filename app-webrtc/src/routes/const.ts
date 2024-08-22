import React from 'react';

/**
 * 路由名称映射表,
 * 请保证对象值唯一
 */
export const routeNames = {
  Home: '/pages/home/index',
  SleepMonitor: '/pages/sleepMonitor/index',
};

/**
 * 定义screen传递的参数
 */
export type RootStackParamList = {
  Home: undefined;
};

export type RouteNameType = keyof typeof routeNames;

export interface RouteMapDTO {
  name: string;
  component: React.ComponentType<any>;
}
