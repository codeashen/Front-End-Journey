## React Router 使用Demo

### 前端路由的实现
/public/history/demo.html
使用history对象实现前台路由

#### history库
* 网址: https://github.com/ReactTraining/history
* 管理浏览器会话历史(history)的工具库
* 包装的是原生BOM中window.history和window.location.hash

#### history API
* History.createBrowserHistory(): 得到封装window.history的管理对象
* History.createHashHistory(): 得到封装window.location.hash的管理对象
* history.push(): 添加一个新的历史记录
* history.replace(): 用一个新的历史记录替换当前的记录
* history.goBack(): 回退到上一个历史记录
* history.goForword(): 前进到下一个历史记录
* history.listen(function(location){}): 监视历史记录的变化

### react-router 案例


#### 路由组件和非路由组件

#### 关注点

**index.js**
* 被 BrowserRouter 或 HashRouter 包裹的组件才有路由效果

**index.css**
* !important 标注为重要样式，覆盖其他干扰项

**my-nav-link.jsx**
* 包装组件

**app.jsx**
* 导航路由链接 NavLink
* 可切换的路由组件 Switch
* 将导航渲染到新位置 Redirect, 可以在导航没有选中的时候默认定位到某个导航项。

**message.jsx**
* 通过 match 取出 path
* Route 标签中通过 :id 传入参数到下一个组件中，存在 match 对象中
* 事件函数中使用箭头函数包裹，实现传递参数，实际上事件函数是外层的箭头函数
* 使用 props 中的 history 对象实现前端路由

**message-detail.jsx**
* 通过 match 取出 id, 值是 Message 组件通过 Route 标签路由地址传进来的
