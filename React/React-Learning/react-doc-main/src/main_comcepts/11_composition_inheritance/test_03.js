import React from 'react';
import ReactDOM from 'react-dom';
import '../../index.css';

/*
WelcomeDialog 可以说是 Dialog 的特殊实例。
在 React 中，我们也可以通过组合来实现这一点。“特殊”组件可以通过 props 定制并渲染“一般”组件：
 */

function Dialog(props) {
    return (
        <div color="blue">
            <h1 className="Dialog-title">
                {props.title}
            </h1>
            <p className="Dialog-message">
                {props.message}
            </p>
        </div>
    );
}

function WelcomeDialog() {
    return (
        <Dialog
            title="Welcome"
            message="Thank you for visiting our spacecraft!" />
    );
}

ReactDOM.render(<WelcomeDialog/>, document.getElementById('root'));