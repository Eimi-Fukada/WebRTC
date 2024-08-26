/**
 * 状态;1:待分配,2:待接单,3:待处理,4:处理中,5:已完成,6:已取消
 */
export enum OrderStatusEnum {
  /**
   * 处理中
   */
  inProcess,

  /**
   * 已完成
   */
  completed,

  /**
   * 已取消
   */
  cancelled,
}

/**
 * 状态描述
 */
export const orderStatusEnumDesc = {
  [OrderStatusEnum.inProcess]: '处理中',
  [OrderStatusEnum.completed]: '已完成',
  [OrderStatusEnum.cancelled]: '已取消',
};
