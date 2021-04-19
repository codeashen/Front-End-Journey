import React from 'react';
import ReactDOM from 'react-dom';
import '../../index.css';

// 方式一：编写 JavaScript 函数定义组件
function Welcome(props) {
    return <h1>Hello, {props.name}</h1>
}

// 方式二：使用 ES6 的 class 来定义组件
class Welcome2 extends React.Component {
    render() {
        return <h1>Hello, {this.props.name}</h1>
    }
}

// 注意上面两种方式取出props中属性的方式差别

/*
当 React 元素为用户自定义组件时，它会将 JSX 所接收的属性（attributes）以及子组件（children）
转换为单个对象传递给组件，这个对象被称之为 “props”。
*/
const element = <Welcome name="Sara"/>;
ReactDOM.render(
    element,
    document.getElementById('root')
);

