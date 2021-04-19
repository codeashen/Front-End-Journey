import React from 'react';
import '../../index.css';

// 转化列表

// 使用map函数将列表元素翻倍
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(number => number * 2);
console.log(doubled);