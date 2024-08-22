const isDevelopment = process.env.NODE_ENV === 'development';

const DEV_ENV = 'https://iotp.szjkyl.com/api'; //dev 环境
const PROD_ENV = 'https://iotp.szjkyl.com/api'; //生产环境

export const apiUrl = isDevelopment ? DEV_ENV : PROD_ENV;

/**
 * 系统版本
 */
export const version = '1.0.0';
