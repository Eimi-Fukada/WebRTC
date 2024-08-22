/**
 * 轻提示文件。
 *
 * @description 此方法依赖全局挂载。请确保在APP.tsx中正确挂载全局Toast组件
 */
import { WToast } from 'react-native-smart-tip';

// enum IconFontName {}

// interface ToastOption {
//   data: string;
//   icon: IconFontName;
// }

// type OptionWithoutIcon = string | Omit<ToastOption, 'icon'>;

function showToast(option: string) {
  const toastOpts = {
    data: option,
    textColor: '#ffffff',
    backgroundColor: '#58b99d',
    duration: WToast.duration.LONG, //1.SHORT 2.LONG
    position: WToast.position.CENTER, // 1.TOP 2.CENTER 3.BOTTOM
  };
  WToast.show(toastOpts);
}

export const toast = {
  showToast,
};
