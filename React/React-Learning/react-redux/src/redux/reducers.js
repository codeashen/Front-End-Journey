import {DECREMENT, INCREMENT} from "./action-types";

/**
 * 根据老的state和指定action, 处理返回一个新的state
 * @param state  老的state，默认值为 0
 * @param action 指定action，操作类型
 * @returns {number|*}
 */
export function counter(state = 0, action) {  // 形参默认值
    // debugger
    switch (action.type) {
        case INCREMENT:
            return state + action.data;
        case DECREMENT:
            return state - action.data;
        default:
            return state;
    }
}