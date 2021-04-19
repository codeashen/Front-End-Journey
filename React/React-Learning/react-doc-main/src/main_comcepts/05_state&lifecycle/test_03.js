import React from 'react';
import '../../index.css';

// 更新 state 的注意问题


// 不能直接修改state, 要通过 setState() 方法
class Cmp1 extends React.Component {
    changeState() {
        // this.state.comment = 'Hello';  // Wrong
        this.setState({comment: 'Hello'});
    }
}

/*
因为 this.props 和 this.state 可能会异步更新，所以你不要依赖他们的值来更新下一个状态。
要解决这个问题，可以让 setState() 接收一个函数而不是一个对象。这个函数用上一个 state 作为第一个参数，
将此次更新被应用时的 props 做为第二个参数：
*/
class Cmp2 extends React.Component {
    changeState() {
        // // Wrong
        // this.setState({
        //   comment: this.state.counter + this.props.increment
        // });

        this.setState((state, props) => ({
            counter: state.counter + props.increment
        }));
    }
}

// 上面使用了箭头函数，也可以使用普通函数
class Cmp2 extends React.Component {
    changeState() {
        // Correct
        this.setState(function (state, props) {
            return {
                counter: state.counter + props.increment
            }
        });
    }
}
