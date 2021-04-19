import React from 'react';
import ReactDOM from 'react-dom';
import '../../index.css';

// 绑定点击事件
function ActionLink() {
    // 点击时执行的函数
    function handleClick(e) {
        e.preventDefault();  // 阻止事件的默认行为
        console.log('The link was clicked.');
    }

    return (
        // 设置点击事件
        <a href="#" onClick={handleClick}>Click me</a>
    );
}

ReactDOM.render(
    <ActionLink/>,
    document.getElementById('root')
);