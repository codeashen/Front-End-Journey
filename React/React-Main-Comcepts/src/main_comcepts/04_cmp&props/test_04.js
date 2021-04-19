import React from 'react';
import ReactDOM from 'react-dom';
import '../../index.css';
import App from '../../App';
import * as serviceWorker from '../../serviceWorker';

// 组件拆分后

// 头像组件
function Avatar(props) {
  return (
    <img className="Avator"
      src={props.user.avatarUrl}
      alt={props.user.name}
    />
  );
}

// 用户信息组件，包含了头像组件
function UserInfo(props) {
  return (
    <div className="UserInfo">
      <Avatar user={props.user} />
      <div className="UserInfo-name">
        {props.user.name}
      </div>
    </div>
  );
}

// 评价组件
function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo user={props.user} />
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}

// formateDate方法
function formatDate(date) {
  return date.toLocaleString();
}


// 渲染
// 评价对象，需要传入要渲染的组件中
const myComment = {
  text: 'React is a goot framework of JavaScript！',
  date: new Date(),
  user: {
    avatarUrl: 'https://hjtest.hjfile.cn/u/200/23403241/12f22ecd93b840a.jpg',
    name: 'Lucifer'
  }
};

ReactDOM.render(
  <Comment {...myComment}/>,   // 将myComment对象传入myComment组件中
  document.getElementById('root')
);
