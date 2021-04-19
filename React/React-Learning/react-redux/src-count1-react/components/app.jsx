import React, {Component} from 'react'

export default class App extends Component {
    state = {
        count: 0
    }

    increment = () => {
        const num = this.numSelect.value * 1;
        const count = this.state.count + num;
        this.setState({count});
    }
    decrement = () => {
        const num = this.numSelect.value * 1;
        const count = this.state.count - num;
        this.setState({count});
    }
    incrementIfOdd = () => {
        let count = this.state.count;
        if (count % 2 === 1) {
            const num = this.numSelect.value * 1;
            count += num;
            this.setState({count});
        }
    }
    incrementAsync = () => {
        setTimeout(this.increment, 1000);
    }

    render() {
        const {count} = this.state;

        return (
            <div>
                <p>Total count: {count}</p>
                <select ref={select => this.numSelect = select}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>&nbsp;&nbsp;
                <button onClick={this.increment}>+</button>
                &nbsp;
                <button onClick={this.decrement}>-</button>
                &nbsp;
                <button onClick={this.incrementIfOdd}>increment if odd</button>  {/* 奇数才增加 */}
                &nbsp;
                <button onClick={this.incrementAsync}>increment async</button>   {/* 异步增加 */}
            </div>
        );
    }
}