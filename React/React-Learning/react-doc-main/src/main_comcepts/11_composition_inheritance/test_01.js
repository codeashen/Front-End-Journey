import React from 'react';
import ReactDOM from 'react-dom';
import '../../index.css';

// 使用一个特殊的 `children` prop 来将他们的子组件传递到渲染结果中
function FancyBorder(props) {
    return (
        <div className={'FancyBorder FancyBorder-' + props.color}>
            {props.children}
        </div>
    );
}

// <FancyBorder> JSX 标签中的所有内容都会作为一个 children prop 传递给 FancyBorder 组件。
function WelcomeDialog() {
    return (
        <FancyBorder color="blue">
            <h1 className="Dialog-title">
                Welcome
            </h1>
            <p className="Dialog-message">
                Thank you for visiting our spacecraft!
            </p>
        </FancyBorder>
    );
}

ReactDOM.render(<WelcomeDialog/>, document.getElementById('root'));