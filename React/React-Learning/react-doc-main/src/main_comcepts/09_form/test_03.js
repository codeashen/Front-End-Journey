import React from 'react';
import ReactDOM from 'react-dom';
import '../../index.css';

// select 选择框

/*
以下示例为单选，也可以将数组传递到 value 属性中，以支持在 select 标签中选择多个选项：

<select multiple={true} value={['B', 'C']}>
*/

class FlavorForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: 'coconut'};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('你喜欢的风味是: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    选择你喜欢的风味:
                    {/* 使用 value 表示那个被选中，而不是原生的在选项中加 selected 属性 */}
                    <select value={this.state.value} onChange={this.handleChange}>
                        <option value="grapefruit">葡萄柚</option>
                        <option value="lime">酸橙</option>
                        <option value="coconut">椰子</option>
                        <option value="mango">芒果</option>
                    </select>
                </label>
                <input type="submit" value="提交"/>
            </form>
        );
    }
}

ReactDOM.render(
  <FlavorForm/>,
  document.getElementById('root')
)