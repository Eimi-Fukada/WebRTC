import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * AsyncStorage的包装方法
 * 可以定义管理所有的异步存储key和返回值信息
 */
interface StorageDTO {
  Authorization: string;
}

type StorageKey = keyof StorageDTO;

export function getItem<K extends StorageKey>(
  key: K
): Promise<StorageDTO[K] | null> {
  return AsyncStorage.getItem(key).then((data) => {
    if (data) {
      if (/^[\[\{"]/.test(data)) {
        try {
          return JSON.parse(data);
        } catch (error) {
          // eslint-disable-next-line no-throw-literal
          throw 'JSON parse 失败';
        }
      }
    }
    return data;
  });
}

export function setItem<K extends StorageKey>(key: K, value: StorageDTO[K]) {
  return AsyncStorage.setItem(key, JSON.stringify(value));
}

export function removeItem(key: StorageKey) {
  return AsyncStorage.removeItem(key);
}

export function clear() {
  return AsyncStorage.clear();
}
