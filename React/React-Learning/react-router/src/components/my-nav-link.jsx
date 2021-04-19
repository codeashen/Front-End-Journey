import React from 'react'
import {NavLink} from 'react-router-dom'

/**
 * 包装自己的 NavLink, 改变原来的选中样式
 * activeClassName: 元素处于活动状态时提供的类。默认给定的类是active。这将与className属性一起加入。
 *      意思就是选中时，其 className 中会加入 activeClassName 指定的类名，在本例中就是 activeClass，
 *      提供一个 activeClass 类选择器的css样式，即可实现自定义样式
 * @param props 传入的属性，使用 {...props} 全部原样传入 NavLink 组件, 相当于本组件再 NavLink的基础上，
 *              指定了 activeClassName 属性
 * @returns {*}
 * @constructor
 */
export default function MyNavLink(props) {
    return <NavLink {...props} activeClassName="activeClass"/>
}