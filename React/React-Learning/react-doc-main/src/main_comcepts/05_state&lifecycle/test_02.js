import React from 'react';
import ReactDOM from 'react-dom';
import '../../index.css';

// 使用 State 完成计时器, 需要使用 class 方式

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    // 生命周期函数，会在组件渲染到DOM中后执行，用来设置计时器
    componentDidMount() {
        this.timerID = setInterval(   // 每秒调用一次 tick 方法
            () => this.tick(),
            1000
        );
    }

    // 生命周期函数，会在组件从DOM移除执行，用来清除计时器
    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    // 设置 state 方法
    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div>
                <h1>Hello, World!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}

ReactDOM.render(
    <Clock/>,
    document.getElementById('root')
);