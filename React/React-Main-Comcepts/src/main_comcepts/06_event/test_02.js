import React from 'react';
import ReactDOM from 'react-dom';
import '../../index.css';
import App from '../../App';
import * as serviceWorker from '../../serviceWorker';

// 切换开关状态事件

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: false}  // 构造函数中定义开关初始状态
    // 绑定函数
    this.handleClick = this.handleClick.bind(this);
  }

  // 转换方法，点击时调用
  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }
  
  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}

ReactDOM.render(
  <Toggle/>,
  document.getElementById('root')
);
