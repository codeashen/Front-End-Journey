import React from 'react';
import ReactDOM from 'react-dom';
import '../../index.css';

// 接受 celsius 温度作为一个 prop，据此返回否达到沸点
function BoilingVerdict(props) {
    if (props.celsius >= 100) {
        return <p>水达到了沸点.</p>;
    }
    return <p>水没有达到沸点.</p>;
}

// 输入计算组件
class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {temperature: ''};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({temperature: e.target.value});
    }

    render() {
        const temperature = this.state.temperature;
        return (
            <fieldset>
                <legend>输入摄氏温度:</legend>
                <input value={temperature} onChange={this.handleChange} />
                <BoilingVerdict celsius={parseFloat(temperature)} />
            </fieldset>
        );
    }
}

ReactDOM.render(<Calculator/>, document.getElementById('root'));