export interface NavigationProps {
  /**
   * 中间显示的标题
   *
   * @type {string}
   * @memberof INavigationProps
   */
  title?: string;
  /**
   * 返回按钮是否显示,当路由只剩一页或路由是tab页面时。此属性无效
   *
   * @type {boolean}
   * @memberof INavigationProps
   */
  backVisible?: boolean;
  /**
   * 渲染左边的元素
   *
   * @type {(JSX.Element | string)}
   * @memberof INavigationProps
   */
  renderLeftContent?: JSX.Element;
  /**
   * 渲染右边的元素
   *
   * @type {(JSX.Element | string)}
   * @memberof INavigationProps
   */
  renderRightContent?: JSX.Element;
}
