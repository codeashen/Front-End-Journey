import React from 'react';
import ReactDOM from 'react-dom';
import '../../index.css';

/*
key 帮助 React 识别哪些元素改变了，比如被添加或删除。
因此你应当给数组中的每一个元素赋予一个确定的标识。
 */

// 组件中渲染列表
function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map(number =>
        <li key={number.toString()}>
            {number}
        </li>
    );
    return (<ul>{listItems}</ul>);
}

const numbers = [1, 2, 3, 4, 5]

ReactDOM.render(
    <NumberList numbers={numbers}/>,
    document.getElementById('root')
);