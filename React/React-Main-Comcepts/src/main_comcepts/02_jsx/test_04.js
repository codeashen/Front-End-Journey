import React from 'react';
import ReactDOM from 'react-dom';
import '../../index.css';
import App from '../../App';
import * as serviceWorker from '../../serviceWorker';

// JSX 特定属性

// 使用引号将属性设置为字面量
const element1 = <div tabIndex="0"></div>;
// 使用大括号在属性值中插入一个JS表达式
const element2 = <img src={user.avatarUrl} />;

// 包含子元素
const element3 = (
  <div>
    <h1>Hello!</h1>
    <h2>Good to see you here.</h2>
  </div>
);

// Babel 会把 JSX 转译成一个名为 React.createElement() 函数调用。
// 以下两种示例代码完全等效：
const element4 = (
  <h1 className="greeting">
    Hello, World!
  </h1>
);

const element5 = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello, World!'
);

// React.createElement() 会预先执行一些检查，以帮助你编写无错代码，但实际上它创建了一个这样的对象：
const element = {
  type: 'h1',
  props: {
    className: 'greeting',
    children: 'Hello, world!'
  }
};