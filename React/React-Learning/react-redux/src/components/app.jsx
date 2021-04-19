import React, {Component} from "react";
import PropTypes from 'prop-types';
import * as actions from '../redux/actions';

/*
应用组件
 */
export default class App extends Component {
    static propTypes = {
        store: PropTypes.object.isRequired
    }

    increment = () => {
        const data = this.numSelect.value * 1;
        // dispatch 执行操作
        this.props.store.dispatch(actions.increment(data));
    }
    decrement = () => {
        const data = this.numSelect.value * 1;
        this.props.store.dispatch(actions.decrement(data));
    }
    incrementIfOdd = () => {
        // 取出 store 中数据的方法
        const count = this.props.store.getState();
        if (count % 2 === 1) {
            const data = this.numSelect.value * 1;
            this.props.store.dispatch(actions.increment(data));
        }
    }
    incrementAsync = () => {
        setTimeout(this.increment, 1000);
    }

    render() {
        return (
            <div>
                {/* getState() 方法取出 store 中的数据 */}
                <p>Total count: {this.props.store.getState()}</p>
                <select ref={select => this.numSelect = select}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>&nbsp;&nbsp;
                <button onClick={this.increment}>+</button>
                &nbsp;
                <button onClick={this.decrement}>-</button>
                &nbsp;
                <button onClick={this.incrementIfOdd}>increment if odd</button>
                &nbsp;
                <button onClick={this.incrementAsync}>increment async</button>
            </div>
        );
    }
}