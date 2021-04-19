import React from 'react';
import ReactDOM from 'react-dom';
import '../../index.css';
import App from '../../App';
import * as serviceWorker from '../../serviceWorker';

// 提取组件之前的代码

// 评价组件Comment
function Comment(props) {
  return (
    <div className="Comment">
      <div className="UserInfo">
        <img className="Avatar"
          src={props.author.avatarUrl}
          alt={props.author.name}
        />
        <div className="UserInfo-name">
          {props.author.name}
        </div>
      </div>
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}

// formatDate方法
function formatDate(date) {
  return date.toLocaleString();
}

// 评价对象，需要传入要渲染的组件中
const myComment = {
  text: 'React is a goot framework of JavaScript！',
  date: new Date(),
  author: {
    avatarUrl: 'https://hjtest.hjfile.cn/u/200/23403241/12f22ecd93b840a.jpg',
    name: 'Lucifer'
  }
};

ReactDOM.render(
  <Comment {...myComment}/>,   // 将myComment对象传入myComment组件中
  document.getElementById('root')
);

// const lucifer = {
//   avatarUrl: 'https://hjtest.hjfile.cn/u/200/23403241/12f22ecd93b840a.jpg',
//   name: 'Lucifer',
// };

// ReactDOM.render(
//   <Comment text='Hello, World!' date={new Date()} author={lucifer} />,
//   document.getElementById('root')
// );