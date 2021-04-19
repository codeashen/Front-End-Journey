import {INCREMENT, DECREMENT} from './action-types';

/*
action creator模块
返回一个action对象，属性有 操作类型 和 数据
本例中就两种操作，加操作 和 减操作
 */
export const increment = data => ({type: INCREMENT, data});
export const decrement = data => ({type: DECREMENT, data});