import React from 'react';
import ReactDOM from 'react-dom';
import '../../index.css';

// text 文本框

class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // 表单值改变函数
    handleChange(event) {
        this.setState({value: event.target.value});  // event.target 直接获取到表单项
    }

    // 提交函数
    handleSubmit(event) {
        alert('提交的名字：' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    名字：
                    <input type="text" value={this.state.value} onChange={this.handleChange}/>
                </label>
                <input type="submit" value="提交"/>
            </form>
        );
    }
}

ReactDOM.render(
    <NameForm/>,
    document.getElementById('root')
);
