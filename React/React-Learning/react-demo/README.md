### 模块说明

本模块包含两个React Demo

#### 项目结和说明
```
├── public
│   ├── comment_page    // 评价demo用到的资源
│   ├── css
│   ├── users-page      // 用户搜索demo用到的资源
│   └── index.html      // 主页面
│
├── src-comment         // 评价demo
│   ├── components
│   └── index.js
└── src-users           // 用户搜索demo
    ├── components
    └── index.js
```

#### 启动方式
想要启动哪个demo的时候把哪个目录重命名为src，如想启动评价demo，将src-comment重命名为src，启动即可

### 一、评价demo
以下是评价demo中的关注点

#### app
* setTime方法模拟异步请求
* 类中的方法使用箭头函数，使之不用在构造函数中绑定this，因为箭头函数没有自身的this，为找外围的this，外围正好是组件，所以函数自动绑定到组件上
* 删除评论函数中操作数组中元素的方法

#### comment-add
* onChange事件自动收集数据到state

#### comment-list
* comments数组用map方法，得到CommentItem组件列表

### 二、用户搜索demo
以下是用户搜索demo中的关注点

#### search
* static关键字声明组件的属性类别propTypes

#### search-list
* componentWillReceiveProps，组件props更新时调用的生命周期函数（已过时）