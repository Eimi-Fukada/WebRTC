import makeRequest from '../httpsRequest';

const method = 'post';

export default {
  '/deviceService/online': makeRequest<
    null,
    { deviceId: string; deviceType: number }
  >({
    url: '/deviceService/online',
    method,
  }),
  '/baiduBoxExecService/callBox': makeRequest<
    null,
    { deviceId: string; deviceType: number }
  >({
    url: '/baiduBoxExecService/callBox',
    method,
  }),
  '/baiduBoxExecService/closeBox': makeRequest<
    null,
    { deviceId: string; deviceType: number }
  >({
    url: '/baiduBoxExecService/closeBox',
    method,
  }),
};
