export interface TabBarData {
  /**
   * 跳转连接
   */
  url: string;
  /**
   *  唯一key
   */
  key: string;

  /**
   * 标题
   */
  text: string;

  /**
   * 图标
   */
  iconfont?: any; // string | number

  /**
   * 图片
   */
  image: string;

  /**
   *  选中时的图片
   */
  imageSelected: string;
}

export interface TabBarProps {
  /**
   * 当前激活路径
   */
  path?: string;
  /**
   * tabar数据
   * @type {IMMTabBarData}
   * @memberof IMMTabBarProps
   */
  data: TabBarData[];
  /**
   * 默认演示
   */
  defaultColor?: string;
  /**
   * 激活颜色
   */
  activeColor?: string;
  /**
   * 点击事件 返回false 可以组织页面的跳转
   *
   * @memberof IMMTabBarProps
   */
  onChange?: (data: TabBarData) => boolean | void;
}
