import React from 'react';
import ReactDOM from 'react-dom';
import '../../index.css';

// 使用 State 完成计时器

function Clock(props) {
    return (
        <div>
            <h1>Hello, World!</h1>
            <h2>It is {props.date.toLocaleTimeString()}.</h2>
        </div>
    );
}

function tick() {
    ReactDOM.render(
        <Clock date={new Date()}/>,
        document.getElementById('root')
    );
}

setInterval(tick, 1000);