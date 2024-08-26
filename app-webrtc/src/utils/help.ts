function S4() {
  return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
}

/**
 * 生成唯一标识符
 *
 * @export
 * @returns
 */
export function guid() {
  return (
    S4() +
    S4() +
    '-' +
    S4() +
    '-' +
    S4() +
    '-' +
    S4() +
    '-' +
    S4() +
    S4() +
    S4()
  );
}

/**
 * 睡眠，用于异步函数里面的延迟触发下一步
 *
 * @author dingjia
 * @file index.ts
 */

export function sleep(delay = 1000): Promise<any> {
  return new Promise((resolve: any) => setTimeout(resolve, delay));
}

export default function classnames(...style: any) {
  return style;
}
