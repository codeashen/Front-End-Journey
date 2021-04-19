import React from 'react';
import ReactDOM from 'react-dom';
import '../../index.css';

/*
更新：在已有摄氏温度输入框的基础上，我们提供华氏度的输入框，并保持两个输入框的数据同步
*/

const scaleName = {
    c: '摄氏',
    f: '华氏'
}

// 转为摄氏度函数
function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}
// 转为华氏度函数
function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}
/**
 * 转换函数
 * @param temperature 温度 number
 * @param convert     转换方法 function
 * @returns {string}
 */
function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
        return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}

// 接受 celsius 温度作为一个 prop，据此返回否达到沸点
function BoilingVerdict(props) {
    if (props.celsius >= 100) {
        return <p>水达到了沸点.</p>;
    }
    return <p>水没有达到沸点.</p>;
}

// 输入框组件
class TemperatureInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {temperature: ''};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.onTemperatureChange(e.target.value);
    }

    render() {
        const temperature = this.props.temperature;
        const scale = this.props.scale;
        return (
            <fieldset>
                {/* 根据传入的props中的scale，取出scaleName中的属性展示 */}
                <legend>输入{scaleName[scale]}温度:</legend>
                <input value={temperature} onChange={this.handleChange}/>
            </fieldset>
        );
    }
}

// 计算组件
class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            temperature: '',
            scale: 'c'
        }
        this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    }

    handleCelsiusChange(temperature) {
        this.setState({scale: 'c', temperature});
    }

    handleFahrenheitChange(temperature) {
        this.setState({scale: 'f', temperature});
    }

    render() {
        // 取出数据
        const scale = this.state.scale;
        const temperature = this.state.temperature;
        // 计算摄氏、华氏度
        const celsius = scale === 'c' ? temperature : tryConvert(temperature, toCelsius);
        const fahrenheit = scale === 'f' ? temperature : tryConvert(temperature, toFahrenheit);
        return (
            <div>
                <TemperatureInput scale="c" temperature={celsius} onTemperatureChange={this.handleCelsiusChange}/>
                <TemperatureInput scale="f" temperature={fahrenheit} onTemperatureChange={this.handleFahrenheitChange}/>
                <BoilingVerdict celsius={parseFloat(celsius)} />
            </div>
        );
    }
}

ReactDOM.render(<Calculator/>, document.getElementById('root'));