import { Dimensions, Platform, StatusBar } from 'react-native';
import DeviceInfo from 'react-native-device-info';

/**
 ** 判断是否是有刘海屏的iPhone
 *
 * @export
 * @param {string} info 设备型号信息，Taro.getSystemInfoSync() | DeviceInfo.getDeviceId()(react-native-device-info库)
 * @param {number} width 设备宽度
 * @param {number} height 设备高度
 * @returns
 */
export function judgmentNewPhone(info: string, width: number, height: number) {
  let isNewPhone =
    /(iPhone( )?(X|10|11|12|13|14|15|16))|(unknown.*iPhone)/.test(info);
  if (isNewPhone) {
    isNewPhone = !(width === 375 && height === 667); // 判断是否为iphone SE,1334 x 750 像素分辨率
  }
  return isNewPhone;
}

/**
 * 判断是不是新的下面有黑条的iphone
 *
 * @export
 * @returns
 */
export function getIsNewIphone() {
  const deviceId = DeviceInfo.getDeviceId();
  const { width, height } = Dimensions.get('window');
  return judgmentNewPhone(deviceId, width, height);
}

/**
 * 获取状态栏高度
 *
 */
export function getStatusBarHeight() {
  return getIsNewIphone()
    ? 44
    : Platform.OS === 'ios'
    ? 20
    : StatusBar.currentHeight!;
}
